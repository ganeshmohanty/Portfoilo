import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Hamburger from "./Hamburger";

import {
  BiHome,
  BiUser,
  BiFileBlank,
  BiBookContent,
  BiEnvelope,
} from "react-icons/bi";

import IconLink from "./IconLink";

const NavFlex = motion(Flex);
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

      <NavFlex
        pos="fixed"
        top="0"
        left="0"
        as="header"
        direction="column"
        justify="center"
        h="100vh"
        bottom="0"
        zIndex="1999"
        p="15px"
        transition="all"
        bg={{
          base: isOpen ? "hsl(0, 0%, 20%)" : "transparent",
          sm: isOpen ? "hsl(0, 0%, 20%)" : "transparent",
          md: "transparent",
          lg: "transparent",
        }}
        animate={{
          width: isOpen ? "100vw" : "50px ",
        }}
      >
        <Flex
          as="nav"
          direction="column"
          h="100vh"
          justifyContent="center"
          display={{
            base: isOpen ? "flex" : "none",
            sm: isOpen ? "flex" : "none",
            md: "flex",
            lg: "flex",
          }}
        >
          <IconLink title="Home" isOpen={isOpen} setIsOpen={setIsOpen} url="/">
            <Icon as={BiHome} w="5" h="5" />
          </IconLink>
          <IconLink
            title="About"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            url="/about"
          >
            <Icon as={BiUser} w="5" h="5" />
          </IconLink>
          <IconLink
            title="Blogs"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            url="/blogs"
          >
            <Icon as={BiFileBlank} w="5" h="5" />
          </IconLink>
          <IconLink
            title="Projects"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            url="/projects"
          >
            <Icon as={BiBookContent} w="5" h="5" />
          </IconLink>
          <IconLink
            title="Contact"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            url="/contact"
          >
            <Icon as={BiEnvelope} w="5" h="5" />
          </IconLink>
        </Flex>
      </NavFlex>
    </>
  );
};

export default Header;
