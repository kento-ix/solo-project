import { 
  Card, 
  Image, 
  Text, 
  Loader,
  Group, 
} from "@mantine/core";
import { useAtom } from "jotai";
import { searchAtom } from "../store";

import useOnAirAnime from "../hooks/onAirAnime";
import useSearchAnime from "../hooks/searchAnime";

const Home = () => {
  const [searchQuery] = useAtom(searchAtom); 

  const { animeList, loading, error } = searchQuery ? useSearchAnime(searchQuery) : useOnAirAnime(20); 

  return (
    <div className="flex">
      <Group visibleFrom="sm">
        <div className="w-64 border-r border-gray-200 h-full min-h-screen sticky top-0"></div>
      </Group>

      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : "Recent Anime"}
        </h2>

        {loading && <Loader />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-wrap gap-5">
        {animeList.map((anime, index) => (
          <Card
            key={`${anime.mal_id}-${index}`}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="w-48"
          >
            <Card.Section>
              <Image
                src={anime.images.jpg.image_url}
                height={160}
                alt={anime.title}
                className="cursor-pointer"
                onClick={() => window.location.href = `/anime/${anime.mal_id}`}
              />
            </Card.Section>

            <Text className="text-center text-sm font-semibold">
              {anime.title}
            </Text>
          </Card>
        ))}

        </div>
      </div>
    </div>
  );
};

export default Home;
