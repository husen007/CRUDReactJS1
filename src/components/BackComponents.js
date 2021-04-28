import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "reactstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponents = () => {
  return (
    <div>
      <Row className="mb-2">
        <Col>
          <Link to="/">
            <Button color="primary" className="mr-2">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default BackComponents;
