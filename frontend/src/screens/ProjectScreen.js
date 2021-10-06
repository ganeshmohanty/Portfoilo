import {
  Grid,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  List,
  ListIcon,
  ListItem,
  Link,
} from "@chakra-ui/react";
import rst1 from "../images/rst1.png";
import { BiRightArrow, BiCheckCircle } from "react-icons/bi";
import { PageAnimation } from "../components/PageAnimation";
import { PageHeader } from "../components/TitleHeader";

const ProjectScreen = () => {
  return (
    <>
      <PageAnimation color="yellow.700" />

      <PageHeader children="Projects" />
      <Flex
        w="100%"
        justifyContent="center"
        align="center"
        mt="2rem"
        mb="10rem"
      >
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr ",
            lg: "1fr ",
          }}
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          w="80vw"
          gap="1rem"
          bgColor="primaryBlack.200"
          rounded="md"
        >
          <Flex direction="row" w="80vw">
            <Image src={rst1} objectFit="cover" w="full"></Image>
          </Flex>

          <Box
            p={{ sm: "1rem", base: "1rem", md: "5rem", lg: "5rem" }}
            w="80vw"
            mb="10"
          >
            <Heading
              as="h3"
              color="white"
              fontSize={{
                base: ".5rem",
                md: "1.5rem",
                sm: ".5rem",
                lg: "2rem",
              }}
            >
              G-STORE
            </Heading>
            <Text
              color="whiteAlpha.700"
              mt="2"
              fontSize={{
                base: "xs",
                md: "1rem",
                sm: "xs",
                lg: "1rem",
              }}
              w="full"
            >
              Full stack E-commerce web application made with latest tranding
              technologies that comes with many Features.
            </Text>
            <Box mt="3.5">
              <Link
                href="https://gstoreapp.herokuapp.com/"
                color="white"
                textTransform="uppercase"
                target="_blank"
                _hover={{
                  color: "purple",
                }}
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/ganeshmohanty/gstore"
                ml="3"
                color="white"
                textTransform="uppercase"
                target="_blank"
                _hover={{
                  color: "purple",
                }}
              >
                Github Repo
              </Link>
            </Box>

            <Heading as="h6" color="white" fontSize="1.5rem" mt="8">
              System Architectural Pattern:
            </Heading>
            <List
              spacing={3}
              mt="2"
              bgColor="primaryBlack.100"
              p="6"
              rounded="md"
              w="80%"
              ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "3rem" }}
            >
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                MVC (Model,View,Controller)
              </ListItem>
            </List>
            <Heading as="h6" color="white" fontSize="1.5rem" mt="8">
              Tech Stack Used:
            </Heading>
            <List
              spacing={3}
              mt="2"
              bgColor="primaryBlack.100"
              p="6"
              rounded="md"
              w="80%"
              ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "3rem" }}
            >
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Reactjs
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                NodeJs
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Express
              </ListItem>

              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                MongoDB
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiRightArrow} color="green.500" />
                Others : Axios,mongoose,react-router-dom,chakra-ui
              </ListItem>
            </List>

            <Heading as="h6" color="white" fontSize="1.5rem" mt="8">
              Features:
            </Heading>
            <List
              spacing={3}
              mt="2"
              bgColor="primaryBlack.100"
              p="6"
              rounded="md"
              w="80%"
              ml={{ base: "1rem", sm: "1rem", md: "2rem", lg: "3rem" }}
            >
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Authorization using jwt,Rest Api
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Login,Logout,Register
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Comment,Review,Rating
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Cart,Checkout,Payment option selection,Payment(paypal)
              </ListItem>

              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                View Profile and Update, View Orders
              </ListItem>
              <ListItem color="white">
                <ListIcon as={BiCheckCircle} color="green.500" />
                Admin , Admin Access , Product add and update, View Orders,Make
                it Delivered
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Flex>
    </>
  );
};

export default ProjectScreen;
