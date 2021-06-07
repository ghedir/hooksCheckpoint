import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  const { id, title, description, posterURL, rating } = movie;

  return (
    <div className="movie" style={{ marginTop: "50px" }}>
      <Card
        style={{ width: "300px", height: "100%" }}
        className="d-flex justify-content-start m-3"
      >
        <Card.Img variant="top" src={posterURL} style={{ height: 400 }} />
        <Card.Body style={{ height: 350 }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <Button variant="info" size="lg">
              Movie Details
            </Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          <StarRatingComponent
            name="rate"
            value={rating}
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </Card.Footer>
      </Card>
    </div>
  );
};
export default MovieCard;
