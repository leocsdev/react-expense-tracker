import { Col, Container, Row } from 'react-bootstrap'

import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Header />

          <main> {props.children}</main>

          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
