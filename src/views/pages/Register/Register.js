import React from "react";

//import reactstrap
import {
  Card,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Button,
  Form,
  CardFooter,
} from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import css file
import "./styles.css";
import { addStudents } from "api/Register";

function Register() {
  const [studentData, setStudentData] = React.useState({
    first_name: "",
    last_name: "",
    enrollment_no: "",
    email: "",
    college: "",
    branch: "",
    section: "",
    language: "",
    contact_no: "",
    transaction_date: "",
    transaction_time: "",
    transaction_id: "",
  });

  const handleChange = (name) => (event) => {
    setStudentData({ ...studentData, [name]: event.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const register = await addStudents(studentData);
      if (register.keyValue === undefined) {
        toast.success("Registration Successfull");
      } else {
        return toast.error("This email is already taken");
      }
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <>
      <SimpleHeader name="Register" />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Container className="mt--6" fluid>
        <Card>
          <Form onSubmit={handleSubmitForm}>
            <CardBody>
              <Row>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="example4cols2Input"
                  >
                    First Name
                  </label>
                  <Input
                    id="example4cols2Input"
                    placeholder="First Name"
                    type="text"
                    onChange={handleChange("first_name")}
                    value={studentData.first_name}
                    required
                  />
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example4cols2Input"
                    >
                      Last Name
                    </label>
                    <Input
                      id="example4cols2Input"
                      placeholder="Last Name"
                      type="text"
                      onChange={handleChange("last_name")}
                      value={studentData.last_name}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example4cols2Input"
                    >
                      Enrollment Number
                    </label>
                    <Input
                      id="example4cols2Input"
                      placeholder="Enrollment Number"
                      type="text"
                      onChange={handleChange("enrollment_no")}
                      value={studentData.enrollment_no}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlSelect3"
                  >
                    Select College
                  </label>
                  <Input
                    id="exampleFormControlSelect3"
                    type="select"
                    onChange={handleChange("college")}
                    value={studentData.college}
                    required
                  >
                    <option value="" disabled selected>
                      Select College
                    </option>
                    <option>
                      Sushila Devi Bansal College of Technology, Indore
                    </option>{" "}
                    <option>
                      Sushila Devi Bansal College of Engineering, Indore
                    </option>
                    <option>
                      Bansal Institute of Science & Technology, Bhopal
                    </option>
                    <option>
                      Bansal Institute of Research & Technology, Bhopal
                    </option>
                    <option>
                      Bansal Institute of Research & Technology Science, Bhopal
                    </option>
                    <option>Bansal College of Engineering, Mandideep</option>
                  </Input>
                </Col>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlSelect3"
                  >
                    Select Branch
                  </label>
                  <Input
                    id="exampleFormControlSelect3"
                    type="select"
                    onChange={handleChange("branch")}
                    value={studentData.branch}
                    required
                  >
                    <option value="" disabled selected>
                      Select Branch
                    </option>
                    <option>CS</option>
                    <option>IT</option>
                    <option>Mechanical</option>
                    <option>Civil</option>
                    <option>EC</option>
                    <option>Others</option>
                  </Input>
                </Col>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlSelect3"
                  >
                    Select Year
                  </label>
                  <Input
                    id="exampleFormControlSelect3"
                    type="select"
                    onChange={handleChange("year")}
                    value={studentData.year}
                    required
                  >
                    <option value="" disabled selected>
                      Select Year
                    </option>
                    <option>1st year</option>
                    <option>2nd year</option>
                    <option>3rd year</option>
                    <option>4th year</option>
                  </Input>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlSelect3"
                  >
                    Select Section
                  </label>
                  <Input
                    id="exampleFormControlSelect3"
                    type="select"
                    onChange={handleChange("section")}
                    value={studentData.section}
                    required
                  >
                    <option value="" disabled selected>
                      Select Section
                    </option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>other</option>
                  </Input>
                </Col>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="example4cols2Input"
                  >
                    Email
                  </label>
                  <Input
                    id="example4cols2Input"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange("email")}
                    value={studentData.email}
                    required
                  />
                </Col>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="example4cols2Input"
                  >
                    Contact Number
                  </label>
                  <Input
                    id="example4cols2Input"
                    placeholder="Contact Number"
                    type="Number"
                    onChange={handleChange("contact_no")}
                    value={studentData.contact_no}
                    required
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <label
                    className="form-control-label"
                    htmlFor="exampleFormControlSelect3"
                  >
                    Select Language
                  </label>
                  <Input
                    id="exampleFormControlSelect3"
                    type="select"
                    onChange={handleChange("language")}
                    value={studentData.language}
                    required
                  >
                    <option value="" disabled selected>
                      Select Language
                    </option>
                    <option>C</option>
                    <option>C++</option>
                    <option>Java</option>
                  </Input>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="example4cols2Input"
                  >
                    Transaction Date
                  </label>
                  <Input
                    id="example4cols2Input"
                    type="Date"
                    onChange={handleChange("transaction_date")}
                    value={studentData.transaction_date}
                    required
                  />
                </Col>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="example4cols2Input"
                  >
                    Transaction Time
                  </label>
                  <Input
                    id="example4cols2Input"
                    type="time"
                    onChange={handleChange("transaction_time")}
                    value={studentData.transaction_time}
                    required
                  />
                </Col>
                <Col md="4">
                  <label
                    className="form-control-label"
                    htmlFor="example4cols2Input"
                  >
                    TransactionID/ReferenceID
                  </label>
                  <Input
                    id="example4cols2Input"
                    placeholder="Transaction ID"
                    type="text"
                    onChange={handleChange("transaction_id")}
                    value={studentData.transaction_id}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mt-4 ml--4">
                  <label
                    className="form-control-label ml-4"
                    htmlFor="example4cols2Input"
                  >
                    Scan&Pay
                  </label>
                  <br />
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src={process.env.PUBLIC_URL + "/IMG-20220416-WA0001.jpg"}
                  />
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <h3>
                Please check TransactionID/ReferenceID on Payment Receipt.
              </h3>
              <h3>Please check your email for further process.</h3>
              <h3>Registration fees will be 100 Rupees only.</h3>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Register;
