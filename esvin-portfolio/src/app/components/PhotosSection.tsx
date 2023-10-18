'use client'
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from "next/image";
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';



//Input inforation to display in each photo card. 
export default function Photos() {
    

  const PhotoData  = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8',
      heading: 'Esvin Photo 1',
      text:
        'In this post, we will give an overview of what is new in React 18, and what it means for the future.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8',
      heading: 'Esvin Photo  2',
      text:
        'Photo is not linked to project ',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8',
      heading: 'Esvin Photo 3',
      text:
        'Yet another project description for the third card.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8',
      heading: 'Esvin Photo 1',
      text:
        'In this post, we will give an overview of what is new in React 18, and what it means for the future.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8',
      heading: 'Esvin Photo  2',
      text:
        'Another project description goes here.',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=8',
      heading: 'Esvin Photo 3',
      text:
        'Yet another project description for the third card.',
    },
  ];

    return (
      <div>
        <Center py={6}>
          <Flex>
            <VStack spacing={4} align="stretch">
            //Handles the photo text 
                <Text fontSize={23} textAlign={['center']}>Photos</Text> 
              <SimpleGrid columns={3} spacing={4}>
                {PhotoData.map((card, index) => (
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
    )
  }

// This will edit the card 
function Card({ imageUrl, heading, text }: { imageUrl: string; heading: string; text: string }) {
  return (
    <Box
    w="xs"
    rounded={'sm'}
    my={5}
    mx={[0, 5]}
    overflow={'hidden'}
    bg="white"
    border={'1px'}
    borderColor="black"
    boxShadow={useColorModeValue('3px 6px 0 black', '3px 6px 0 cyan')}
  >
      <Box h={'200px'} borderBottom={'1px'} borderColor="black">
        <Img src={imageUrl} roundedTop={'sm'} objectFit="cover" h="full" w="full" alt={'Card Image'} />
      </Box>
      <Box p={4}>
        <Box>
        </Box>
        <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
          {heading}
        </Heading>
        <Text color={'gray.500'} noOfLines={2}>
          {text}
        </Text>
      </Box>
      <HStack>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={'space-between'}
          roundedBottom={'sm'}
          borderLeft={'1px'}
          cursor="pointer"
        >
        </Flex>
      </HStack>
    </Box>
  );
};

