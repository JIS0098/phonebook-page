import { Button,Form,Col,Row } from "react-bootstrap";
import React from "react";

const SearchBox = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Form.Control type="text" placeholder="이름을 입력해주세요" />
        </Col>
        <Col>
          <Button className="search-box-but">검색</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
