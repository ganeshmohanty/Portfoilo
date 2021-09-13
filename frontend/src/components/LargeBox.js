import { Flex, Text, Image, Link, Heading } from "@chakra-ui/react";
import dummy from "../images/dummy.png";

const LargeBox = () => {
  return (
    <Link
      transition="0.6s"
      _hover={{
        textDecoration: "none",
        boxShadow: "0px 0px 10px 0px white",
      }}
    >
      <Flex direction="column" bg="primaryBlack.200" borderRadius="md">
        <Image src={dummy} h="15rem" objectFit="cover" borderRadius="md" />
        <Heading p="1.5rem" fontSize="lg" color="white">
          Lorem Ipsum is simply dummy text
        </Heading>
        <Text p="1.5rem" color="white" fontSize="xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s....
        </Text>
      </Flex>
    </Link>
  );
};

export default LargeBox;
