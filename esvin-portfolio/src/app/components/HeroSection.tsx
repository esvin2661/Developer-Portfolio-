"use client";

import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
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
            <Text color={"#54bbdc"} as={"span"}>
              Portfolio
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Hello! I'm Esvin Ruiz, a computer science student at Wilmington
            University. I'm passionate about creating opportunities for
            underrepresented minorities and turning innovative ideas into code.
            &apos;
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
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/Esvin Pic-modified.png"}
          width={450}
          height={195}
          layout="contain"
        />
        
      </Flex>
    </Stack>

  );
}
