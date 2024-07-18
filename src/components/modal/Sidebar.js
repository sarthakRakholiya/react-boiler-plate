/**
 * It's a wrapper for the reactstrap Offcanvas component that takes a toggle function, an isOpen
 * boolean, and a header string as props
 * @returns A React component that renders an Offcanvas component from reactstrap.
 */
import PropTypes from 'prop-types';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

const Sidebar = ({ children, toggle, isOpen, header }) => {
  return (
    <>
      <Offcanvas toggle={toggle} isOpen={isOpen} direction="end">
        <OffcanvasHeader toggle={toggle}>{header}</OffcanvasHeader>
        <OffcanvasBody>{children}</OffcanvasBody>
      </Offcanvas>
    </>
  );
};

/* A prop type validation. */
Sidebar.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
