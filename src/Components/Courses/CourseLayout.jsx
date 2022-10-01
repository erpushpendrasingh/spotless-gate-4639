import React, { useState } from "react";
import CourseSection from "./CourseSection";
import Course from "./Course";
import { Box, Button } from "@chakra-ui/react";
import CourseAccordion from "./LeftAcordian";
import AirbnbCard from "./CourseCard";
import { useSearchParams } from "react-router-dom";

const getCurrentPageUrl = (value) => {
     value = Number(value);
     if (typeof value === "number" && value <= 0) {
          value = 1;
     }
     if (!value) {
          value = 1;
     }
     return value;
};
const getUrl = (url, sort, orderBy, filterBy) => {
     if (sort && orderBy && filterBy) {
          url = `${url}&_sort=${sort}&_order=${orderBy}&level=${filterBy}`;
     } else if (sort && orderBy) {
          url = `${url}&_sort=${sort}&_order=${orderBy}`;
     } else if (filterBy) {
          url = `${url}&level=${filterBy}`;
     }
     return url;
};
const CourseLayout = () => {
     //    const [value, setValue] = useState("");
     const [filteredResults, setFilteredResults] = useState([]);
     const [searchInput, setSearchInput] = useState("");
     let [searchParams, setSearchParams] = useSearchParams();
     const [data, setData] = React.useState([]);
     const [totalCount, setTotalCount] = React.useState(0);
     const [page, setPage] = React.useState(
          getCurrentPageUrl(searchParams.get("page")) || 1
     );
     const [orderBy, setOrderby] = React.useState("");
     const [filterBy, setFilterBy] = React.useState("");
     const sort = "rating";
     const limit = 10;
     React.useEffect(() => {
          let apiUrl = getUrl(
               `https://json-mooker-server-abc.herokuapp.com/course?_page=${page}&_limit=${limit}`,
               sort,
               orderBy,
               filterBy
          );
          fetch(apiUrl)
               .then((res) => {
                    setTotalCount(Number(res.headers.get("X-Total-Count")));
                    return res.json();
               })
               .then((res) => {
                    setData(res);
               });
     }, [page, orderBy, filterBy]);
     React.useEffect(() => {
          let paramsobj = { page };
          if (orderBy) {
               paramsobj.orderBy = orderBy;
          }
          if (filterBy) {
               paramsobj.filterBy = filterBy;
          }
          setSearchParams(paramsobj);
     }, [page, orderBy, filterBy]);

     const searchItems = (searchValue) => {
          setSearchInput(searchValue);
          if (searchInput !== "") {
               const filteredData = data.filter((item) => {
                    return Object.values(item)
                         .join("")
                         .toLowerCase()
                         .includes(searchInput.toLowerCase());
               });
               setFilteredResults(filteredData);
          } else {
               setFilteredResults(data);
          }
     };
     return (
          <>
               <Course />
               <CourseSection
                    searchItems={searchItems}
                    setOrderby={setOrderby}
               />
               <Box w="100%" bg={"#181818"}>
                    <Box
                         height={"500vh"}
                         bg={"#181818"}
                         display={"flex"}
                         border={"1px solid red"}
                         w="90%"
                         gap={20}
                         m="auto"
                    >
                         <Box>
                              <CourseAccordion setFilterBy={setFilterBy} />
                         </Box>
                         <Box
                              display={"flex"}
                              flexDirection="column"
                              alignItems={"flex-start"}
                              justifyContent="flex-start"
                              width={"100%"}
                         >
                              {searchInput.length > 1
                                   ? filteredResults.map((item, index) => {
                                          return (
                                               <AirbnbCard
                                                    key={index}
                                                    data={item}
                                               />
                                          );
                                     })
                                   : data?.map((item, index) => {
                                          return (
                                               <AirbnbCard
                                                    key={index}
                                                    data={item}
                                               />
                                          );
                                     })}
                              <Box
                                   display={"flex"}
                                   alignItems="center"
                                   justifyContent={"space-between"}
                                   margin="10px auto"
                                   width="300px"
                              >
                                   <Button
                                        fontSize={"40px"}
                                        borderRadius={"50%"}
                                        width="50px"
                                        h="50px"
                                        disabled={page === 1}
                                        onClick={() => setPage(page - 1)}
                                   >
                                        {"<"}
                                   </Button>
                                   <Button>{page}</Button>
                                   <Button
                                        fontSize={"40px"}
                                        borderRadius={"50%"}
                                        width="50px"
                                        h="50px"
                                        disabled={
                                             page ===
                                             Math.ceil(totalCount / limit)
                                        }
                                        onClick={() => setPage(page + 1)}
                                   >
                                        {">"}
                                   </Button>
                              </Box>
                         </Box>
                    </Box>
               </Box>
          </>
     );
};

export default CourseLayout;
