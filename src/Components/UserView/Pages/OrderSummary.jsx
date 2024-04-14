import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react"; // Import necessary Chakra UI components
import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  return (
    <Card align="center" bg={"black"} textColor={"gray"}>
      <CardHeader>
        <Heading size="md">Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => {
            navigate("/owner/dashboard");
          }}
          colorScheme="gray"
          className="hover:bg-blue-500"
        >
          View here
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomerDashboard;
