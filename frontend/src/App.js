import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ProjectScreen from "./screens/ProjectScreen";
import BlogScreen from "./screens/BlogScreen";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Flex
        as="main"
        minH="100vh"
        bg="primaryBlack.100"
        direction="column"
        overflowX="hidden"
        maxW="100vw"
      >
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/contact" component={ContactScreen} />
            <Route path="/projects" component={ProjectScreen} />
            <Route path="/blogs" component={BlogScreen} />
          </Switch>
        </AnimatePresence>
      </Flex>
    </>
  );
};

export default App;
