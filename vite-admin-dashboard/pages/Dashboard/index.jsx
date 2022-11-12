import Breadcrumb from "../../src/components/Common/Breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CardComp from "./CardComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const reports = [
    {
      title: "Orders",
      iconCLass: "fa-bag-shopping",
      description: "1,234",
      percent: "+20",
    },
    {
      title: "Revenue",
      iconCLass: "fa-bag-shopping",
      description: "1,234",
      percent: "+20",
    },
    {
      title: "Shopping",
      iconCLass: "fa-bag-shopping",
      description: "1,234",
      percent: "+20",
    },
  ];
  return (
    <>
      <Container fluid>
        <Breadcrumb title="admin" breadcrumbItem="Dashboard"></Breadcrumb>
        <Row>
          <Col xl="4">
            <CardComp />
          </Col>
          <Col xl="8">
            <Row>
              {reports.map((report, key) => {
                return (
                  <Col md="4" key={"_col_" + key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              {report.title}
                            </p>
                            <h4 className="mb-0">{report.description}</h4>
                            <div className="icon-sm rounded-circle bg-primary align-self-center mini-stat-icon"></div>
                            <span className="icon-container rounded-circle bg-primary">
                              <FontAwesomeIcon
                                icon={`fa-solid ${report.iconCLass}`}
                              />
                            </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
