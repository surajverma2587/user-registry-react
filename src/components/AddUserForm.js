import { useFormik } from "formik";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddUserFrom = () => {
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

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const formik = useFormik({
    initialValues,
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
            >
              <option value="" disabled>
                Select title
              </option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
              <option value="Dr.">Dr.</option>
            </Form.Select>
            <Form.Text className="text-danger">Title error</Form.Text>
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
            />
            <Form.Text className="text-danger">First name error</Form.Text>
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
            />
            <Form.Text className="text-danger">Last name error</Form.Text>
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
            />
            <Form.Check
              label="Female"
              name="gender"
              value="female"
              type="radio"
              checked={formik.values.gender === "female"}
              onChange={formik.handleChange}
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
            />
            <Form.Text className="text-danger">Age error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Form.Text className="text-danger">Email address error</Form.Text>
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
            />
            <Form.Text className="text-danger">Profile URL error</Form.Text>
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
            />
            <Form.Text className="text-danger">LinkedIn URL error</Form.Text>
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
            />
            <Form.Text className="text-danger">GitHub URL error</Form.Text>
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
            />
            <Form.Text className="text-danger">Bio error</Form.Text>
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
