import React from "react";

//import reactstrap
import { Card, CardBody, Container, Row, Col, CardImg } from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Cordinator() {
  const [staffDetails] = React.useState([
    {
      key: 1,
      name: "Prof. Arjun Singh Parihar",
      src: `${process.env.PUBLIC_URL + "/Mr. Arjun Singh Parihar.JPG"}`,
      position: "Chairman",
    },
    {
      key: 2,
      name: "Prof. Atul Agarwal",
      position: "Faculty Coordinator",
      src: `${process.env.PUBLIC_URL + "/Mr. Atul Agrawal.JPG"}`,
    },
    {
      key: 3,
      name: "Prof. Sonal Yadav",
      src: `${process.env.PUBLIC_URL + "/Sonal Yadav.jpeg"}`,
      position: "Member",
    },
    {
      key: 4,
      name: "Prof. Nandini Sharma",
      src: `${
        process.env.PUBLIC_URL +
        "/WhatsApp Image 2022-04-16 at 11.50.41 AM.jpeg"
      }`,
      position: "Member",
    },
    {
      key: 11,
      name: "Prof. Jagriti Singh",
      src: `${process.env.PUBLIC_URL + "/Ms. Jagriti Singh.JPG"}`,
      position: "Member",
    },
    {
      key: 5,
      name: "Mr. Anmol Agarwal",
      position: "Student Coordinator",
      src: `${
        process.env.PUBLIC_URL +
        "/WhatsApp Image 2022-04-16 at 11.45.31 AM.jpeg"
      }`,
    },
    {
      key: 7,
      name: "Mr. Sanket Patil",
      src: `${
        process.env.PUBLIC_URL +
        "/WhatsApp Image 2022-04-16 at 11.45.30 AM.jpeg"
      }`,
      position: "Student Representative",
    },
    {
      key: 6,
      name: "Mr. Chinmay Raiker",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      position: "Student Representative",
    },

    {
      key: 8,
      name: "Mr. Rohit Anjan",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      position: "Student Representative",
    },
    {
      key: 9,
      name: "Mr. Tanuj Singh Bhadoria",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      position: "Student Representative",
    },
    {
      key: 10,
      name: "Mr. Shilpi Sonone",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      position: "Student Representative",
    },
  ]);

  return (
    <>
      <SimpleHeader name="Co-ordinator" />
      <Container className="mt--6" fluid>
        <Row className="card-wrapper">
          {staffDetails.map((staff) => {
            return (
              <>
                <Col md="4" key={staff.key}>
                  <Card>
                    <CardImg
                      alt="..."
                      src={staff.src}
                      style={{ width: "100%", height: "420px" }}
                      top
                      className="p-4"
                    />
                    <CardBody className="mt--5">
                      <Row>
                        <Col align="center">
                          <h4 className="mt-3 mb-1">Name</h4>
                          <span className="text-md">{staff.name}</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col align="center">
                          <span className="text-md">{staff.position}</span>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Cordinator;
