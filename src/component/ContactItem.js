import React from 'react'
import { Button, Form, Col, Row } from "react-bootstrap";


const ContactItem = () => {
  return (
    <div className='profile'>
      <Row className='profile-area'>
        <Col lg={2}>
          <img width={80} src='https://mblogthumb-phinf.pstatic.net/MjAyMTA4MDRfMjk0/MDAxNjI4MDg2MDEwNTY4.TTh8QJAkzwBZZpKSw8OpIK83JQ8dBBI5qBu9uWvgrKUg.X2keaCQ5fJkyx05OOlVYwKPi3ynq0_oqHv-UFqLyGsQg.PNG.cha-cha97/%EC%B6%98%EC%8B%9D%EC%9D%B4%EF%BC%BF001.png?type=w800' />
        </Col>
        <Col className='profile-title'  lg={10}> 
          <h4>
            춘식이
          </h4>
          <p>
              01012345678
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem