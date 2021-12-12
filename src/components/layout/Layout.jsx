import { Col, Container, Row } from 'react-bootstrap'

function Layout(props) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <main>{props.children}</main>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
