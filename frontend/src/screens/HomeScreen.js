import { Box, Link, Flex, Heading, Icon } from "@chakra-ui/react";
import { FiInstagram, FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { PageAnimation } from "../components/PageAnimation";

const SocialIcon = ({ children, url }) => {
  return (
    <Link
      h="12"
      w="12"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      m="1"
      _hover={{
        bg: "primary.100",
      }}
      href={url}
      target="_blank"
    >
      {children}
    </Link>
  );
};

const HomeScreen = () => {
  const NAME = "{ GANESH MOHANTY }";
  return (
    <>
      <PageAnimation color="purple.700" />

      <Flex
        direction="column"
        justify="center"
        align="center"
        wrap="wrap"
        w="full"
        h="100vh"
      >
        <Heading
          as="h1"
          mb="3"
          color="primary.100"
          fontSize={{ base: "50px", sm: "50px", md: "3rem", lg: "4rem" }}
          fontWeight="bold"
          textShadow="1px 1px primary.100"
          textAlign="center"
        >
          {NAME}
        </Heading>
        <Heading
          as="h2"
          color="whiteAlpha.700"
          fontSize={{ lg: "2xl", md: "1xl" }}
          letterSpacing="wide"
          fontWeight="medium"
        >
          Full Stack Javascript Developer
        </Heading>

        <Flex
          wrap="wrap"
          direction={{ sm: "row", base: "column", md: "row", lg: "row" }}
          mt="3rem"
          mb="4"
        >
          <Box m="1rem">
            <Link
              as={RouterLink}
              to="/projects"
              bg="whiteAlpha.800"
              p={{
                sm: "7px 20px",
                base: "7px 20px",
                md: "10px 25px",
                lg: "10px 25px",
              }}
              borderTopLeftRadius="2em"
              borderBottomRightRadius="2em"
              w="232px"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
              _hover={{
                textDecoration: "none",
                bg: "primary.100",
                color: "white",
              }}
            >
              My Projects
            </Link>
          </Box>
          <Box m="1rem">
            <Link
              as={RouterLink}
              to="/about"
              bg="whiteAlpha.800"
              p={{
                sm: "7px 20px",
                base: "7px 20px",
                md: "10px 25px",
                lg: "10px 25px",
              }}
              borderTopLeftRadius="2em"
              borderBottomRightRadius="2em"
              w="232px"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
              _hover={{
                textDecoration: "none",
                bg: "primary.100",
                color: "white",
              }}
            >
              About Me
            </Link>
          </Box>
        </Flex>
        <Flex mt="1rem" wrap="wrap">
          <SocialIcon url="https://github.com/ganeshmohanty">
            <Icon
              as={FiGithub}
              fontSize={{ sm: "10px", md: "20px", lg: "20px" }}
              color="whiteAlpha.800"
            />
          </SocialIcon>
          <SocialIcon url="https://www.linkedin.com/in/ganesh-mohanty-16b672211/">
            <Icon as={FiLinkedin} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
          <SocialIcon url="https://www.instagram.com/ganeshat3000/">
            <Icon as={FiInstagram} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100009877802213">
            <Icon as={FiFacebook} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeScreen;
