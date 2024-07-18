/**
 * This component is show change password element
 * @returns A Chnage password component
 */
import { Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import { Card, CardBody, Col, Row } from 'reactstrap';

import { changePasswordValidationSchema } from '../../constant/validation';
import PasswordFormInputGroup from '../common/PasswordFormInputGroup';
import SubmitButton from '../common/SubmitButton';
import { toastSuccessMessage } from '../../constant/message';

const ChangePassword = () => {
  /**
   * The function takes in two parameters, values and resetForm. The values parameter is an object that
   * contains the values of the form. The resetForm parameter is a function that resets the form. The
   * function then calls the resetForm function to reset the form
   * @param values - The values of the form.
   * @param  - values - the values of the form
   */
  const onSubmit = async (values, { resetForm }) => {
    resetForm();
    toast.success(toastSuccessMessage.CHANGE_PASSWORD_SUCCESS);
  };
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Change Password
          </li>
        </ol>
      </nav>

      <section className="change-pass-section">
        <Card className="w-50">
          <CardBody>
            {' '}
            <Formik
              initialValues={{
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              validationSchema={changePasswordValidationSchema}
              onSubmit={onSubmit}
            >
              {({ setFieldValue, values, errors, touched }) => (
                <Form>
                  <Row className="justify-content-center">
                    <PasswordFormInputGroup
                      placeholder="Enter your old password"
                      name="oldPassword"
                      className=""
                      autoFocus={true}
                      value={values.oldPassword}
                      type="password"
                      setFieldValue={setFieldValue}
                      isDisabled={false}
                      error={errors}
                      touched={touched}
                      size="md"
                      label={'Old Password'}
                    />
                  </Row>
                  <Row className="justify-content-center">
                    <PasswordFormInputGroup
                      label={'New Password'}
                      placeholder="Enter your new password"
                      name="newPassword"
                      className=""
                      autoFocus={true}
                      value={values.newPassword}
                      type="password"
                      setFieldValue={setFieldValue}
                      isDisabled={false}
                      error={errors}
                      touched={touched}
                      size="md"
                    />
                  </Row>
                  <Row className="justify-content-center">
                    <PasswordFormInputGroup
                      label={'Confirm Password'}
                      placeholder="Enter  password"
                      name="confirmPassword"
                      className=""
                      autoFocus={true}
                      value={values.confirmPassword}
                      type="password"
                      setFieldValue={setFieldValue}
                      isDisabled={false}
                      error={errors}
                      touched={touched}
                      size="md"
                    />
                  </Row>
                  <Row>
                    <div className="col-md-12 password-requirement">
                      <div className="padding-custom">
                        Password Requirements:
                      </div>
                      <ul>
                        <li>
                          Minimum 8 characters long - the more, the better
                        </li>
                        <li>At least one lowercase character</li>
                        <li>
                          At least one number, symbol, or whitespace character
                        </li>
                      </ul>
                    </div>
                  </Row>
                  <SubmitButton
                    type="submit"
                    className="mt-2 me-2"
                    color="outline-primary"
                    label="Save Changes"
                    isSubmit={false}
                    disabled={Object.keys(errors).length > 0}
                  />
                  <SubmitButton
                    type="reset"
                    className="mt-2"
                    color="outline-secondary"
                    label="Reset"
                    isSubmit={false}
                  />{' '}
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </section>
    </div>
  );
};

export default ChangePassword;
