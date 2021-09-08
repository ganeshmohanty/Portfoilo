import { Box, Link, Flex, Heading, Icon } from "@chakra-ui/react";
import { FiInstagram, FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import PageAnimation from "../components/PageAnimation";

const SocialIcon = ({ children }) => {
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
    >
      {children}
    </Link>
  );
};

const HomeScreen = () => {
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
          Ganesh Mohanty
        </Heading>
        <Heading
          as="h2"
          color="whiteAlpha.700"
          fontSize={{ lg: "2xl", md: "1xl" }}
          textShadow="1px 1px "
          letterSpacing="wide"
          fontWeight="medium"
        >
          Full Satck Javascript Developer
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
              to="/contact"
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
              Download cv
            </Link>
          </Box>
        </Flex>
        <Flex mt="1rem" wrap="wrap">
          <SocialIcon>
            <Icon
              as={FiGithub}
              fontSize={{ sm: "10px", md: "20px", lg: "20px" }}
              color="whiteAlpha.800"
            />
          </SocialIcon>
          <SocialIcon>
            <Icon as={FiLinkedin} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
          <SocialIcon>
            <Icon as={FiInstagram} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
          <SocialIcon>
            <Icon as={FiFacebook} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeScreen;
