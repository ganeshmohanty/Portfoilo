import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Flex
        as="main"
        direction="column"
        minH="100vh"
        w="100vw"
        bg="#1A1A1D"
        justify="center"
        align="center"
      >
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
          </Switch>
        </AnimatePresence>
      </Flex>
    </>
  );
};

export default App;
