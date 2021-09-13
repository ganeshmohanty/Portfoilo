import { Grid, Flex, Input, Box, Heading } from "@chakra-ui/react";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiDeviceMobile,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { PageHeader } from "../components/TitleHeader";
import {
  PageAnimation,
  PageAnimationSecond,
} from "../components/PageAnimation";
import { TextIcon } from "../components/TextIcon";

const ContactScreen = () => {
  return (
    <>
      <PageAnimation color="red.700" />
      <PageHeader children="Contact Me" />
      <Flex w="full" align="center" justify="center" direction="column">
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 2fr",
            lg: "1fr 2fr",
          }}
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          gap="2vw"
          w="80vw"
          bg="primaryBlack.200"
          h="60vh"
          borderRadius="md"
          p="6"
          mt="2rem"
        >
          <Flex
            direction="column"
            align="center"
            h="100%"
            justifyContent="center"
          >
            <TextIcon icon={FaGithub}>ganeshmohanty</TextIcon>

            <TextIcon icon={HiOutlineMail}>
              Ganesh.mohanty.1999@gmail.com
            </TextIcon>
            <TextIcon icon={HiDeviceMobile}>+91 7039734267</TextIcon>
            <TextIcon icon={HiLocationMarker}>
              Mumbai ,Maharastra,India
            </TextIcon>
          </Flex>
          <Flex></Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default ContactScreen;
