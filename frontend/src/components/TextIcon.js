import { Flex, Icon, Text } from "@chakra-ui/react";

const TextIcon = ({ children, icon }) => {
  return (
    <Flex
      w="full"
      p="3"
      align="center"
      bg="#1A1A1D"
      borderRadius="lg"
      mb="2"
      flexWrap="wrap"
      justifyContent={{
        sm: "center",
        base: "center",
        lg: "flex-start",
        md: "center",
      }}
    >
      <Icon as={icon} color="primary.100" fontSize="1.5rem" />
      <Text
        color="white"
        fontSize="1rem"
        ml="4"
        textAlign="center"
        wordBreak="break-word"
      >
        {children}
      </Text>
    </Flex>
  );
};

const SkillBox = ({ skillTitle, children }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="primaryBlack.100"
      borderRadius="md"
    >
      <Text color="white" fontSize="lg" fontWeight="bold">
        {skillTitle}
      </Text>
      <Flex>{children}</Flex>
    </Flex>
  );
};
const SkillIcon = ({ title, icon }) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      align="center"
      mt="6"
      mb="6"
    >
      <Icon as={icon} color="whiteAlpha.900" fontSize="4rem" />
      <Text color="white" fontSize="md">
        {title}
      </Text>
    </Flex>
  );
};
export { TextIcon, SkillIcon, SkillBox };
