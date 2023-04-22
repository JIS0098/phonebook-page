import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactFrom = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, number } });
 
  };

  return (
      <Form onSubmit={(event) => addContact(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="이름을 입력해주세요"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            onChange={(event) => setNumber(event.target.value)}
            type="number"
            placeholder="전화번호를 입력해주세요"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
  );
};

export default ContactFrom;
