import React, { Component } from "react";
// import SaveBtn from "../components/SaveBtn";
import Result from "../components/Result";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
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

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, search: ""})
  //     )
  //     .catch(err => console.log(err));
  // };

  searchBook = () => {
    console.log(this.state.search);
    API.searchBooks(this.state.search)
    .then(res => {
      this.setState({
        bookResults: res.data
      })
      }
    )
  .catch(() => {
    this.setState({
      books: [],
  })
});
}

handleBookSave = id => {
  const book = this.state.books.find(book => book.id === id);

  API.saveBook({
    googleId: book.id,
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    link: book.volumeInfo.infoLink,
    authors: book.volumeInfo.authors,
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail
  }).then(() => this.getBooks());
};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook();
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
              <FormBtn 
                onClick={this.handleFormSubmit}
                search={this.state.search}>
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
                  <Result
                  key={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  link={book.volumeInfo.infoLink}
                  authors={book.volumeInfo.authors.join(", ")}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  Button={() => (
                    <button
                      onClick={() => this.handleBookSave(book.id)}
                      className="btn btn-primary ml-2"
                    >
                      Save
                    </button>
                  )} />
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
