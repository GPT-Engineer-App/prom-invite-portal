import React, { useState } from "react";
import { Box, Image, Text, VStack, Input, Button } from "@chakra-ui/react";

const TimelineEvent = ({ date, description, imageUrl, editable }) => {
  const [editImageUrl, setImageUrl] = useState(imageUrl);
  const [editDate, setDate] = useState(date);
  const [editDescription, setDescription] = useState(description);
  const onDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      console.log("Delete event");
    }
  };

  const onMoveUp = () => {
    console.log("Move event up");
  };

  const onMoveDown = () => {
    console.log("Move event down");
  };

  return (
    <VStack spacing={4} align="stretch" p={5} boxShadow="md">
      {editable ? (
        <>
          <Button colorScheme="red" onClick={onDelete}>
            Delete
          </Button>
          <Button colorScheme="blue" onClick={onMoveUp}>
            Move Up
          </Button>
          <Button colorScheme="blue" onClick={onMoveDown}>
            Move Down
          </Button>
          <Input value={editImageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          <Input value={editDate} onChange={(e) => setDate(e.target.value)} />
          <Input value={editDescription} onChange={(e) => setDescription(e.target.value)} />
        </>
      ) : (
        <>
          <Image src={imageUrl} borderRadius="md" />
          <Text fontWeight="bold">{date}</Text>
          <Text>{description}</Text>
        </>
      )}
    </VStack>
  );
};

export default TimelineEvent;
