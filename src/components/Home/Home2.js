import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}><span className="purple"> Ringkasan
            </span>
            </h1>
            <p className="home-about-body">
              Merupakan <b className="purple">Fresh Graduate</b> dari Universitas Lampung, jurusan Ilmu Komputer,
              memiliki banyak proyek, dan pengalaman magang di beberapa tempat.
              <br />
              <br />Saya terbiasa bekerja dengan menggunakan bahasa pemrograman
              <i>
                <b className="purple"> Go, PHP, Javascript, dan Python. </b>
              </i>
              <br />
              <br />
              Saya tertarik pada
              <i>
                <b className="purple"> Pengembangan Web </b> dan
                khusus nya dibagian
                <b className="purple"> Backend.</b>
              </i>
              <br />
              <br />
              Framework dan Library yang biasa saya aplikasikan pada pengembangan web adalah
              <i>
                <b className="purple"> CodeIgniter, React.js, GoFiber, FastApi</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ajulll22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmad-julio-rizki-8a19b5240"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ajulll22/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
