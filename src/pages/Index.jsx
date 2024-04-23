import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Text, useToast, VStack, Image, Heading, Center } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const TimelineEvent = ({ date, description, imageUrl }) => {
  return (
    <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
      <Image src={imageUrl} alt={description} boxSize="100px" objectFit="cover" />
      <Text fontWeight="bold">{date}</Text>
      <Text>{description}</Text>
    </Box>
  );
};

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        <Center flexDirection="column" height="100vh" justifyContent="center">
          <Image src="https://images.unsplash.com/photo-1642242211503-e9ab6800498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRlY29yYXRpb258ZW58MHx8fHwxNzEzODM4MjM2fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="full" alt="Romantic Decoration" />
          <Text fontSize="2xl" fontWeight="bold" mt="5">
            Will you go to prom with me?
          </Text>
          <VStack overflowY="auto" maxHeight="400px" spacing={4} p={4}>
            <TimelineEvent date="2024-01-01" description="New Year's Celebration" imageUrl="https://example.com/new-year.jpg" />
            <TimelineEvent date="2024-02-14" description="Valentine's Day" imageUrl="https://example.com/valentine.jpg" />
            <TimelineEvent date="2024-03-17" description="St. Patrick's Day" imageUrl="https://example.com/st-patrick.jpg" />
            <TimelineEvent date="2024-04-01" description="April Fool's Day" imageUrl="https://example.com/april-fool.jpg" />
            <TimelineEvent date="2024-05-01" description="Labor Day" imageUrl="https://example.com/labor-day.jpg" />
            <TimelineEvent date="2024-06-01" description="Start of Summer" imageUrl="https://example.com/summer.jpg" />
            <TimelineEvent date="2024-07-04" description="Independence Day" imageUrl="https://example.com/independence.jpg" />
            <TimelineEvent date="2024-08-01" description="Summer Vacation" imageUrl="https://example.com/vacation.jpg" />
            <TimelineEvent date="2024-09-01" description="Back to School" imageUrl="https://example.com/school.jpg" />
            <TimelineEvent date="2024-10-31" description="Halloween" imageUrl="https://example.com/halloween.jpg" />
          </VStack>
          <Button colorScheme="pink" mt="4" size="lg">
            Yes, I'd love to! <FaHeart />
          </Button>
        </Center>
      )}
    </Container>
  );
};

export default Index;
