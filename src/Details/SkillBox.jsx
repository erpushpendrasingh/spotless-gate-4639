import {
     Box,
     Image,
     HStack,
     Text,
     VStack,
     Heading,
     Button,
} from "@chakra-ui/react";
import React from "react";

function Feature({ url, desc, ...rest }) {
     return (
          <Box
               margin={"100px auto"}
               w="700px"
               bg={"black"}
               borderLeft={"5px solid green"}
               {...rest}
          >
               {/* <Heading fontSize="xl">{title}</Heading> */}
               <Box
                    border="1px solid red"
                    display={"flex"}
                    flexDirection="column"
                    gap={5}
                    p={10}
                    margin="auto"
               >
                    <Image width="100px" src={url}></Image>

                    <Heading color="white" mt={4}>
                         {desc}
                    </Heading>
                    <Text width={450} fontSize={25} color={"white"}>
                         Know exactly where everyone on your team stands with
                    </Text>
                    <Button w="400px" h="70px" color={"white"} variant={"outline"}>
                         ASSESSMENTS AND ANALYTICS
                    </Button>
               </Box>
          </Box>
     );
}

function SkillBox() {
     return (
          <HStack spacing={8}>
               <VStack width={550}>
                    <Feature
                         url="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/skill-iq-logo-white.png"
                         desc="Not sure where to start?"
                    />
               </VStack>
          </HStack>
     );
}

export default SkillBox;
