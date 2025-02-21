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
        <Group h="100%">
          <Group className={classes.top}>
            <Text onClick={navigateToHome} className={classes.text}>
              The <strong>Anime</strong> Checker
            </Text>
            <SearchBar/>
          </Group>

          {/* Destop */}
          <Group visibleFrom="sm">
            <SideBar />
          </Group>

          {/* Mobile */} 
          <Group hiddenFrom="sm" gap={0}>
            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        size="250px"
        title="Menu"
        hiddenFrom="sm"
      >
        <ScrollArea h="100%">
          <SideBar />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Header;
