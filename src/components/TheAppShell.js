import { useState } from "react";
import "../css/AppShell.css";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { ButtonsMenu } from "./ButtonsMenu";
import { DisplayArray } from "./DisplayArray";

export default function TheAppShell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  ///////
  // handles the creation of the array
  const [sortArray, setSortArray] = useState([]);
  const [sliderValue, setSliderValue] = useState(25);

  const generateRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const makeNewArray = () => {
    // const barWidth = 50 / sliderValue + 1.4;
    const barWidth = 1.9 / (sliderValue / 100) + 1.4;

    const itemsInArray =
      ((sliderValue / 100) * document.querySelector("#array").offsetWidth) /
        barWidth -
      3;
    setSortArray([]);
    document.querySelectorAll(".bar").forEach(function (item) {
      item.style.backgroundColor = "#72ffff";
    });
    for (let i = 0; i <= itemsInArray; i++) {
      setSortArray((current) => [...current, generateRandomInteger(10, 350)]);
    }
  };
  const determineWidth = () => {
    // const calculatedWidth = 1.9 / (sliderValue / 100);
    const calculatedWidth = 1.9 / (sliderValue / 100);

    return `${calculatedWidth}px`;
  };

  ////////
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="md"
          hidden={!opened}
          width={{ sm: 200, lg: 320 }}
        >
          <Text>
            <ButtonsMenu
              makeNewArray={makeNewArray}
              slideValue={sliderValue}
              setSliderValue={setSliderValue}
            />
          </Text>
        </Navbar>
      }
      header={
        <Header height={90} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>
              <h1>Vince Moschella's Sorting Visualizer</h1>
            </Text>
          </div>
        </Header>
      }
    >
      <Text>
        <DisplayArray sortArray={sortArray} determineWidth={determineWidth} />
      </Text>
    </AppShell>
  );
}
