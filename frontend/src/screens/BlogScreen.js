import { Grid, Flex } from "@chakra-ui/react";

import { PageAnimation } from "../components/PageAnimation";
import { PageHeader } from "../components/TitleHeader";
import LargeBox from "../components/LargeBox";

const BlogScreen = () => {
  return (
    <>
      <PageAnimation color="blue.700" />
      <PageHeader children="My Blogs(Comming soon!)" />
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
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          ml={{ sm: "0", base: "0", md: "0", lg: "3rem" }}
          w="80vw"
          gap="1rem"
        >
          <LargeBox />
          <LargeBox />
          <LargeBox />
          <LargeBox />
          <LargeBox />
          <LargeBox />
        </Grid>
      </Flex>
    </>
  );
};

export default BlogScreen;
