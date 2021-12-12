import { useRef, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'

function NewExpense({ addExpenseHandler }) {
  const dateNow = () => {
    const d = new Date()
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  }

  const [validated, setValidated] = useState(false)
  const [currentDate, setCurrentDate] = useState(dateNow)

  const dateInputRef = useRef()
  const itemDescriptionInputRef = useRef()
  const amountInputRef = useRef()

  const addHandler = (e) => {
    e.preventDefault()

    const enteredDate = dateInputRef.current.value
    const enteredItemDescription = itemDescriptionInputRef.current.value
    const enteredAmount = amountInputRef.current.value

    if (
      enteredDate === '' ||
      enteredItemDescription === '' ||
      enteredAmount === ''
    ) {
      setValidated(true)
    } else {
      const expenseData = {
        date: enteredDate,
        item: enteredItemDescription,
        amount: parseFloat(enteredAmount),
      }

      addExpenseHandler(expenseData)

      // dateInputRef.current.value = ''
      itemDescriptionInputRef.current.value = ''
      amountInputRef.current.value = ''

      setCurrentDate(dateNow)
      setValidated(false)
    }
  }

  const dateChangeHandler = (e) => {
    setCurrentDate(e.target.value)
  }

  return (
    <section className='py-4'>
      <h4>Add New Expense</h4>

      <Form noValidate validated={validated}>
        <FloatingLabel controlId='floatingInput' label='Date' className='mb-3'>
          <Form.Control
            type='date'
            placeholder='Date'
            ref={dateInputRef}
            onChange={dateChangeHandler}
            value={currentDate}
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId='floatingInput'
          label='Item description'
          className='mb-3'
        >
          <Form.Control
            type='text'
            placeholder='Item Description'
            ref={itemDescriptionInputRef}
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId='floatingInput'
          label='Amount'
          className='mb-3'
        >
          <Form.Control
            type='number'
            placeholder='Amount'
            ref={amountInputRef}
            required
          />
        </FloatingLabel>

        <div className='d-grid'>
          <Button
            onClick={addHandler}
            variant='primary'
            type='submit'
            className='btn-block'
          >
            Add Expense
          </Button>
        </div>
      </Form>
    </section>
  )
}

export default NewExpense
