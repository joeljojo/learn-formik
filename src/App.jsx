import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Stack,
} from "@mui/material";
import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must have at least 4 characters")
        .max(8, "Password must not have more than 8 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid component="h2">Handling form using Formik</Grid>
        <Stack>
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <Grid sx={{ color: "red" }}>{formik.errors.firstName}</Grid>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <Grid sx={{ color: "red" }}>{formik.errors.lastName}</Grid>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              name="email"
              id="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Grid sx={{ color: "red" }}>{formik.errors.email}</Grid>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Grid sx={{ color: "red" }}>{formik.errors.password}</Grid>
            )}
          </FormControl>
          <Button type="submit">Register</Button>
        </Stack>
      </form>
    </Container>
  );
}

export default App;
