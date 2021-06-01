import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ getSearchData }) => {
  const [searchInput, setsearchInput] = useState({ searchInput: "" });
  const [searchRate, setsearchRate] = useState(0);
  const handleSearch = (e) => {
    setsearchInput({ ...searchInput, [e.target.name]: e.target.value });
    getSearchData({ ...searchInput, searchRate });
  };
  useEffect(() => {
    getSearchData({ ...searchInput, searchRate });
  }, [searchInput, searchRate]);

  return (
    <div>
      <Row>
        <Col sm>
          <Form className="search-input">
            <TextField
              type="input"
              name="searchInput"
              id="outlined-basic"
              label="Search Here"
              variant="outlined"
              color="info"
              onChange={handleSearch}
            />
          </Form>
        </Col>
        <Col className="stars-filter" sm>
          <StarRatingComponent
            name="rate"
            count={5}
            value={searchRate}
            onStarClick={(value) => setsearchRate(value)}
            activeColor="#ffd700"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
