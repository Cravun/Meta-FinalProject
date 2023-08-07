import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      backgroundColor="#F9F9F9"
      p={6}
      rounded="md"
      borderColor="gray.200"
      alignItems="flex-start"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" rounded="md" />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
      <HStack color="black">
        <Text>View project</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );
};

export default Card;
