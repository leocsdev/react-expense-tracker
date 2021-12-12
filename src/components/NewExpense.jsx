import { Button, FloatingLabel, Form } from 'react-bootstrap'

function NewExpense() {
  return (
    <section className='py-4'>
      <h4>Add New Expense</h4>

      <Form>
        <FloatingLabel controlId='floatingInput' label='Date' className='mb-3'>
          <Form.Control type='date' placeholder='Date' />
        </FloatingLabel>

        <FloatingLabel
          controlId='floatingInput'
          label='Item description'
          className='mb-3'
        >
          <Form.Control type='text' placeholder='Item Description' />
        </FloatingLabel>

        <FloatingLabel
          controlId='floatingInput'
          label='Amount'
          className='mb-3'
        >
          <Form.Control type='number' placeholder='Amount' />
        </FloatingLabel>

        <div className='d-grid'>
          <Button variant='primary' type='submit' className='btn-block'>
            Add Expense
          </Button>
        </div>
      </Form>
    </section>
  )
}

export default NewExpense
