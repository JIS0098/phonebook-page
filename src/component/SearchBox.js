import { Button, Form, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <div>
      <Form onSubmit={searchByName}>
        <Row>
          <Col lg={6}>
            <Form.Control
              onChange={(event) => setKeyword(event.target.value)}
              type="text"
              placeholder="이름을 입력해주세요"
            />
          </Col>
          <Col>
            <Button type="submit" className="search-box-but">
              검색
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
