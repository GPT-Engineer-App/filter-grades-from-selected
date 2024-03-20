import React, { useState } from "react";
import { Box, Select, List, ListItem, ListIcon, Container, Heading } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const gradesList = [
  { _id: "65ddaa71e8633af34adc5980", name: "I" },
  { _id: "65ddaa71e8633af34adc5981", name: "II" },
  { _id: "65d6f0326b37ed8f1a012ed8", name: "III" },
  { _id: "65d6f0f46b37ed8f1a012f6d", name: "V" },
];

const Index = () => {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [filteredGrades, setFilteredGrades] = useState(gradesList);

  const handleGradeChange = (event) => {
    const grade = event.target.value;
    setSelectedGrade(grade);

    // Filter the grades list based on the selected grade
    const filtered = gradesList.filter((g) => g.name > grade);
    setFilteredGrades(filtered);
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6}>Select a Grade to Filter</Heading>
      <Select placeholder="Select grade" onChange={handleGradeChange} value={selectedGrade}>
        {gradesList.map((grade) => (
          <option key={grade._id} value={grade.name}>
            {grade.name}
          </option>
        ))}
      </Select>
      <Box mt={6}>
        <Heading size="md" mb={4}>
          Filtered Grades
        </Heading>
        <List spacing={3}>
          {filteredGrades.map((grade) => (
            <ListItem key={grade._id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {grade.name}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Index;
