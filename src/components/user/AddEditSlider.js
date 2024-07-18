/**
 * It toggle Edit sidebar and save data
 * @returns A Edit sidebar.
 */
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { toast } from 'react-hot-toast';
import { Col, Row, Spinner } from 'reactstrap';
import { toastSuccessMessage } from '../../constant/message';

import { userValidation } from '../../constant/validation';
import FormInput from '../common/FormInput';
import SubmitButton from '../common/SubmitButton';
import Sidebar from '../modal/Sidebar';
import { useEffect, useState } from 'react';

const AddEditSlider = ({ toggle, isOpen, userSliderType }) => {
  const [initValue, setinitValue] = useState({
    userName: '',
    userDesignation: '',
    perDayUse: '',
  });
  const [loading, setLoading] = useState(true);

  const onSubmit = async (values, { resetForm }) => {
    toggle();
    if (userSliderType === 'Edit') {
      toast.success(toastSuccessMessage.EDIT_USER_SUCCESS);
    } else {
      toast.success(toastSuccessMessage.ADD_USER_SUCCESS);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (userSliderType === 'View' || userSliderType === 'Edit') {
      setinitValue({
        userName: 'Abc Xyz',
        userDesignation: 'WEB dev',
        perDayUse: '150 Gb',
      });
    }
    setLoading(false);
  }, []);

  return (
    <Sidebar toggle={toggle} header={`${userSliderType} user`} isOpen={isOpen}>
      <div>
        <Row>
          {!loading ? (
            <Formik
              initialValues={
                userSliderType === 'View' || userSliderType === 'Edit'
                  ? {
                      userName: 'Abc Xyz',
                      userDesignation: 'WEB dev',
                      perDayUse: '150 Gb',
                    }
                  : {
                      userName: '',
                      userDesignation: '',
                      perDayUse: '',
                    }
              }
              validationSchema={userValidation}
              onSubmit={onSubmit}
            >
              {({ setFieldValue, values, errors, touched }) => (
                <Form>
                  {' '}
                  <Col md="12">
                    <FormInput
                      placeholder="Enter user full name"
                      name="userName"
                      className=""
                      autoFocus={true}
                      value={values.userName}
                      type="text"
                      setFieldValue={setFieldValue}
                      isDisabled={userSliderType === 'View'}
                      error={errors}
                      touched={touched}
                      bsSize="lg"
                      label="Full Name"
                    />
                  </Col>
                  <Col md="12">
                    <FormInput
                      placeholder="Enter User designation"
                      name="userDesignation"
                      className=""
                      autoFocus={true}
                      value={values.userDesignation}
                      type="text"
                      setFieldValue={setFieldValue}
                      isDisabled={userSliderType === 'View'}
                      error={errors}
                      bsSize="lg"
                      touched={touched}
                      label="Designation"
                    />
                  </Col>
                  <Col md="12">
                    <FormInput
                      placeholder="Enter per use"
                      name="perDayUse"
                      className=""
                      autoFocus={true}
                      value={values.perDayUse}
                      type="text"
                      setFieldValue={setFieldValue}
                      isDisabled={userSliderType === 'View'}
                      error={errors}
                      bsSize="lg"
                      touched={touched}
                      label="Use par day"
                    />
                  </Col>
                  {userSliderType !== 'View' && (
                    <SubmitButton
                      type="submit"
                      className="mt-2 me-2"
                      color="outline-primary"
                      label={userSliderType === 'Edit' ? 'Edit' : 'Add'}
                      isSubmit={false}
                    />
                  )}
                </Form>
              )}
            </Formik>
          ) : (
            <Spinner />
          )}
        </Row>
      </div>
    </Sidebar>
  );
};

/* A prop type validation. */
AddEditSlider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  userSliderType: PropTypes.string.isRequired,
};

export default AddEditSlider;
