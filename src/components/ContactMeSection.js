import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import "./ContactMeSection.scss";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      Email: "",
      Type: "",
      Comment: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      FirstName: Yup.string().required("Name is required"),
      Email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      Type: Yup.string().required("Type of enquiry is required"),
      Comment: Yup.string().required("Your message is required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#0C0B13"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.FirstName && formik.errors.FirstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="FirstName"
                  onChange={formik.handleChange}
                  value={formik.values.FirstName}
                />
                <FormErrorMessage>{formik.errors.FirstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.Email && formik.errors.Email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="Email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.Email}
                />
                <FormErrorMessage>{formik.errors.Email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.Type && formik.errors.Type}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="Type"
                  className="type"
                  onChange={formik.handleChange}
                  value={formik.values.Type}
                >
                  <option className="type-dropdown" value="hireMe">
                    Freelance project proposal
                  </option>
                  <option className="type-dropdown" value="openSource">
                    Open source consultancy session
                  </option>
                  <option className="type-dropdown" value="other">
                    Other
                  </option>
                </Select>
                <FormErrorMessage>{formik.errors.Type}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.Comment && formik.errors.Comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="Comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.Comment}
                />
                <FormErrorMessage>{formik.errors.Comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
