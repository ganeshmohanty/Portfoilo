import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Grid,
  Flex,
  Input,
  FormControl,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiDeviceMobile,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { PageHeader } from "../components/TitleHeader";
import { PageAnimation } from "../components/PageAnimation";
import { TextIcon } from "../components/TextIcon";

const ContactScreen = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactFormASumbitHandler = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "gmail",
        "template_eta7twa",
        { name, email, message },
        "user_jL61eLstctNcxbt3r5R4q"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message Received",
            description:
              "Hey there! I have received your message and will try to contact you as soon as possible",
            status: "success",
            isClosable: true,
          });
          if (result.text === "OK") {
            setName("");
            setEmail("");
            setMessage("");
          }
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Message Couldn't Send",
            description: "Sorry! try again",
            status: "error",
            isClosable: true,
          });
        }
      );
  };
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
          minH="60vh"
          borderRadius="md"
          p="6"
          mt="2rem"
          mb="10rem"
        >
          <Flex
            direction="column"
            align="center"
            h="100%"
            justifyContent="center"
            w="105%"
          >
            <TextIcon icon={FaGithub} children="ganeshmohanty"></TextIcon>

            <TextIcon icon={HiOutlineMail}>
              <a href="mailto:ganesh.mohanty.1999@gmail.com">
                ganesh.mohanty.1999@gmail.com
              </a>
            </TextIcon>
            <TextIcon icon={HiDeviceMobile}>
              <a href="tel:+91 7039734267">+91 7039734267</a>
            </TextIcon>
            <TextIcon icon={HiLocationMarker}>
              Mumbai ,Maharastra,India
            </TextIcon>
          </Flex>
          <Flex align="center" justifyContent="center">
            <form
              onSubmit={contactFormASumbitHandler}
              style={{ width: "100%" }}
            >
              <Flex
                justifyContent="space-between"
                w="full"
                flexDirection={{
                  sm: "column",
                  md: "row",
                  base: "column",
                  lg: "row",
                }}
              >
                <FormControl id="name" isRequired>
                  <Input
                    autoComplete="off"
                    placeholder="Name"
                    color="white"
                    border="none"
                    borderBottom="1px"
                    borderRadius="none"
                    _focus={{
                      borderBottom: "2px solid #9656A0 ",
                    }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </FormControl>
                <FormControl
                  id="email"
                  isRequired
                  ml={{ lg: "1rem", md: "1rem" }}
                  mt={{ sm: "1rem", base: "1rem", md: "0", lg: "0" }}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    color="white"
                    border="none"
                    borderBottom="1px"
                    borderRadius="none"
                    _focus={{
                      borderBottom: "2px solid #9656A0 ",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </FormControl>
              </Flex>
              <Textarea
                color="white"
                placeholder="Your Message"
                mt={4}
                border="none"
                outline="none"
                borderBottom="1px"
                borderRadius="none"
                _focus={{
                  borderBottom: "2px solid #9656A0 ",
                }}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></Textarea>
              <Flex justifyContent="center" alignContent="center">
                <Button
                  mt={4}
                  bgColor="primary.100"
                  type="submit"
                  color="white"
                  w="10rem"
                  _hover={{
                    bgColor: "hsl(292,30%,20%)",
                  }}
                >
                  Send Message
                </Button>
              </Flex>
            </form>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default ContactScreen;
