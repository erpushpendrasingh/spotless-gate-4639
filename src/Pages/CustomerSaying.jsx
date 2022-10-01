import { Stack, Box, Heading, Text, Image, HStack } from "@chakra-ui/react";

function Feature({
     title,
     desc2,
     DeutscheImg,
     nomura,
     desc,
     desc3,
     thomson,
     nomuraDec,
     nourmText,
     thomsonDec,
     thomsonText,
     ...rest
}) {
     return (
          <Box bg="#F6F6F6" h={800}>
               <Box p={5} m="50px auto" w="80%" {...rest}>
                    <Heading textAlign="center" fontSize="5xl">
                         {title}
                    </Heading>
                    <Text textAlign="center" fontSize={25} color="#ccc" mt={4}>
                         {desc}
                    </Text>
               </Box>
               <HStack gap="20px" w="80%" margin="auto">
                    <Box
                         borderRadius={8}
                         shadow="2xl"
                         borderWidth="1px"
                         w="400px"
                         h="420px"
                    >
                         <Box w={150} p={6}>
                              <Image src={DeutscheImg} alt="imgl" />
                         </Box>
                         <Box w={350} p={4}>
                              <Text mt={5}>{desc2}</Text>
                         </Box>
                         <Box p={2} w={350}>
                              <Text fontWeight={"bold"} color="#ED008C">
                                   Helen Tippell
                              </Text>
                              <Text mt={5}>{desc3}</Text>
                         </Box>
                    </Box>
                    <Box
                         borderRadius={8}
                         shadow="2xl"
                         borderWidth="1px"
                         w="400px"
                         h="420px"
                    >
                         <Box w={150} p={6}>
                              <Image src={nomura} alt="imgl" />
                         </Box>
                         <Box w={350} p={4}>
                              <Text mt={5}>{nomuraDec}</Text>
                         </Box>
                         <Box p={2} w={350}>
                              <Text fontWeight={"bold"} color="#ED008C">
                                   Terry Learmouth
                              </Text>
                              <Text mt={5}>{nourmText}</Text>
                         </Box>
                    </Box>
                    <Box
                         borderRadius={8}
                         shadow="2xl"
                         borderWidth="1px"
                         w="400px"
                         h="420px"
                    >
                         <Box w={150} p={6}>
                              <Image src={thomson} alt="imgl" />
                         </Box>
                         <Box w={350} p={4}>
                              <Text mt={5}>{thomsonDec}</Text>
                         </Box>
                         <Box p={2} w={350}>
                              <Text fontWeight={"bold"} color="#ED008C">
                                   Helen Tippell
                              </Text>
                              <Text mt={5}>{thomsonText}</Text>
                         </Box>
                    </Box>
                   
               </HStack>
          </Box>
     );
}

function CustomerSaying() {
     return (
          <Stack spacing={8} direction="column">
               <Feature
                    title="What our customers are saying"
                    desc="A word from our partners"
                    DeutscheImg="https://i.postimg.cc/prDcSftR/deutsche-bank-avatar.webp"
                    desc2="“As a bank, we have a commitment to ensure that we have the right skills and competencies to become a truly digital organization.”"
                    desc3="IB Technology Chief Architect and CTO, Deutsche Bank"
                    nomura="https://i.postimg.cc/cJxxStfc/nomura-avatar.webp"
                    nourmText="EMEA CIO, Nomura"
                    nomuraDec="“This really has changed the game, in terms of the way we view the delivery of technology and how we can work with our business users to try these ideas and then move forward.”"
                    thomson="https://i.postimg.cc/CL5xZq2r/thomson-reuters-avatar.webp"
                    thomsonDec="We started streamlining so there’s more time for developers to actually focus on their task. The biggest surprise was the change in coding days—it jumped from 2.3 to 3 almost immediately."
                    thomsonText="Director of Technology, Thompson Reuters"
               />
          </Stack>
     );
}

export default CustomerSaying;
