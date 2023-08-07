import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import KrenntImage from "../components/2x2.png";

const greeting = "Hello, I am Krennt!";
const bio1 = "A Full Stack Developer";
const bio2 = "Specialized in React and Angular";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#FFFFFF"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" name="Krennt" src={KrenntImage} />
      <Heading as="h3" size="sm" pb={6} color="#0C0B13">
        {greeting}
      </Heading>

      <Heading as="h1" size="lg" color="#0C0B13">
        {bio1}
      </Heading>
      <Heading as="h1" size="lg" color="#0C0B13">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
