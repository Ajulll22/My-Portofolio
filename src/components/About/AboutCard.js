import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nama saya <span className="purple">Ahmad Julio Rizki </span>
            asal <span className="purple"> Lampung, Indonesia.</span>
            <br />Merupakan<span className="purple"> Fresh Graduate dari </span>Universitas Lampung, jurusan Ilmu Komputer.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cepat dalam belajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Mampu bekerja dalam tim
            </li>
            <li className="about-activity">
              <ImPointRight /> Memiliki komunikasi yang baik
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Dan hanya kepada Tuhanmulah hendaknya kamu berharap."{" "}
          </p>
          <footer >(Q.S. Al-Insyirah: 8)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
