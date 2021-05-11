import React from 'react';
import {Col, Row} from "../Grid/index";

function Display ({book}) {
    <Row>
        <Col size="col-md-3">
            <img src={book.image} alr="..."/>
        </Col>
        <Col size ="col-md-9">
            <Row>
                <Col size ="col-md-12">
            <div>
                <h1>
                    Title: {book.title}
                </h1>
            </div>
            <div>
                <h3>
                    Author: {book.author}
                </h3>
            </div>
            <div>
                Description: {book.description}
            </div>
                </Col>
            </Row>
        </Col>
    </Row>
}

export default Display;
