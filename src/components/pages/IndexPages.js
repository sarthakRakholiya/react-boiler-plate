/**
 * It returns login page component
 * @returns A login component.
 */
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Formik, Form } from 'formik';
import { toast } from 'react-hot-toast';

import { CustomSvgIcon } from '../common/CustomSvgIcon';
import FormInput from '../common/FormInput';
import BgImage from '../../assets/images/bgImage.svg';
import PasswordFormInputGroup from '../common/PasswordFormInputGroup';
import SubmitButton from '../common/SubmitButton';
import { loginValidation } from '../../constant/validation';
import { createCookie } from '../../utils/utils';
import Logo from '../../assets/images/logo.svg';
import { toastSuccessMessage } from '../../constant/message';
import { USER_TOKEN_COOKIES_KEY } from '../../constant/appConstants';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../redux/action/userAction';

const IndexPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  /**
   * @param values - The values of the form.
   * @param  - values - the values of the form
   */
  const onSubmit = async (values, { resetForm }) => {
    dispatch(setAuthToken(true))
    createCookie(USER_TOKEN_COOKIES_KEY, true);
    navigate('/dashboard');
    toast.success(toastSuccessMessage.LOGIN_SUCCESS);
  };
  return (
    <section className="auth-section">
      <Container className="auth-container">
        <div className="auth-content">
          <Row className="justify-content-center">
            <Col md="5" xl="8" className="relative">
              <div className="left-section">
                <h1>Sign in to</h1>
                <h2>Lorem Ipsum is simply </h2>
                <p>If you don’t have an account register</p>
                <p className="p-styled">
                  You can <Link to="/">Register here !</Link>
                </p>
                <img
                  src={BgImage}
                  alt="BgImage"
                  className="bg-image img-fluid"
                />
              </div>
            </Col>
            <Col md="5" xl="4">
              <div className="right-section">
                <h3>Sign in</h3>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={loginValidation}
                  onSubmit={onSubmit}
                >
                  {({ setFieldValue, values, errors, touched }) => (
                    <Form>
                      <FormInput
                        placeholder="Enter email"
                        name="email"
                        className=""
                        autoFocus={true}
                        value={values.email}
                        type="text"
                        setFieldValue={setFieldValue}
                        isDisabled={false}
                        error={errors}
                        touched={touched}
                      />
                      <PasswordFormInputGroup
                        placeholder="Enter password"
                        name="password"
                        className=""
                        autoFocus={true}
                        value={values.password}
                        type="password"
                        setFieldValue={setFieldValue}
                        isDisabled={false}
                        error={errors}
                        touched={touched}
                      />
                      <Link to="/">Forgot Password?</Link>
                      <SubmitButton
                        type="submit"
                        className="login-btn w-100"
                        color="primary"
                        label="Login"
                        isSubmit={false}
                      />
                    </Form>
                  )}
                </Formik>
                <p className="">or continue with</p>
                <ul>
                  <li>
                    <a href="#">
                      <CustomSvgIcon icon="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <CustomSvgIcon icon="icon-apple" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <CustomSvgIcon icon="icon-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <img src={Logo} alt="Logo" className="logo" />
      </Container>
    </section>
  );
};

export default IndexPages;
