import { useState, useEffect } from "react";
import axios from "axios";
import { Anime } from "../type/Anime";

export default function useSearchAnime(query: string) {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!query) {
      setAnimeList([]);
      return;
    }

    const fetchAnime = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
          params: {
            q: query,
            limit: 10,
          },
        });

        setAnimeList(response.data.data);
      } catch (err) {
        setError("Failed to get anime");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [query]);

  return { animeList, loading, error };
};
