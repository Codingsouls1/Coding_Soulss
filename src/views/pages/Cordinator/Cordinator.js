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
      height: "450px",
    },
    {
      key: 2,
      name: "Prof. Atul Agarwal",
      postion: "Faculty Coordinator",
      src: `${process.env.PUBLIC_URL + "/Mr. Atul Agrawal.JPG"}`,
      height: "425px",
    },
    {
      key: 3,
      name: "Prof. Sonal Yadav",
      src: `${process.env.PUBLIC_URL + "/Sonal Yadav.jpeg"}`,
      height: "450px",
    },
    {
      key: 4,
      name: "Prof. Nandini Sharma",
      src: `${
        process.env.PUBLIC_URL +
        "/WhatsApp Image 2022-04-16 at 11.50.41 AM.jpeg"
      }`,
      height: "450px",
    },
    {
      key: 11,
      name: "Prof. Jagriti Singh",
      src: `${process.env.PUBLIC_URL + "/Ms. Jagriti Singh.JPG"}`,
      height: "450px",
    },
    {
      key: 5,
      name: "Mr. Anmol Agarwal",
      postion: "Student Coordinartor",
      src: `${
        process.env.PUBLIC_URL +
        "/WhatsApp Image 2022-04-16 at 11.45.31 AM.jpeg"
      }`,
      height: "425px",
    },
    {
      key: 7,
      name: "Mr. Sanket Patil",
      src: `${
        process.env.PUBLIC_URL +
        "/WhatsApp Image 2022-04-16 at 11.45.30 AM.jpeg"
      }`,
      height: "450px",
    },
    {
      key: 6,
      name: "Mr. Chinmay Raiker",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      height: "450px",
    },

    {
      key: 8,
      name: "Mr. Rohit Anjan",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      height: "450px",
    },
    {
      key: 9,
      name: "Mr. Tanuj Singh Bhadoria",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      height: "450px",
    },
    {
      key: 10,
      name: "Mr. Shilpi Sonone",
      src: `${
        process.env.PUBLIC_URL + "/8b167af653c2399dd93b952a48740620.jpg"
      }`,
      height: "450px",
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
                      style={{ width: "100%", height: staff.height }}
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
                          <span className="text-md">{staff.postion}</span>
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
