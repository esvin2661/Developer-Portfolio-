import { Flex, Box, Text } from '@chakra-ui/react';
import { skills } from '../constants';

//Figure out how to customize skills icon using Tailwind.css 
const SkillsPage = () => {
  return (
    <div>
     <Text fontSize={23} textAlign={['center']}>ToolBox</Text>
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
