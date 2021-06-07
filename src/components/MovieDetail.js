import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "../components/detail.css";

const MovieDetail = ({ match, movies, history }) => {
  let movieDetail = movies.find((movies) => movies.id === match.params.id);

  return (
    <div>
      {
        <Container fluid="sm">
          <Row className="detail-head">
            <Col md={4}>
              <h1 className="detail-title">MovieDescription</h1>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button
                onClick={() => history.push("/")}
                style={{ marginTop: 10 }}
              >
                Back To Home
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="movie-title">{movieDetail.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="movie-stars" md={{ span: 3, offset: 3 }}>
              <StarRatingComponent
                className="stars"
                name="Rating"
                value={movieDetail.rating}
              />
            </Col>
          </Row>
          <Row className="movie-trailer">
            <iframe
              width="703"
              height="395"
              src={movieDetail.trailer}
              title="YouTube video player"
              eslint-disable-next-line
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Row>
          <Row className="movie-descrip">
            <h5 className="description-header">Description:</h5>
            <p>{movieDetail.description}</p>
          </Row>
        </Container>
      }
    </div>
  );
};

export default MovieDetail;
