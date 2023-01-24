import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export const UserCard = ({ user }) => {
  return (
    <Card className="user-card my-2">
      <Card.Img variant="top" src={user.profileUrl} />
      <Card.Body>
        <Card.Title>
          <Stack direction="horizontal" className="justify-content-between">
            <div>
              {user.title} {user.firstName} {user.lastName}
            </div>
            <div>
              {user.gender === "male" ? (
                <i className="fa-solid fa-person" />
              ) : (
                <i className="fa-solid fa-person-dress" />
              )}
            </div>
          </Stack>
        </Card.Title>
        <Card.Subtitle className="my-2 text-muted">
          <Stack direction="horizontal" className="justify-content-between">
            <div>{user.email}</div>
            <div>{user.age} yrs</div>
          </Stack>
        </Card.Subtitle>
        <hr />
        {user.bio && <Card.Text>{user.bio}</Card.Text>}
        <Stack>
          <Button variant="danger">
            <i className="fa-solid fa-trash me-3" />
            Remove
          </Button>
        </Stack>
      </Card.Body>
      {(user.linkedInUrl || user.githubUrl) && (
        <Card.Footer>
          <Stack direction="horizontal" className="justify-content-around">
            {user.linkedInUrl && (
              <a
                href={user.linkedInUrl}
                className="contact-link px-2"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            )}
            {user.githubUrl && (
              <a
                href={user.githubUrl}
                className="contact-link px-2"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            )}
          </Stack>
        </Card.Footer>
      )}
    </Card>
  );
};
