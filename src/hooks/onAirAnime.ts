import { useState, useEffect } from "react";
import axios from "axios";
import { Anime } from "../type/Anime";

export default function useOnAirAnime(limit: number) {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let isMounted = true; 

    const fetchAnime = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/top/anime`,
          {
            params: {
              filter: "airing",
              limit: limit,
            },
          }
        );

        if (isMounted) {
          setAnimeList(response.data.data);
        }
      } catch (err: any) {
        if (err.response?.status === 429) {
          setError("too many request");
        } else {
          setError("fail to get data");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    const debounce = setTimeout(fetchAnime, 500);

    return () => {
      clearTimeout(debounce);
      isMounted = false;
    };
  }, [limit]);

  return { animeList, loading, error };
}
