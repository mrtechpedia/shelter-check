import React from "react";

import "./search_form.styles.css";

import { Form,Button } from "react-bootstrap";


const SearchForm = () => (
    <div>
        <Form className="flex_container">
        <Button variant="white" className="flex_child search_icon">
            <i class="fa fa-search"></i>
        </Button>{' '}
        <Form.Control type="search" placeholder="Search..." className="search_form flex_child" />
        </Form>  
    </div>
)

export default SearchForm;