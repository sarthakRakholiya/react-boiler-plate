import PropTypes from 'prop-types';
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

ErrorFallback.propTypes = {
  /* Defining the props that are passed to the component. */
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  resetErrorBoundary: PropTypes.any,
};

export default ErrorFallback;
