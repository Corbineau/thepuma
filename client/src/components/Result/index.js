import React from "react";
import { Link } from "react-router-dom";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";
import "./style.css";
import { Col, Row } from "../Grid";


// This file exports each result from the Saved items in the DB. This is what gets rendered every time we map a result. So... should actually make that happen, huh?
// There's actually 2 kinds of results we care about-- saved ones, and searched ones. So we'll need a ternary for the button in the corner that looks something like (saved ? <DeleteBtn>Delete</DeleteBtn> : <SavedButton>Save</SavedButton> ) 

export default function Result({ children }) {
  return (
    <div className="list-overflow-container result">
      <Row>
        <Col size="md-9">
          <strong>{children.book.title}</strong>
        </Col>
        <Col size="md-3">
          <Link to={children.book.link}>
            <button>
              view
        </button>
          </Link>
          {this.state.isSaved ? <SaveBtn onClick={() => this.saveBook(children.book)} /> : <DeleteBtn onClick={() => this.deleteBook(children.book._id)} />}
        </Col>
      </Row>
      <Row>
        By: {children.book.authors}
      </Row>
      <Row>
        <img src={children.book.image} alt="Thumbnail of the book"/>
        description: {children.book.synopsis}
      </Row>

    </div>
  );
}
