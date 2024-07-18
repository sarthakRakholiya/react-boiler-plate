/**
 * It's a button that can be used to submit a form its take type, color, className, label, isSubmit
 * @returns A button with a spinner if isSubmit is true, otherwise a button with the label.
 */
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';

const SubmitButton = ({ type, color, className, label, isSubmit, ...rest }) => {
  return (
    <Button
      className={className || ''}
      type={type || 'button'}
      color={color || 'primary'}
      {...rest}
    >
      {isSubmit ? <Spinner size={'sm'} /> : <>{label || 'submit'}</>}
    </Button>
  );
};

/* A prop type validation. */
SubmitButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  isSubmit: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default SubmitButton;
