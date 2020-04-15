import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from '../components/PorfolioCard';
import arr from '../utils/projects';

function Portfolio() {
  const [projects, setProjects] = useState([])


  useEffect(() => {
    console.log(arr);
    loadProjects()
  }, [])

  function loadProjects() {
    setProjects(arr.projects);
  };

  return (
    <Container className="container mt-5">
      <Row className='row row-cols-1 row-cols-md-3'>
          {projects.map(project => (
            <Col className='col mb-4' key={project.title}>
              <Card 
                imgSrc={project.img}
                imgClass=''
                imgAlt={project.title}
                cardTitle={project.title}
                cardText={project.desc}
                gitHub={project.github}
                demo={project.demo}
              />
            </Col>
          ))}
      </Row>
    </Container>
  )
};

export default Portfolio;