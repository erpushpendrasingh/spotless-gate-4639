import {
  GridItem,
  Image,
  Grid,
  Text,
  Box,
  Heading,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import why from "./why-ps-2x.png";
const WhyPluralsightCard = () => {
  return (
    <>
      <VStack bg="#FFFFFF" w="90%" height={"90vh"} margin="100px auto">
        <Grid templateColumns="repeat(2,1fr)" alignItems="center">
          <GridItem>
            <Box w="100%">
              <Heading mt={20} padding={"20px"} fontSize={"42px"}>
                Why Pluralsight?
              </Heading>
              <Text mt={10} height={"180px"} fontSize={18} padding={"20px"}>
                Whether you’re an individual looking to learn Python to advance
                your career or an enterprise team looking to cut cycle times,
                speed up onboarding, or give your teams the skills to realize
                your strategies, we remove the challenges and roadblocks slowing
                you down. We’re advancing the world’s tech workforce, and that
                starts with making your work more efficient and effective—and
                giving you more to celebrate.
              </Text>
              <Button
                bg="linear-gradient(to right,#f05a28,#ec008c,#f05a28)"
                mt={"20px"}
                ml={"20px"}
                h="70px"
                w="270px"
              >
                See our solutions
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Image w="700px" src={why} />
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default WhyPluralsightCard;
