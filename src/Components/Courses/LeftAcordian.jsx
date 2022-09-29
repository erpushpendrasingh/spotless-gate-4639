import { CloseIcon } from "@chakra-ui/icons";
import {
     Accordion,
     AccordionButton,
     AccordionIcon,
     AccordionItem,
     AccordionPanel,
     Box,
     Button,
     Checkbox,
     CloseButton,
     Image,
     Radio,
     RadioGroup,
     Stack,
     VStack,
} from "@chakra-ui/react";
import React from "react";

const CourseAccordion = () => {
     return (
          
          <VStack bg="#000" width={500} textColor="#fff">
               <Accordion
                    allowMultiple
                    w="70%"
                    mt="50px"
                    defaultIndex={[0, 1, 2]}
               >
                    <AccordionItem w="100%">
                         <h2>
                              <AccordionButton width="100%">
                                   <Box
                                        width={500}
                                        fontWeight={"bold"}
                                        fontSize="22px"
                                        flex="1"
                                        textAlign="left"
                                   >
                                        Ways to learn
                                   </Box>
                                   <AccordionIcon />
                              </AccordionButton>
                         </h2>
                         <Box display="flex" flexDirection="row">
                              <AccordionPanel pb={4} w="50%">
                                   <Stack fontWeight={"bold"} fontSize={35}>
                                        <RadioGroup
                                             w="200px"
                                             //   onChange={
                                             //        setValue
                                             //   }
                                             value={"1"}
                                        >
                                             <Radio
                                                  size="lg"
                                                  width={500}
                                                  value="1"
                                                  colorScheme="teal"
                                             >
                                                  All
                                             </Radio>
                                             <Radio
                                                  size="lg"
                                                  value="10"
                                                  colorScheme="teal"
                                             >
                                                  Core courses
                                             </Radio>
                                             <Radio
                                                  size="lg"
                                                  value="2"
                                                  colorScheme="teal"
                                             >
                                                  Expended courses
                                             </Radio>
                                             <Radio
                                                  size="lg"
                                                  value="3"
                                                  colorScheme="teal"
                                             >
                                                  Labs
                                             </Radio>
                                        </RadioGroup>
                                   </Stack>
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>
                    <AccordionItem w="100%">
                         <h2>
                              <AccordionButton
                                   //    width={400}
                                   fontWeight={"bold"}
                                   width="100%"
                              >
                                   <Box
                                        flex="1"
                                        textAlign="left"
                                        width={500}
                                        fontWeight={"bold"}
                                        fontSize="22px"
                                   >
                                        Skill level
                                   </Box>
                                   <AccordionIcon />
                              </AccordionButton>
                         </h2>
                         <Box display="flex" flexDirection="row">
                              <AccordionPanel
                                   pb={4}
                                   w="50%"
                                   fontWeight={"bold"}
                                   fontSize={25}
                              >
                                   {/* <Radio
                                        size="lg"
                                        name="1"
                                        colorScheme="teal"
                                        defaultChecked
                                   >
                                       Advanced
                                   </Radio> */}
                                   <Checkbox isValid>Advanced</Checkbox>
                                   <Checkbox isValid>Advanced</Checkbox>
                                   <Checkbox isValid>Advanced</Checkbox>
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>
                    <AccordionItem w="100%">
                         <h2>
                              <AccordionButton fontWeight={"bold"} width="100%">
                                   <Box
                                        fontWeight={"bold"}
                                        fontSize="22px"
                                        flex="1"
                                        textAlign="left"
                                   >
                                        Subject
                                   </Box>
                                   <AccordionIcon />
                              </AccordionButton>
                         </h2>
                         <Box display="flex" flexDirection="column">
                              <AccordionPanel
                                   pb={4}
                                   w="100%"
                                   fontSize={25}
                                   fontWeight={"bold"}
                              >
                                   <Checkbox width={500} isValid>
                                        Architecture & construction
                                   </Checkbox>
                                   <Checkbox isValid>
                                        Business professional
                                   </Checkbox>
                                   <Checkbox isValid>
                                        Creative professional
                                   </Checkbox>
                                   <Checkbox isValid>
                                        Data professional
                                   </Checkbox>

                                   <Checkbox isValid>
                                        Manufacturing & design
                                   </Checkbox>
                                   <Checkbox isValid>
                                        Information & cyber security
                                   </Checkbox>
                                   <Checkbox isValid>
                                        Software development
                                   </Checkbox>
                                   <Checkbox isValid>Web development</Checkbox>
                              </AccordionPanel>
                         </Box>
                    </AccordionItem>
               </Accordion>
               <Button
                    mt={20}
                    bg="black"
                    colorScheme={"blackAlpha"}
                    variant={"solid"}
                    w={"100%"}
                    size="lg"
               >
                    <CloseIcon mr={5} /> Clear filter
               </Button>
          </VStack>
     );
};

export default CourseAccordion;

{
     /* <AccordionPanel pb={4}>
                                   <Image
                                        src="https://bit.ly/dan-abramov"
                                        alt="Dan Abramov"
                                   />
                              </AccordionPanel> */
}
