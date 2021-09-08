import React from "react";
import { FaCrown } from "react-icons/fa";
import { Flex, Text, Icon } from "@chakra-ui/react";

const PageHeader = ({ children }) => {
  return (
    <Flex
      w="full"
      h="2rem"
      mt="6rem"
      mb="2rem"
      align="center"
      justify="center"
      direction="column"
    >
      <Text as="h2" color="white" fontSize="2rem" fontWeight="bold">
        {children}
      </Text>
      <Icon as={FaCrown} color="primary.100" fontSize="2rem" />
    </Flex>
  );
};

const BlackTitle = ({ children }) => {
  return (
    <Flex w="100%" bg="#070708" p="1rem" borderRadius="md" mt="2rem">
      <Text as="p" color="white" fontSize="1rem" fontWeight="bold">
        {children}
      </Text>
    </Flex>
  );
};

export { PageHeader, BlackTitle };
