// src/hooks/useOnAirAnime.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

type AnimeInfo = {
  mal_id: number;
  title: string;
  images: {
    jpg: { image_url: string };
  };
};

export default function useOnAirAnime(limit: number = 10) {
  const [animeList, setAnimeList] = useState<AnimeInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOnAirAnime = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=${limit}`);
        setAnimeList(response.data.data);
      } catch (err) {
        setError("データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchOnAirAnime();
  }, [limit]);

  return { animeList, loading, error };
}
