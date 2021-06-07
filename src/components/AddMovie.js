import React, { useState } from "react";

import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

import StarRatingComponent from "react-star-rating-component";
import { v4 as uuidv4 } from "uuid";
const AddMovie = ({ getInputData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const [input, setInput] = useState({
    title: " ",
    description: " ",
    posterURL: " ",
  });
  const [rating, setRating] = useState(0);
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    getInputData({ ...input, rating: rating, id: uuidv4() });
    handleClose();
  };

  return (
    <div className="add-movie">
      <Button className="btn-add" onClick={() => setShow(true)} size="lg">
        Add New Movie
      </Button>
      <Modal
        show={show}
        onClose={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            New Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAdd}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">MovieTitle</InputGroup.Text>
              <FormControl
                name="title"
                placeholder=""
                aria-label="MovieTitle"
                aria-describedby="basic-addon1"
                onChange={handleInput}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Descripton</InputGroup.Text>
              <FormControl
                name="description"
                placeholder=""
                aria-label="Descripton"
                aria-describedby="basic-addon1"
                onChange={handleInput}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">PosterURL</InputGroup.Text>
              <FormControl
                name="posterURL"
                placeholder=""
                aria-label="PosterURL"
                aria-describedby="basic-addon1"
                onChange={handleInput}
              />
            </InputGroup>
            <StarRatingComponent
              name="rating"
              value={rating}
              count={5}
              size={30}
              onStarClick={(value) => setRating(value)}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              className="stars-add"
            />

            <Button type="submit" variant="outline-primary">
              Add Movie
            </Button>
            <Button
              style={{ marginLeft: "20px", margin: "20px" }}
              variant="danger"
              onClick={handleClose}
            >
              close
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddMovie;
