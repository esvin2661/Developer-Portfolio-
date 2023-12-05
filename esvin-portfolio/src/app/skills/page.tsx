import { Flex, Box, Text } from '@chakra-ui/react';
import { skills } from '../constants';

//Figure out how to customize skills icon using Tailwind.css 
const SkillsPage = () => {
  return (
    <div>
     <Text fontSize={23} textAlign={['center']}>Toolbox</Text>
     <Flex
        direction={['column', 'row']} // Stack items vertically on small screens, horizontally on larger screens
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap" // Allow items to wrap onto the next line on small screens
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={4}
            p={2}
            //icon width and height 
            width={150}
            height={100}
            border="3px solid black"
            borderRadius="full"
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
