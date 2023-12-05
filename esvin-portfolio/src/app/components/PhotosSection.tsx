import React  from 'react';
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



//Input inforation to display in each photo card. 
export default function Photos() {
    
//ONLY UPLOAD PNG IMAGES  
  const PhotoData  = [
    {
      imageUrl:
        "/assets/local-photos/castle.png",
      heading: 'The St. Louis Cathedral',
      text:
        'In this post, we will give an overview of what is new in React 18, and what it means for the future.',
    },
    {
      imageUrl:
      "/assets/local-photos/street.png",
      heading: 'Vampire',
      text:
        'Photo is not linked to project ',
    },
    {
      imageUrl:
      "/assets/local-photos/boston.png",
      heading: 'Boston',
      text:
        'Photo is not linked to project ',
    },
    {
      imageUrl:
      "/assets/local-photos/man.png",
      heading: 'Serene',
      text:
        'In this post, we will give an overview of what is new in React 18, and what it means for the future.',
    },
    {
      imageUrl:
      "/assets/local-photos/lights.png",
      heading: 'Butterflied',
      text:
        'Another project description goes here.',
    },
    {
      imageUrl:
      "/assets/local-photos/arc.png",
      heading: 'Santa Catalina Arch ',
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
                <Text fontSize={30} textAlign={['center']}>Photos</Text> 
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
     minW={{ base: 'full', md: 'xs' }}
     maxW={{ base: 'full', md: 'xs' }} 
    rounded={'sm'}
    my={5}
    mx={[0, 5]}
    overflow={'hidden'}
    bg="white"
    border={'1px'}
    borderColor="black"
    boxShadow={useColorModeValue('3px 6px 0 black', '3px 6px 0 cyan')}
  >
      <Box h={'320px'} borderBottom={'1px'} borderColor="black">
        <Img src={imageUrl} roundedTop={'sm'} objectFit="cover" h="full" w="full" alt={'Card Image'} />
      </Box>
      <Box p={4}>
        <Box>
        </Box>
        <Heading color={'black'} fontSize={'xl'} noOfLines={1}>
          {heading}
        </Heading>
        <Text fontSize={15} color={'gray.500'} noOfLines={2}>
          {text}
        </Text>
      </Box>
      <HStack>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={'space-between'}
          roundedBottom={'sm'}
          cursor="pointer"
        >
        </Flex>
      </HStack>
    </Box>
  );
};