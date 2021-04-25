import {faEdit, faInfo, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Container, Button} from 'reactstrap';

const columns = [
  {
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
      return {width: '5%'};
    },
  },
  {
    dataField: 'nama',
    text: 'Name',
    sort: true,
  },
  {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true,
  },
  {
    dataField: 'link',
    text: 'Action',
    formatter: (row) => {
      return (
        <div>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: ' id',
    order: 'asc',
  },
];

export const TableComponents = (props) => {
  return (
    <div>
      <h1>
        <Container>
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={props.users}
            columns={columns}
            defaultSorted={defaultSorted}
          />
        </Container>
      </h1>
    </div>
  );
};
