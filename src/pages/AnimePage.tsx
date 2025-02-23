import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Anime } from "../type/Anime";
import { Card, Image, Text, Loader } from "@mantine/core";

const AnimePage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState<Anime | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
      } catch (err) {
        setError("Failed to fetch anime details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 flex justify-center">
      {anime && (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="w-96">
          <Card.Section>
            <Image src={anime.images.jpg.image_url} height={320} alt={anime.title} />
          </Card.Section>
          <Text className="text-xl font-bold mt-4 text-center">{anime.title}</Text>
          <Text className="mt-2">{anime.synopsis || "No description available."}</Text>
          <Text className="mt-2 font-medium">On Air Date: {anime.aired?.from ? new Date(anime.aired.from).toLocaleDateString() : "N/A"}</Text>
        </Card>
      )}
    </div>
  );
};

export default AnimePage;