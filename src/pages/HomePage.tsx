import { 
  Card, 
  Image, 
  Text, 
  Loader,
  Group, 
} from "@mantine/core";
import { useAtom } from "jotai";
import { searchAtom } from "../store"; // JotaiのAtomをimport

import useOnAirAnime from "../hooks/onAirAnime";
import useSearchAnime from "../hooks/searchAnime";

const Home = () => {
  const [searchQuery] = useAtom(searchAtom); // Jotaiで状態取得

  // 検索クエリがある場合は検索結果、ない場合は最近のアニメを表示
  const { animeList, loading, error } = searchQuery 
    ? useSearchAnime(searchQuery) 
    : useOnAirAnime(20); 

  return (
    <div className="flex">
      <Group visibleFrom="sm">
        <div className="w-64 border-r border-gray-200 h-full min-h-screen sticky top-0"></div>
      </Group>

      {/* メインコンテンツ */}
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">
          {searchQuery ? `Search Results for "${searchQuery}"` : "Recent Anime"}
        </h2>

        {loading && <Loader />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-wrap gap-5">
          {animeList.map((anime) => (
            <Card
              key={anime.mal_id}
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
