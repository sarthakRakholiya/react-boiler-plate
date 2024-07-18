/**
 * A form input component which is used in formik form for validation
 * @returns A form input.
 */

import PropTypes from 'prop-types';
import { FormGroup, Input, FormFeedback, Label } from 'reactstrap';

const FormInput = ({
  autoFocus,
  type,
  placeholder,
  className,
  name,
  setFieldValue,
  value,
  isDisabled,
  error,
  touched,
  label = '',
  ...rest
}) => {
  // ***** start - onchange of input set value through setFieldValue in formik *****
  const onChangeOfInput = (event) => {
    setFieldValue(name, event.target.value);
  };
  // ***** end - onchange of input set value through setFieldValue in formik *****

  return (
    /* A form input component which is used in formik form. */
    <FormGroup>
      {label ? <Label>{label}</Label> : null}
      <Input
        className={`${
          error[name] && touched[name] ? 'is-invalid' : ''
        }${className}`}
        name={name}
        autoFocus={autoFocus}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={onChangeOfInput}
        {...rest}
      />
      {error[name] && touched[name] ? (
        <FormFeedback>{error[name] || ''}</FormFeedback>
      ) : null}
    </FormGroup>
  );
};

/* A prop type validation. */
FormInput.propTypes = {
  autoFocus: PropTypes.any,
  className: PropTypes.string,
  error: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.any,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
