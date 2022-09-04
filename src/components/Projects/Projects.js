import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fuzzy from "../../Assets/Projects/fuzzy.png";
import harmonisasi from "../../Assets/Projects/harmonisasi.png";
import omnilaw from "../../Assets/Projects/omnilaw.png";
import kasir from "../../Assets/Projects/kasir.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proyek <strong className="purple">Web </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnilaw}
              isBlog={false}
              title="Aplikasi Omnilaw"
              description="Aplikasi yang digunakan oleh Legal Drafter pada DPD untuk pembuatan RUU, dan mengharmonisasikan RUU"
              tags={['Laravel 8', 'Tailwind', 'MySql']}
              ghLink="https://github.com/Ajulll22/peraturan-uu"
              demoLink="http://omnilaw.lppm.unila.ac.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasir}
              isBlog={false}
              title="KasirApp"
              description="Website kasir pada sebuah restoran cepat saji, dengan fitur utama yaitu keranjang, total pembayaran, dan transaksi"
              tags={['React Js', 'Bootstarp 5', 'Fiber Go', 'GORM', 'Mysql']}
              ghLink="https://github.com/Ajulll22/Kasir-React-Go"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={harmonisasi}
              isBlog={false}
              title="Service Harmonisasi"
              description="Service yang digunakan oleh Aplikasi Omnilaw dalam proses meng-harmonisasikan, dan pendraftingan RUU"
              tags={['FastApi', 'Swagger', 'MySql', 'SqlAlchemy']}
              ghLink="https://github.com/Ajulll22/harmonisasi-service"
              demoLink="http://omnilaw.lppm.unila.ac.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fuzzy}
              isBlog={false}
              title="Sistem Informasi Pengambilan Keputusan"
              description="Sistem Informasi pada PT. Askha jaya, yang digunakan dalam penentuan kualitas produk, menggunakan metode DSS (Decision Support System) yaitu Fuzzy-AHP"
              tags={['CodeIgniter 4', 'Jquery', 'Admin LTE', 'MySql']}
              ghLink="https://github.com/Ajulll22/Fuzzy-Ahp-CodeIgniter4"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
