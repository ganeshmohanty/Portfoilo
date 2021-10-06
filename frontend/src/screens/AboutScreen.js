import { Box, Icon, Text, Grid, Flex, Link, Image } from "@chakra-ui/react";
import {
  FaMapMarkedAlt,
  FaGamepad,
  FaCode,
  FaMusic,
  FaArrowRight,
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiRedux, SiMongodb, SiDjango } from "react-icons/si";
import { BiCycling } from "react-icons/bi";
import image from "../images/my.jpg";
import { PageHeader, BlackTitle } from "../components/TitleHeader";
import { TextIcon, SkillIcon } from "../components/TextIcon";
import { PageAnimation } from "../components/PageAnimation";

const AboutScreen = () => {
  return (
    <>
      <PageAnimation color="green.700" />
      <PageHeader children="About Me" />
      <Flex w="full" align="center" justify="center" direction="column">
        <Flex
          justify="space-between"
          w="80vw"
          bg="primaryBlack.200"
          p="1rem"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          borderRadius="md"
          mt="2rem"
        >
          <Text as="p" color="white" fontSize="1rem" fontWeight="bold">
            Personal Imformation
          </Text>
          <Link
            _hover={{
              textDecoration: "none",
              color: "primary.100",
            }}
            fontSize="1rem"
            color="white"
            textDecoration="none"
            display={{ sm: "none", base: "none", md: "block", lg: "block" }}
          >
            Download CV
          </Link>
        </Flex>
        <Flex
          justify="space-between"
          w="80vw"
          bg="primaryBlack.200"
          p="1rem"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          borderRadius="md"
          mt="1"
          direction={{ sm: "column", base: "column", md: "row", lg: "row" }}
          align="center"
          minH="26rem"
        >
          <Image
            h="15rem"
            w="15rem"
            objectFit="cover"
            borderRadius="50%"
            src={image}
            alt="ganesh"
            mr={{ sm: "0", base: "0", md: "2rem", lg: "2rem" }}
            mb={{ sm: "2rem", base: "2rem", md: "0", lg: "0" }}
            ml={{ sm: "0", base: "0", md: "2rem", lg: "2rem" }}
          />
          <Flex direction="column" p="2rem">
            <Text color="white" mb="1" fontSize="2xl" fontWeight="medium">
              Ganesh Mohanty
            </Text>
            <Text color="primary.100">
              <Icon mr="2" as={FaMapMarkedAlt} />
              Mumbai, India
            </Text>
            <Text color="white" mt="2" fontSize="md" pb="2rem">
              Hey, I am Ganesh Mohanty. I am a young developer, from India and
              despite my age, I have a lot of experience in programming . I am
              someone who is very passionate about Programming and coding
              especially Web Development related stuff. I like to work in HTML,
              CSS, JavaScript, React, NextJS, Node, Express, MongoDB,Python etc.
              Furthermore, I am looking for numerous opportunities which can
              help me to uplift my sphere of knowledge and meanwhile gain work
              experience. Besides that, I love to do a lot of things in my free
              time, like Watching Anime, Web series, Music, Casual Coding and
              spending time with my friends and family.
            </Text>
          </Flex>
        </Flex>

        {/* intrest and eductation  */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
          }}
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          gap="2vw"
          w="80vw"
        >
          {/* Interests */}
          <Box w="full">
            <BlackTitle>My Interests</BlackTitle>
            <Flex
              w="100%"
              bg="primaryBlack.200"
              p="1rem"
              borderRadius="md"
              mt="1"
              direction="column"
              align="center"
            >
              <TextIcon children="Coding" icon={FaCode} />
              <TextIcon children="Music" icon={FaMusic} />
              <TextIcon children="Gaming" icon={FaGamepad} />
              <TextIcon children="Cycling" icon={BiCycling} />
            </Flex>
          </Box>

          {/* Education */}
          <Box w="full">
            <BlackTitle>Education</BlackTitle>
            <Flex
              w="100%"
              bg="primaryBlack.200"
              p="1rem"
              borderRadius="md"
              mt="1"
              direction="column"
              align="center"
            >
              <TextIcon
                children="Bachlor in Computer Science(Mumbai Univercity)"
                icon={FaArrowRight}
              />
              <TextIcon
                children="Full Stack Javascript Devloper(RST Fourm)"
                icon={FaArrowRight}
              />
              <TextIcon
                children="12th Grade(Somaiya College)"
                icon={FaArrowRight}
              />
              <TextIcon
                children="10th Grade(V.S High School)"
                icon={FaArrowRight}
              />
            </Flex>
          </Box>
        </Grid>

        {/* Skill Section */}
        <Box
          w="80vw"
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          mb="10rem"
        >
          <BlackTitle w="80vw">Skills</BlackTitle>
          <Grid
            w="80vw"
            bg="primaryBlack.200"
            templateColumns={{
              lg: "repeat(5,1fr)",
              md: "repeat(4,1fr)",
              sm: "repeat(3,1fr)",
              base: "repeat(2,1fr)",
            }}
            mt="1"
            p="6"
          >
            <SkillIcon icon={FaHtml5} title="HTML 5" />
            <SkillIcon icon={FaCss3} title="CSS 3" />
            <SkillIcon icon={IoLogoJavascript} title="Javasript" />
            <SkillIcon icon={FaPython} title="Python" />
            <SkillIcon icon={FaReact} title="React" />
            <SkillIcon icon={IoLogoNodejs} title="NodeJs and Express" />
            <SkillIcon icon={SiRedux} title="Redux" />
            <SkillIcon icon={SiMongodb} title="MongoDB" />
            <SkillIcon icon={SiDjango} title="Django" />
            <SkillIcon icon={FaGitAlt} title="Git" />
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default AboutScreen;
