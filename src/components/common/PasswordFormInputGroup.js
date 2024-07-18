/**
 * It's a custom input group component that takes in a label, placeholder, name, value, error, touched,
 * and setFieldValue props. It also has a state that toggles the password visibility
 * @returns A component that is a form input group with a password input.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  InputGroup,
  Input,
  InputGroupText,
  FormFeedback,
  Label,
} from 'reactstrap';

import { CustomSvgIcon } from './CustomSvgIcon';

const PasswordFormInputGroup = ({
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
  size = '',
  ...rest
}) => {
  //State
  const [showPassword, setShowPassword] = useState(false);

  // ***** start - onchange of input set value through setFieldValue in formik *****
  const onChangeOfInput = (event) => {
    setFieldValue(name, event.target.value);
  };
  // ***** end - onchange of input set value through setFieldValue in formik *****

  return (
    <>
      {label ? <Label>{label || ''}</Label> : null}
      <InputGroup className="mb-2" size={size}>
        <Input
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          className={`${
            error[name] && touched[name] ? 'is-invalid' : ''
          }${className}`}
          name={name}
          autoFocus={autoFocus}
          value={value}
          disabled={isDisabled}
          onChange={onChangeOfInput}
          {...rest}
        />
        <InputGroupText
          onClick={() => setShowPassword(!showPassword)}
          className={`${error[name] && touched[name] ? 'is-invalid' : ''}`}
        >
          <CustomSvgIcon
            icon={showPassword ? 'icon-eye' : 'icon-cross-eye'}
            icon_color={size === 'md' ? '#000' : '#A7A3FF'}
          />{' '}
        </InputGroupText>
        {error[name] && touched[name] && (
          <FormFeedback>{error[name] || ''}</FormFeedback>
        )}
      </InputGroup>{' '}
    </>
  );
};

/* A prop type validation. */
PasswordFormInputGroup.propTypes = {
  autoFocus: PropTypes.any,
  className: PropTypes.string,
  error: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  setFieldValue: PropTypes.func,
  size: PropTypes.string,
  touched: PropTypes.any,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PasswordFormInputGroup;
