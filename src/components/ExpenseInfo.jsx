import { Card, Col, Row } from 'react-bootstrap'
// import style from './ExpenseInfo.module.css'

function ExpenseInfo() {
  return (
    <section className='pb-4'>
      <Card className='text-center py-3 mb-3'>
        <h4 className='to-upper mb-0'>Your Balance</h4>
        <h2 className='text-success mb-0'>260.00</h2>
      </Card>

      <Row className='text-center'>
        <Col sm={6} className='mb-3 mb-sm-0'>
          <Card className='p-3'>
            <h5 className='to-upper mb-0'>Income</h5>
            <h4 className='mb-0 text-warning'>500.00</h4>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='p-3'>
            <h5 className='to-upper mb-0'>Expense</h5>
            <h4 className='mb-0 text-danger'>240.00</h4>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default ExpenseInfo
