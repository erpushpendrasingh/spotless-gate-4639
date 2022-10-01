import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

const ReadyToUpskill = (url) => {
  return (
    <Box
      width={"90%"}
      display={"flex"}
      alignItems="center"
      justifyContent="space-around"
      m="40px auto"
      h="70px"
      borderRadius="2xl"
      bg="linear-gradient(269.52deg,#ec008c 0,#f15b2a 98.86%)"
    >
      <Heading fontSize={45} w="600px" color={"white"}>
        Ready to upskill?
      </Heading>

      <Button
        colorScheme={"blackAlpha"}
        bg="black"
        height={"60px"}
        fontWeight="bold"
        fontSize={"20px"}
        alignItems="center"
        width="250px"
      >
        {"GET STARTED "}
      </Button>
    </Box>
  );
};

export default ReadyToUpskill;
