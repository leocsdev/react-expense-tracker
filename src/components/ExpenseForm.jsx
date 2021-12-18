import { useRef, useState, useEffect, useContext } from 'react'
import ExpensesContext from '../context/ExpensesContext'

import { Button, FloatingLabel, Form } from 'react-bootstrap'

function ExpenseForm() {
  // Autofill date helper
  const dateNow = () => {
    const d = new Date()
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  }

  const [isValidated, setIsValidated] = useState(false)
  const [currentDate, setCurrentDate] = useState(dateNow)

  const { addExpense, updateExpense, expenseToEdit, setExpenseToEdit } =
    useContext(ExpensesContext)

  const dateInputRef = useRef()
  const itemDescriptionInputRef = useRef()
  const amountInputRef = useRef()

  // Fill out form with selected expense itme when edit icon is clicked
  useEffect(() => {
    if (expenseToEdit.edit === true) {
      dateInputRef.current.value = expenseToEdit.expense.date
      itemDescriptionInputRef.current.value = expenseToEdit.expense.item
      amountInputRef.current.value = expenseToEdit.expense.amount
    }
  }, [expenseToEdit])

  const handleSubmit = (e) => {
    e.preventDefault()

    const enteredDate = dateInputRef.current.value
    const enteredItemDescription = itemDescriptionInputRef.current.value
    const enteredAmount = amountInputRef.current.value

    // Refactored, Courtesy of sir Jami
    // If any of the form fields are empty, do not save the item
    if ([enteredDate, enteredItemDescription, enteredAmount].includes('')) {
      setIsValidated(true)
    } else {
      const newExpense = {
        date: enteredDate,
        item: enteredItemDescription,
        amount: parseFloat(enteredAmount),
      }

      // If edit icon is clicked, do the update
      if (expenseToEdit.edit === true) {
        updateExpense(expenseToEdit.expense.id, newExpense)

        // Disable edit after update
        setExpenseToEdit((expenseToEdit.edit = false))
      } else {
        // Add expense item
        addExpense(newExpense)
      }

      // Reset form after add or update
      itemDescriptionInputRef.current.value = ''
      amountInputRef.current.value = ''
      setCurrentDate(dateNow)
      setIsValidated(false)
    }
  }

  const dateChangeHandler = (e) => {
    setCurrentDate(e.target.value)
  }

  return (
    <section className='py-4'>
      <h4>Add New Expense</h4>

      <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
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
            // onClick={addHandler}
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

export default ExpenseForm
