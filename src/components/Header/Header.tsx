import {
  Box,
  Burger,
  Drawer,
  Group,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";

import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <Box pb={0}>
  <header className={classes.header}>
    {/* ヘッダー全体 */}
    <Group h="100%" justify="space-between" align="center">
      {/* 中央寄せ: ロゴ + サーチバー */}
      <Group className={classes.top} justify="center" align="center" w="100%">
        <Group className={classes.sub}>
          <Text onClick={navigateToHome} className={classes.text}>
            The <strong>Anime</strong> Checker
          </Text>
          <SearchBar />
        </Group>
      </Group>

      {/* モバイル用バーガーメニュー (右上) */}
      <Group hiddenFrom="sm" style={{ position: 'absolute', right: '10px', top: '10px' }}>
        <Burger opened={drawerOpened} onClick={toggleDrawer} />
      </Group>

      {/* デスクトップ用サイドバー */}
      <Group visibleFrom="sm">
        <SideBar />
      </Group>
    </Group>
  </header>

  {/* モバイル用ドロワー */}
  <Drawer
    opened={drawerOpened}
    onClose={closeDrawer}
    padding="md"
    size="250px"
    title="Menu"
    hiddenFrom="sm"
    position="right"
  >
    <ScrollArea h="100%">
      <SideBar />
    </ScrollArea>
  </Drawer>
</Box>

  );
};

export default Header;
