import Breadcrumb  from "../../src/components/Common/Breadcrumb"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import CardComp from "./CardComp"

const Dashboard = () => {
    return (
        <>
            <Container fluid>
                <Breadcrumb
                    title="admin"
                    breadcrumbItem ="Dashboard"

                ></Breadcrumb>
                <Row>
                    <Col xl="4">
                        <CardComp />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard