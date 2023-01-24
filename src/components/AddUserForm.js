import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const AddUserFrom = ({ setUsers }) => {
  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",
    gender: "male",
    age: "",
    email: "",
    profileUrl: "",
    linkedInUrl: "",
    githubUrl: "",
    bio: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Please select a title."),
    firstName: Yup.string()
      .required("Please enter a first name.")
      .min(2, "Minimum character count is 2."),
    lastName: Yup.string()
      .required("Please enter a first name.")
      .min(2, "Minimum character count is 2."),
    age: Yup.number()
      .required("Please enter an age.")
      .min(18, "Minimum age is 18.")
      .max(100, "Maximum age is 100."),
    email: Yup.string()
      .required("Please enter an email address.")
      .email("Please enter a valid email address."),
    profileUrl: Yup.string()
      .required("Please enter a profile URL.")
      .url("Please enter a valid URL."),
    linkedInUrl: Yup.string().url("Please enter a valid URL."),
    githubUrl: Yup.string().url("Please enter a valid URL."),
    bio: Yup.string()
      .min(10, "Minimum character count is 10.")
      .max(100, "Minimum character count is 100."),
  });

  const onSubmit = (formData) => {
    const usersFromLS = getFromLocalStorage("users", []);

    const newUser = {
      ...formData,
      id: uuidv4(),
    };

    usersFromLS.push(newUser);

    localStorage.setItem("users", JSON.stringify(usersFromLS));

    setUsers(usersFromLS);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Stack gap={3}>
      <Stack className="text-center">
        <h1>Add User Form</h1>
        <hr />
      </Stack>

      <Form onSubmit={formik.handleSubmit}>
        <Stack>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Select
              name="title"
              id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" disabled>
                Select title
              </option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
              <option value="Dr.">Dr.</option>
            </Form.Select>
            {formik.touched.title && formik.errors.title && (
              <Form.Text className="text-danger">
                {formik.errors.title}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <Form.Text className="text-danger">
                {formik.errors.firstName}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              id="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <Form.Text className="text-danger">
                {formik.errors.lastName}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Check
              label="Male"
              name="gender"
              value="male"
              type="radio"
              checked={formik.values.gender === "male"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Form.Check
              label="Female"
              name="gender"
              value="female"
              type="radio"
              checked={formik.values.gender === "female"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              name="age"
              id="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age && (
              <Form.Text className="text-danger">{formik.errors.age}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              placeholder="Enter email address"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <Form.Text className="text-danger">
                {formik.errors.email}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profile URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter profile url"
              name="profileUrl"
              id="profileUrl"
              value={formik.values.profileUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.profileUrl && formik.errors.profileUrl && (
              <Form.Text className="text-danger">
                {formik.errors.profileUrl}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>LinkedIn URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter LinkedIn url"
              name="linkedInUrl"
              id="linkedInUrl"
              value={formik.values.linkedInUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.linkedInUrl && formik.errors.linkedInUrl && (
              <Form.Text className="text-danger">
                {formik.errors.linkedInUrl}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>GitHub URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter GitHub url"
              name="githubUrl"
              id="githubUrl"
              value={formik.values.githubUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.githubUrl && formik.errors.githubUrl && (
              <Form.Text className="text-danger">
                {formik.errors.githubUrl}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Short Bio</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter short bio"
              rows={5}
              name="bio"
              id="bio"
              value={formik.values.bio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.bio && formik.errors.bio && (
              <Form.Text className="text-danger">{formik.errors.bio}</Form.Text>
            )}
          </Form.Group>
        </Stack>

        <Stack className="d-grid gap-2 col-6 mx-auto">
          <Button variant="success" type="submit">
            Success
          </Button>
        </Stack>
      </Form>
    </Stack>
  );
};
