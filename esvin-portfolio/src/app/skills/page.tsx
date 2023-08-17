import { Flex, Box, Text } from '@chakra-ui/react';
import { skills } from '../constants';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const SkillsPage: React.FC = () => {
  return (
    <div>
      <h1>Skills</h1>
      <Flex direction="column" alignItems="center">
        {skills.map((skill, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            {skill.icon}
            <Text ml={2}>{skill.name}</Text>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default SkillsPage;
