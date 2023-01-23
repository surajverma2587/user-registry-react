import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddUserFrom = () => {
  return (
    <Stack gap={3}>
      <Stack className="text-center">
        <h1>Add User Form</h1>
        <hr />
      </Stack>

      <Form>
        <Stack>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Select>
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
            <Form.Control type="text" placeholder="Enter first name" />
            <Form.Text className="text-danger">First name error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
            <Form.Text className="text-danger">Last name error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Check label="Male" name="gender" type="radio" checked />
            <Form.Check label="Female" name="gender" type="radio" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter age" />
            <Form.Text className="text-danger">Age error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
            <Form.Text className="text-danger">Email address error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profile URL</Form.Label>
            <Form.Control type="text" placeholder="Enter profile url" />
            <Form.Text className="text-danger">Profile URL error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>LinkedIn URL</Form.Label>
            <Form.Control type="text" placeholder="Enter LinkedIn url" />
            <Form.Text className="text-danger">LinkedIn URL error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>GitHub URL</Form.Label>
            <Form.Control type="text" placeholder="Enter GitHub url" />
            <Form.Text className="text-danger">GitHub URL error</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Short Bio</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter short bio"
              rows={5}
            />
            <Form.Text className="text-danger">Bio error</Form.Text>
          </Form.Group>
        </Stack>

        <Stack className="d-grid gap-2 col-6 mx-auto">
          <Button variant="success">Success</Button>
        </Stack>
      </Form>
    </Stack>
  );
};
