{
}
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

const HeroSection = () => (
  <Box textAlign="center" py={20} px={6} bg="brand.700" color="white">
    <Heading as="h1" size="3xl" mt={0} mb={4}>
      Streamline Your Hiring Process
    </Heading>
    <Text fontSize="xl" mb={8}>
      Join over 20,000 companies using Workable to find, evaluate, and hire the best candidates.
    </Text>
    <Button size="lg" colorScheme="brand" py={7} px={10}>
      Get Started For Free <FaAngleRight />
    </Button>
  </Box>
);

export default HeroSection;
