/**
 * It renders a search bar that filters the table
 * @returns A header for data table .
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';

import { Button, Input } from 'reactstrap';
import { selectThemeColors } from '../../utils/utils';

const TableHeader = ({ search, setSearch, toggle, setUserSliderType }) => {
  const [userTypes, setuserTypes] = useState({});

  const userTypeOtion = [
    { value: 'Devloper', label: 'Devloper' },
    { value: 'Manager', label: 'Manager' },
    { value: 'Hr', label: 'Hr' },
    { value: 'CEO', label: 'CEO' },
  ];

  return (
    <div className="table-header">
      <div className="d-flex w-100 align-items-end justify-content-end flex-wrap gap-2 flex-sm-row flex-column">
        <div className="sm-100">
          <Select
            theme={selectThemeColors}
            className="react-select"
            classNamePrefix="select"
            placeholder="Select Type"
            options={userTypeOtion}
            isClearable={true}
            menuPortalTarget={document.body}
            onChange={(value) => setuserTypes(value)}
          />
        </div>
        <div className="sm-100">
          <Input
            id="search-invoice"
            className="ms-50 w-100 "
            type="text"
            value={search}
            bsSize="lg"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div>
          <Button
            color="outline-dark"
            onClick={() => {
              setUserSliderType('Add');
              toggle();
            }}
          >
            Add User
          </Button>
        </div>
      </div>
    </div>
  );
};

/* A prop type validation. */
TableHeader.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setUserSliderType: PropTypes.func,
  toggle: PropTypes.func.isRequired,
};

export default TableHeader;
