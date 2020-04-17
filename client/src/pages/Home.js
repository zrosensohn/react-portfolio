import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Img from '../components/Img';

function Home() {

  return (
    <Container className="container mt-5">
      <Row className='row'>
        <Col className='col'>
          <div>
          <Img
              src='./img/zachary-rosensohn.jpg'
              className='img rounded-circle mr-4 d-block mx-auto'
              alt='Zachary Rosensohn'
              height="100px"
            />
          </div>
          <h2 className="text-center">About Me</h2>
            <p>
              Zac is a graduate from Wesleyan University. A football player, an English major, a lover of music, Zac continues to help us to find faster and more efficient ways to bring the lessons home to students. Nearly all of our tutors are old enough to be our students’ parents so it’s essential that we gain a young person’s perspective on how we instruct. Zac was essential in creating PowerPoint Presentations for the math that allow us to cover more ground in math in each class. Prior to this innovation there was not enough time to diagram every problem on the board. Zac was also instrumental in helping create The Essay Clinic, a self-standing online essay program. His sense of design and pace is impeccable. That, combined with his self-taught computer skills and longtime interest in teaching and business, makes for a perfect fit at CPP, and we are thrilled that he has joined us full time.
            </p>
        </Col>
      </Row>
    </Container>
  );

};

export default Home;