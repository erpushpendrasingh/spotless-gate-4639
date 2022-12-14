import { Box, Heading, HStack, IconButton, Image } from "@chakra-ui/react";
import React from "react";

const ToolsIcon = () => {
  return (
    <Box
      zIndex={"-1000"}
      position={"relative"}
      bg="#272727"
      h="70vh"
      pt={"200px"}
    >
      <HStack width={"80%"} m="auto">
        <Box mt="40px" width={350}>
          <Heading color={"white"}>
            Popular Pluralsight Skills topics to learn now
          </Heading>
        </Box>
        <HStack gap={10} m={"100px auto"} w="80%">
          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/BnjgDHQh/javascript-noshadow.png"
            />
          </Box>

          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/9FMt5ZTW/angular-noshadow.png"
            />
          </Box>

          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/nVQ9v2v9/azure-noshadow.pngs"
            />
          </Box>

          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/bNk6FQjs/ruby-noshadow.png"
            />
          </Box>

          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/rsSSgNtT/csharp-noshadow-1.png"
            />
          </Box>

          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/PxtxBGJP/java-noshadow.png"
            />
          </Box>

          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/8P4v55RZ/react-noshadow.png"
            />
          </Box>

          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/3RZ8ByJ6/python-noshadow.png"
            />
          </Box>
          <Box h={"85px"} w={"150px"}>
            <Image
              w={"100px"}
              src="https://i.postimg.cc/2ycCsPW7/aws-noshadow.png"
            />
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default ToolsIcon;
