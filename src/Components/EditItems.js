import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/addItem.css';
import { Link } from 'react-router-dom';

const EditItems = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Product Name</Label>
        <Input type='text' placeholder='Product' />
        <Label>Company Name</Label>
        <Input type='text' placeholder='Company' />
        <Label>Quntity</Label>
        <Input type='text' placeholder='Quntity' />
        <Label>Address</Label>
        <Input type='text' placeholder='Address' />
      </FormGroup>
      <Button className='btn-submit' type='submit'>
        Edit Cart
      </Button>
      <Link to='/' className='btn btn-danger ml-2 btn-submit'>
        Cancel
      </Link>
    </Form>
  );
};

export default EditItems;
