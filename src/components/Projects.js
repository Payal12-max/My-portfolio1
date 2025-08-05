
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/image.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title:"HR-SCREENING CHATBOT",
      description: "Devloped using python, langchain and open-ai integration",
      imgUrl: projImg1,
    },
    {
      title: "ASTRA",
      description: "everything about the space. still working on it.",
      imgUrl: projImg3,
    },
    {
      title: "More....",
      description: "Some projects yet to come....",
      imgUrl: projImg2,
    }
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have built several hands-on projects to enhance my skills and deepen my understanding of front-end development. From creating interactive websites using HTML, CSS, and JavaScript to experimenting with responsive designs and animations, I’ve focused on building clean and user-friendly interfaces. To challenge myself further, I developed a functional chatbot using modern web technologies, which allowed me to integrate real-time interaction, API handling, and a deeper understanding of JavaScript logic. Each project—big or small—has been a stepping stone, helping me become more confident in turning ideas into working applications and strengthening my problem-solving abilities as a developer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Yet to come..</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Working on more ideas...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

