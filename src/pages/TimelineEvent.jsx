import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

const TimelineEvent = ({ date, description, imageUrl }) => {
  return (
    <VStack spacing={4} align="stretch" p={5} boxShadow="md">
      <Image src={imageUrl} borderRadius="md" />
      <Text fontWeight="bold">{date}</Text>
      <Text>{description}</Text>
    </VStack>
  );
};

export default TimelineEvent;
