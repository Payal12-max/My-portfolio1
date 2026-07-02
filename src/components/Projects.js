import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/projimg3.png";
import projImg4 from "../assets/img/projimg4.png";
import projImg5 from "../assets/img/projimg5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const tab1Projects = [
    {
      title: "SMART-CV",
      description:
        "An AI-powered resume builder built with React, Tailwind CSS, and Strapi (PostgreSQL).",
      imgUrl: projImg3,
    },
    {
      title: "HR-SCREENING CHATBOT",
      description: "Developed using Python, LangChain and OpenAI integration.",
      imgUrl: projImg1,
    },
    {
      title: "WHATSAPP CHAT ANALYZER",
      description: "Built a WhatsApp Chat Analyzer using Python.",
      imgUrl: projImg2,
    },
  ];

  const tab2Projects = [
    {
      title: "TOWNCAFE WEB",
      description:
        "A modern and responsive café website showcasing menu, ambiance, and seamless user experience.",
      imgUrl: projImg4,
    },
    {
      title: "HARRY-POTTER-QUOTES GENERATOR",
      description:
        "A Harry Potter Quote Generator with light/dark theme switching, random quote generation, and favorite quote management.",
      imgUrl: projImg5,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <p>
                    I have built several hands-on projects to enhance my skills
                    and deepen my understanding of front-end development,
                    full-stack applications, and AI-powered tools.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {tab1Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {tab2Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>Working on more ideas.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};