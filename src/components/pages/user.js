/**
 * It's show user data in table with pagination
 * @returns A user table  */

import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { ChevronLeft, ChevronRight, Edit, Eye, Trash2 } from 'react-feather';
import ReactPaginate from 'react-paginate';
import { Col, Card, CardBody, Spinner, Row, Button } from 'reactstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import toast from 'react-hot-toast';

import TableHeader from '../common/TableHeader';
import AddEditSlider from '../user/AddEditSlider';
import { toastSuccessMessage } from '../../constant/message';
import FormInput from '../common/FormInput';
import SubmitButton from '../common/SubmitButton';

const MySwal = withReactContent(Swal);

const ChangePassword = () => {
  /* A state variable. */
  const limit = 10;
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const [page, setPage] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(false);
  const [userSliderType, setUserSliderType] = useState('');

  /**
   * It's a function that takes a row as an argument and returns a confirmation dialog that deletes
   * the row if the user confirms
   * @param row - The row that is being deleted.
   * @returns A function that returns a promise.
   */
  const handleConfirmText = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-outline-dark',
        cancelButton: 'btn btn-outline-danger ms-1',
      },
      buttonsStyling: false,
    }).then(async function (result) {
      result.value && toast.success(toastSuccessMessage.DELETE_USER_SUCCESS);
    });
  };
  // ***** end - popup for delete seller *****

  useEffect(() => {
    setIsLoading(true);
    setTotal(105);
    setPage(1);

    /* Creating the columns for the table. */
    const column = [
      {
        name: 'Id',
        minWidth: '50px',
        center: true,
        cell: () => <span>US0001</span>,
      },
      {
        name: 'Name',
        minWidth: '180px',
        center: true,
        sortable: true,
        cell: () => <span>Pruthvi Darji</span>,
      },
      {
        name: 'Email',
        minWidth: '200px',
        center: true,
        sortable: true,
        cell: () => <span>pruthvid@zignuts.com</span>,
      },
      {
        name: 'Per day use',
        minWidth: '50px',
        center: true,
        sortable: true,
        cell: () => <span>150 Gb</span>,
      },
      {
        name: 'Action',
        minWidth: '200px',
        center: true,
        cell: () => (
          <div className="column-action d-flex align-items-center justify-content-center gap-1">
            <div
              className="pointer text-warning"
              onClick={() => {
                setSliderOpen(!sliderOpen);
                setUserSliderType('View');
              }}
            >
              <Eye size={16} className="me-2" />
            </div>
            <div
              onClick={() => {
                setSliderOpen(!sliderOpen);
                setUserSliderType('Edit');
              }}
              className="pointer text-primary"
            >
              <Edit size={16} className="me-2" />
            </div>
            <div
              onClick={() => {
                handleConfirmText();
              }}
              className="pointer text-danger"
            >
              <Trash2 size={16} className="me-2" />
            </div>
          </div>
        ),
      },
    ];

    setColumns([...column]);
    setIsLoading(false);
  }, [search]);

  const CustomPagination = () => {
    const count = Math.ceil(total / limit);
    return (
      <ReactPaginate
        previousLabel={<ChevronLeft size={20} />}
        nextLabel={<ChevronRight size={20} />}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={page}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={(val) => setPage(val.selected)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={
          'pagination react-paginate justify-content-lg-end justify-content-center'
        }
      />
    );
  };
  const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="booty-check" />
    </div>
  ));
  return (
    <section className="">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            User List
          </li>
        </ol>
      </nav>

      <Card>
        <CardBody>
          <Row>
            <Col md="3">
              <FormInput
                placeholder="Search by full name"
                name="userName"
                className=""
                autoFocus={true}
                value=""
                type="text"
                setFieldValue={() => {}}
                error={{}}
                bsSize="lg"
                label="Full Name"
              />
            </Col>
            <Col md="3">
              <FormInput
                placeholder="Search by designation"
                name="userDesignation"
                className=""
                autoFocus={true}
                value=""
                type="text"
                setFieldValue={() => {}}
                bsSize="lg"
                error={{}}
                label="Designation"
              />
            </Col>
            <Col md="3">
              <FormInput
                placeholder="Search by per use"
                name="perDayUse"
                className=""
                autoFocus={true}
                value=""
                error={{}}
                type="text"
                setFieldValue={() => {}}
                bsSize="lg"
                label="Use par day"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <div className="cardBodyPadding" />
      <Card>
        <CardBody>
          <DataTable
            title="User List"
            noHeader
            subHeader
            sortServer
            pagination
            responsive
            paginationServer
            columns={columns}
            progressPending={isLoading}
            progressComponent={<Spinner />}
            className="react-dataTable my-2 rounded-3"
            paginationComponent={CustomPagination}
            selectableRows
            selectableRowsComponent={BootyCheckbox}
            data={[{}, {}, {}]}
            noDataComponent={<div>No data Found</div>}
            subHeaderComponent={
              <TableHeader
                search={search}
                setSearch={setSearch}
                toggle={() => setSliderOpen(!sliderOpen)}
                setUserSliderType={setUserSliderType}
              />
            }
          />
        </CardBody>
      </Card>
      <AddEditSlider
        toggle={() => setSliderOpen(!sliderOpen)}
        isOpen={sliderOpen}
        userSliderType={userSliderType}
      />
    </section>
  );
};

export default ChangePassword;
