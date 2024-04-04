import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, SimpleGrid, Link } from "@chakra-ui/react";
import { FaBars, FaSearch, FaAngleRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="white" color="gray.600">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JrYWJsZSUyMGxvZ298ZW58MHx8fHwxNzEyMjA1NjQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Workable Logo" />
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }}>
          <FaBars />
        </Box>

        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" mt={{ base: 4, md: 0 }}>
          <Link href="#">Products</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Resources</Link>
          <Button variant="outline">Sign in</Button>
          <Button colorScheme="teal">Try for free</Button>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Box textAlign="center" py={10} px={6} bg="gray.50">
        <Heading as="h2" size="xl" mt={6} mb={2}>
          The most popular recruiting software
        </Heading>
        <Text color={"gray.500"} mb={6}>
          Workable helps 20,000 companies globally find, evaluate and hire the best candidates.
        </Text>
        <Stack spacing={4} direction="row" align="center" justify="center">
          <Button colorScheme="teal" size="lg">
            Try for free
          </Button>
          <Button variant="outline" size="lg">
            Request a demo <FaAngleRight />
          </Button>
        </Stack>
      </Box>

      {/* Features Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={20} px={10}>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Find candidates
          </Heading>
          <Text fontSize="xl">Source candidates from multiple job boards and manage them in one place.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Evaluate candidates
          </Heading>
          <Text fontSize="xl">Collaborate with your hiring team to evaluate resumes, run interviews and make the best hire.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Automate tasks
          </Heading>
          <Text fontSize="xl">Automate manual tasks like scheduling interviews and sending rejection emails.</Text>
        </Box>
      </SimpleGrid>

      {/* Testimonial */}
      <Box bg="gray.50" py={20} textAlign="center">
        <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjE4NzA2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Employee testimonial" borderRadius="full" boxSize="150px" objectFit="cover" mx="auto" mb={6} />
        <Text fontSize="2xl" maxW="3xl" mx="auto">
          "We wouldn't be able to scale our hiring without Workable. It has transformed how we evaluate and hire candidates."
        </Text>
        <Text fontWeight="bold" mt={8}>
          John Smith, Recruiting Manager
        </Text>
      </Box>

      {/* CTA Section */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Hire better with Workable
        </Heading>
        <Text color={"gray.500"} mb={6} fontSize="xl">
          More than 20,000 companies use Workable to optimize their recruiting process.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get started
        </Button>
      </Box>

      {/* Footer */}
      <Box bg="gray.50" color="gray.700" py={10} px={{ base: 4, md: 8 }}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx3b3JrYWJsZSUyMGxvZ298ZW58MHx8fHwxNzEyMjA1NjQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Workable Logo" />
            </Box>
            <Text fontSize={"sm"}>© 2023 Workable. All rights reserved.</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb={2}>
              Product
            </Heading>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb={2}>
              Company
            </Heading>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm" mb={2}>
              Support
            </Heading>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;
