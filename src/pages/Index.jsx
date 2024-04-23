import React, { useState } from "react";
import { Button, Container, FormControl, FormLabel, Input, useToast, VStack, Heading } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import TimelineEvent from "./TimelineEvent.jsx";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [events, setEvents] = useState([
    { date: "2024-01-01", description: "New Year's Celebration", imageUrl: "https://example.com/new-year.jpg" },
    { date: "2024-02-14", description: "Valentine's Day", imageUrl: "https://example.com/valentine.jpg" },
    { date: "2024-03-17", description: "St. Patrick's Day", imageUrl: "https://example.com/st-patrick.jpg" },
    { date: "2024-04-01", description: "April Fool's Day", imageUrl: "https://example.com/april-fool.jpg" },
    { date: "2024-05-01", description: "Labor Day", imageUrl: "https://example.com/labor-day.jpg" },
    { date: "2024-06-01", description: "Start of Summer", imageUrl: "https://example.com/summer.jpg" },
    { date: "2024-07-04", description: "Independence Day", imageUrl: "https://example.com/independence.jpg" },
    { date: "2024-08-01", description: "Summer Vacation", imageUrl: "https://example.com/vacation.jpg" },
    { date: "2024-09-01", description: "Back to School", imageUrl: "https://example.com/school.jpg" },
    { date: "2024-10-31", description: "Halloween", imageUrl: "https://example.com/halloween.jpg" },
  ]);
  const toast = useToast();

  const handleLogin = () => {
    if (username === "menu@gmail.com" && password === "021422") {
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your username and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="xl" centerContent>
      {!isLoggedIn ? (
        <VStack spacing={4} width="100%">
          <Heading as="h1" size="xl" textAlign="center" mt="20">
            SSMW
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="pink" onClick={handleLogin} rightIcon={<FaHeart />}>
            Login
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4} p={4} overflowY="auto" width="100%">
          {editMode ? (
            <Button colorScheme="blue" onClick={() => setEditMode(false)}>
              Save Changes
            </Button>
          ) : (
            <Button colorScheme="blue" onClick={() => setEditMode(!editMode)}>
              {editMode ? "Finish Editing" : "Edit"}
            </Button>
          )}
          {editMode && (
            <>
              <Button colorScheme="green" onClick={() => setEvents([...events, { date: "", description: "", imageUrl: "" }])}>
                Add New Event
              </Button>
              {events.map((event, index) => (
                <VStack key={index}>
                  <TimelineEvent
                    date={event.date}
                    description={event.description}
                    imageUrl={event.imageUrl}
                    editable={editMode}
                    onDelete={() => {
                      const newEvents = [...events];
                      newEvents.splice(index, 1);
                      setEvents(newEvents);
                    }}
                    onDelete={() => {
                      const newEvents = [...events];
                      newEvents.splice(index, 1);
                      setEvents(newEvents);
                    }}
                    onMoveUp={() => {
                      if (index > 0) {
                        const newEvents = [...events];
                        [newEvents[index], newEvents[index - 1]] = [newEvents[index - 1], newEvents[index]];
                        setEvents(newEvents);
                      }
                    }}
                    onMoveDown={() => {
                      if (index < events.length - 1) {
                        const newEvents = [...events];
                        [newEvents[index], newEvents[index + 1]] = [newEvents[index + 1], newEvents[index]];
                        setEvents(newEvents);
                      }
                    }}
                  />
                </VStack>
              ))}
            </>
          )}
          <TimelineEvent date="2024-01-01" description="New Year's Celebration" imageUrl="https://example.com/new-year.jpg" editable={editMode} />
          <TimelineEvent date="2024-02-14" description="Valentine's Day" imageUrl="https://example.com/valentine.jpg" editable={editMode} />
          <TimelineEvent date="2024-03-17" description="St. Patrick's Day" imageUrl="https://example.com/st-patrick.jpg" editable={editMode} />
          <TimelineEvent date="2024-04-01" description="April Fool's Day" imageUrl="https://example.com/april-fool.jpg" editable={editMode} />
          <TimelineEvent date="2024-05-01" description="Labor Day" imageUrl="https://example.com/labor-day.jpg" editable={editMode} />
          <TimelineEvent date="2024-06-01" description="Start of Summer" imageUrl="https://example.com/summer.jpg" editable={editMode} />
          <TimelineEvent date="2024-07-04" description="Independence Day" imageUrl="https://example.com/independence.jpg" editable={editMode} />
          <TimelineEvent date="2024-08-01" description="Summer Vacation" imageUrl="https://example.com/vacation.jpg" editable={editMode} />
          <TimelineEvent date="2024-09-01" description="Back to School" imageUrl="https://example.com/school.jpg" editable={editMode} />
          {events.map((event, index) => (
            <TimelineEvent key={index} date={event.date} description={event.description} imageUrl={event.imageUrl} editable={editMode} />
          ))}
        </VStack>
      )}
    </Container>
  );
};

export default Index;
