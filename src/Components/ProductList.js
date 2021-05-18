import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import '../styles/productList.css';
const ProductList = () => {
  return (
    <ListGroup className='mt-4'>
      <ListGroupItem className='d-flex'>
        <strong style={{ marginRight: '40%' }}>Customer One</strong>
        <div className='ml-auto'>
          <Link className='btn btn-warning editbtn' to='/edit/1'>
            Edit
          </Link>
          <Button color='danger'>Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default ProductList;
