import { Card, Col, Row } from 'react-bootstrap'
import style from './ExpenseInfo.module.css'

function ExpenseInfo() {
  return (
    <>
      <Card className={`p-2 mt-3 ${style.bg}`}>
        <h4 className='to-upper mb-0'>Your Balance</h4>
        <h2 className='mb-0 text-info'>260.00</h2>
      </Card>

      <Row className='py-3'>
        <Col sm={6} className='mb-3 mb-sm-0'>
          <Card className='text-center p-3'>
            <h5 className='to-upper mb-0'>Income</h5>
            <h4 className='pb-0 text-success'>500.00</h4>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='text-center p-3'>
            <h5 className='to-upper mb-0'>Expense</h5>
            <h4 className='pb-0 text-danger'>240.00</h4>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ExpenseInfo
