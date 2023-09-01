import { Flex, Box, Text } from '@chakra-ui/react';
import { skills } from '../constants';

const SkillsPage = () => {
  return (
    <div>
      <h1>Skills</h1>
      <Flex alignItems="center" justifyContent="center">
        {skills.map((skill, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            mr={4}
            p={2}
            border="3px solid gray"
            borderRadius="md"
          >
            {skill.icon}
            <Text ml={2}>{skill.name}</Text>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default SkillsPage;
