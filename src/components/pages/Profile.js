/**
 * It returns a profile card with a header, body, and footer
 * @returns A profile page.
 */

import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import FormInput from '../common/FormInput';
import SubmitButton from '../common/SubmitButton';

const Profile = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            User Profile
          </li>
        </ol>
      </nav>

      <Card className="profile-card">
        <CardHeader className="my-3">
          <h3>Profile</h3>
        </CardHeader>
        <CardBody className="my-3">
          <div className="d-flex justify-content-center">
            <div className="profile-image">
              <img
                className="img-fluid"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
            </div>
          </div>
          <Row className="mt-5">
            <Col xl={6}>
              <FormInput
                placeholder="Enter user first name"
                name="firstName"
                className=""
                autoFocus={false}
                value={'John'}
                setFieldValue={() => {}}
                error={{}}
                touched={{}}
                type="text"
                isDisabled={true}
                bsSize="lg"
                label="First Name"
              />
            </Col>
            <Col xl={6}>
              <FormInput
                placeholder="Enter user last name"
                name="lastName"
                className=""
                autoFocus={false}
                value={'Doe'}
                setFieldValue={() => {}}
                error={{}}
                touched={{}}
                type="text"
                isDisabled={true}
                bsSize="lg"
                label="Last Name"
              />
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <FormInput
                placeholder="Enter user email"
                name="email"
                className=""
                autoFocus={false}
                value={'johndoe@example.com'}
                setFieldValue={() => {}}
                error={{}}
                touched={{}}
                type="email"
                isDisabled={true}
                bsSize="lg"
                label="Email"
              />
            </Col>
            <Col xl={6}>
              <FormInput
                placeholder="Enter user company name"
                name="companyName"
                className=""
                autoFocus={false}
                value={'Zignuts'}
                setFieldValue={() => {}}
                error={{}}
                touched={{}}
                type="text"
                isDisabled={true}
                bsSize="lg"
                label="Company Name"
              />
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col md={2} className="text-align-right">
              <SubmitButton
                type="button"
                className="login-btn edit-button "
                color="outline-primary"
                label="Save Changes"
                isSubmit={false}
              />
            </Col>
            <Col md={1}>
              <SubmitButton
                type="reset"
                className="login-btn edit-button"
                color="outline-secondary"
                label="Reset"
                isSubmit={false}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
