"use client";
import {
  Flex,
  Stack,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Spinning  from "./SpinningImage";

export default function HeroSection() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign="center"
          >
            <Text
              as={"span"}
              position={"relative"}
              fontFamily="Inter"
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "15%", md: "25%%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
                color: 3,
              }}
            >
              Esvin Ruiz
            </Text>
            <br />{" "}
            <Text fontFamily="Intern" color={"blue.400"} as={"span"}>
              Portfolio
            </Text>{" "}
          </Heading>
          <Text
            fontFamily="Nunito Sans"
            fontSize={{ base: "md", lg: "xl" }}
            color={"black "}
            textAlign="center"
          >
            I am Esvin Ruiz, a dedicated computer science student enrolled at
            Wilmington University. My fervor lies in cultivating opportunities
            for underrepresented minorities and transforming innovative concepts
            into tangible reality.
          </Text>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinning/> {/* Use the SpinningImage component */}
      </Flex>
    </Stack>
  );
}
