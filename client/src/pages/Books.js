import React, { Component } from "react";
// import SaveBtn from "../components/SaveBtn";
import Result from "../components/Result";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    isSaved: false,
    bookResults: [],
    search: "",
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, search: ""})
      )
      .catch(err => console.log(err));
  };

  searchBook = () => {
    let query = this.state.search;
    API.searchBooks(query)
    .then(res => {
      for(let i = 0; i < res.length; i++){
      this.state.bookResults.push(res[i])}
      console.log(this.state.bookResults);
      }
    )
  .catch(err => console.log(err));
};

//ignore this for now
  saveBook = id => {
    API.saveBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


//ToDo: change del button to save button in this render. 

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <em>Imagine two men holding a captured puma on a rope. If they want to approach each other, the puma will attack, because the rope will slacken; only if they both pull simultaneously on the rope is the puma equidistant from the two of them. that is why it is so hard for him who reads and him who writes to reach each other: between them lies a mutual thought captured on ropes that they pull in opposite directions. If we were now to ask that puma--in other words, that thought--how it perceived these two men, it might answer that at the ends of the rope those to be eaten are holding someone they cannot eat...
            </em>
          </Jumbotron>
        </Row>
        <Row>
          <Col size="md-12">
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="search for a book"
              />
              <FormBtn onClick={this.searchBook}>
                Search
              </FormBtn>
            </form>
          </Col>
          </Row>
          <Row>
          <Col size="md-12 sm-12">
            {this.state.bookResults.length ? (
              <List>
                {this.state.bookResults.map(book => (
                  <ListItem key={book._id}>
                    <Result />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
