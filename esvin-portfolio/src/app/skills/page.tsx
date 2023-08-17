import { Flex, Box, Text } from '@chakra-ui/react';
import { skills } from '../constants';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const SkillsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Skills</h1>
      <Flex alignItems="center" justifyContent="center">
        {skills.map((skill, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            mr={4}
            p={2}
            border="1px solid gray"
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
