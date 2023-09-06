import React from "react";
import {
  chakra,
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ReactIcon } from "@chakra-ui/icons";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { ReactNode } from 'react'
import { useState } from "react";
//import {CgDarkMode} from 'react-icons/CgDarkMode';

//const [darkMode,setDarkMode] = useState(false);

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
}

const Links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#project-section" },
  { label: "Photos", href: "#photo-section" },
  {
    label: "Resume",
    href: "https://blush-romola-69.tiiny.site/",
    isExternal: true,
  },
];

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const NavLink = (props: NavLinkProps) => {
  const { children, href, isExternal } = props;

  const linkComponent = isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Box>
  );

  return linkComponent;
};


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isExternal={link.isExternal}
                >
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Box>
                  <Stack direction={"row"} spacing={6}>
                    <SocialButton
                      label={"LinkedIn"}
                      href={"https://www.linkedin.com/in/esv261/"} >
                      <FaLinkedin />
                    </SocialButton>
                  </Stack>
                </Box>

              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isExternal={link.isExternal}
                >
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
