import { Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const Motionlink = motion(Link);
const IconLink = ({ children, title, url, setIsOpen, isOpen }) => {
  return (
    <Motionlink
      as={RouterLink}
      to={url}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="blackAlpha.800"
      h="56px"
      w={{ base: "100%", sm: "100%", lg: "56px", md: "56px" }}
      mb="8px"
      fontSize="15px"
      borderRadius="56px"
      bg="gray.300"
      px="10px"
      py="18px"
      overflow="hidden"
      shadow="md"
      _hover={{
        w: { sm: "100%", md: "8rem" },
        borderRadius: "50px",
        color: "white",
        background: "primary.100",
        textDecoration: "none",
        transition: "0.4s",
      }}
      role="group"
      onClick={() => setIsOpen(false)}
    >
      {children}
      <Box
        as="span"
        fontSize="15px"
        fontWeight="medium"
        pl="1.5"
        display={{ sm: "block", md: "none", lg: "none" }}
        _groupHover={{ display: "block" }}
      >
        {title}
      </Box>
    </Motionlink>
  );
};

export default IconLink;
