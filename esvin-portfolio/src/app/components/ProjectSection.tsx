import React from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  useColorModeValue,
  HStack,
  SimpleGrid,
  Center,
  VStack,
} from "@chakra-ui/react";

const ProjectData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8",
    heading: "Esvin Project 1",
    text: "In this post, we will give an overview of what is new in React 18, and what it means for the future.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8",
    heading: "Esvin Project 2",
    text: "Another project description goes here.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8",
    heading: "Esvin Project 3",
    text: "Yet another project description for the third card.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8",
    heading: "Esvin Project 3",
    text: "Yet another project description for the third card.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8",
    heading: "Esvin Project 3",
    text: "Yet another project description for the third card.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8",
    heading: "Esvin Project 3",
    text: "Yet another project description for the third card.",
  },
];

//used to Add or Remove prooject rows
export default function Projects() {
  return (
    <div>
      <Center py={6}>
        <Flex>
          <VStack spacing={4} align="stretch">
            //Handles Project header
            <Text
              fontSize={30}
              textAlign={["center"]}
              fontWeight="bold"
              color="blue.500"
              mb={4}
            >
              Projects
            </Text>
            <SimpleGrid columns={3} spacing={4}>
              {ProjectData.map((card, index) => (
                <Card
                  key={index}
                  imageUrl={card.imageUrl}
                  heading={card.heading}
                  text={card.text}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Flex>
      </Center>
    </div>
  );
}

//This function edits the card UI
function Card({
  imageUrl,
  heading,
  text,
}: {
  imageUrl: string;
  heading: string;
  text: string;
}) {
  return (
    <Box
      minW={{ base: "full", md: "xs" }}
      maxW={{ base: "full", md: "xs" }}
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("3px 6px 0 black", "3px 6px 0 cyan")}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }} // Scale the card on hover
    >
      <Box h={"250px"} borderBottom={"1px"} borderColor="black">
        <Img
          src={imageUrl}
          roundedTop={"sm"}
          objectFit="cover"
          h="full"
          w="full"
          alt={"Card Image"}
        />
      </Box>
      <Box p={4}>
        <Box></Box>
        <Heading color={"black"} fontSize={"xl"} noOfLines={1}>
          {heading}
        </Heading>
        <Text fontSize={15} color={"gray.500"} noOfLines={2}>
          {text}
        </Text>
      </Box>
      <HStack>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={"space-between"}
          roundedBottom={"sm"}
          cursor="pointer"
        ></Flex>
      </HStack>
    </Box>
  );
}
