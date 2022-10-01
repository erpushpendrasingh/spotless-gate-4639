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
               margin={"auto"}
               w="490px"
               backgroundImage={
                    "https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/paths-v2/paths-skill-iq-bkgd.png"
               }
               backgroundRepeat="no-repeat"
               backgroundSize={"cover"}
               borderLeft={"8px solid green"}
               {...rest}
          >
               <Box
                    display={"flex"}
                    flexDirection="column"
                    gap={5}
                    py={10}
                    pl={10}
                    margin="auto"
               >
                    <Image width="100px" src={url}></Image>

                    <Heading color="white" mt={4}>
                         {desc}
                    </Heading>
                    <Text width={450} fontSize={25} color={"white"}>
                         Know exactly where everyone on your team stands with
                    </Text>
                    <Button
                         w="400px"
                         h="70px"
                         color={"#ccc"}
                         variant={"outline"}
                    >
                         ASSESSMENTS AND ANALYTICS
                    </Button>
               </Box>
          </Box>
     );
}

function SkillBox() {
     return (
          <HStack spacing={8}>
               <VStack width={350}>
                    <Feature
                         url="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/skill-iq-logo-white.png"
                         desc="Not sure where to start?"
                    />
               </VStack>
          </HStack>
     );
}

export default SkillBox;
