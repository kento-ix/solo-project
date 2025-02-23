import { useState, useEffect } from 'react';
import axios from 'axios';

const useTopAnime = (limit: number = 10) => {
  const [topAnime, setTopAnime] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.jikan.moe/v4/top/anime', {
          params: { limit },
        });
        const animeNames = response.data.data.map((anime: any) => anime.title);
        setTopAnime(animeNames);
      } catch (err) {
        setError("Failed to fetch top anime");
      } finally {
        setLoading(false);
      }
    };

    fetchTopAnime();
  }, [limit]);

  return { topAnime, loading, error };
};

export default useTopAnime;
