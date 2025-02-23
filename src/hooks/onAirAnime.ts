import { useState, useEffect } from 'react';
import axios from 'axios';
import { AnimeCard } from '../type/Anime';

export default function useOnAirAnime(limit: number = 10) {
  const [animeList, setAnimeList] = useState<AnimeCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOnAirAnime = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=${limit}`);
        setAnimeList(response.data.data);
      } catch (err) {
        setError("Failed to get data");
      } finally {
        setLoading(false);
      }
    };

    fetchOnAirAnime();
  }, [limit]);

  return { animeList, loading, error };
}
