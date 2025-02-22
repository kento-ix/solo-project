import { Group } from "@mantine/core";
import useOnAirAnime from "../hooks/onAirAnime";
import { Card, Image, Text, Loader } from "@mantine/core";

const Home = () => {
  const { animeList, loading, error } = useOnAirAnime(20); 

  return (
    <div className="flex">
        <Group visibleFrom="sm">
                <div className="w-64 border-r border-gray-200 h-full min-h-screen sticky top-0">
                </div>
        </Group>

      {/* メインコンテンツ */}
      <div className=" p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">放送中のアニメ</h2>

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
