import { Box, Image, Heading, VStack, Text, Button } from "@chakra-ui/react";
import React from "react";

const MainPageFirstCard = () => {
  return (
    <>
      <VStack
        height={"120vh"}
        bg="linear-gradient(30deg, rgba(126,6,78,0.75) 0%, rgba(32,32,32,1) 50%, rgba(234,42,94,1) 90%)"
      >
        <Box margin=" auto" w="90%" h="900px">
          <VStack>
            <Heading mt={50} fontSize="40px" color="white">
              Pluralsight empowers you to build tech fluency
            </Heading>
            <Heading mt={50} fontSize="40px" color="white">
              innovate smarter
            </Heading>
            <VStack>
              <Text color="white" p={10}>
                Develop critical tech skills. Cut cycle times. Build happier,
                healthier tech teams. And transform your goals into gains. All
                with Pluralsight.
              </Text>
              <Button
                bg="#EF4144"
                colorScheme="#EF4144"
                size="lg"
                border="1px solid red"
              >
                View Plans
              </Button>
            </VStack>

            <VStack p={50} margin="auto">
              <Box
                display={"flex"}
                gap={200}
                // alignItems="center"
                // justifyContent="space-between"
              >
                {/* <Box width="600px">
                                             <Image border width={"500px"} src={HeroLeft} />
                                        </Box> */}
                <Image
                  paddingBottom={84}
                  width={"1000rem"}
                  height="600px"
                  src="https://i.postimg.cc/Fz61mjC1/Screenshot-6140.png"
                />
                {/* <Box>
                                             <Image h="300px" src={heroright} />
                                        </Box> */}
              </Box>
            </VStack>
            {/* <Box
                                   // border={"1px solid red"}
                                   display="flex"
                                   bg="#4A2C3E"
                                   gap={100}
                                   margin="auto"
                                   height={"150px"}
                              >
                                   <Image src={delllogo} alt="logo" />
                                   <Image src={gelogo} alt="logo" />
                                   <Image src={fedexlogo} alt="logo" />
                                   <Image src={fordlogo} alt="logo" />
                              </Box> */}
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default MainPageFirstCard;
