import { useContext } from 'react'
import ExpensesContext from '../context/ExpensesContext'

import { ListGroup } from 'react-bootstrap'
import ExpenseItem from './ExpenseItem'
import Spinner from './shared/Spinner'

function ExpenseList() {
  const { expenses, isLoading } = useContext(ExpensesContext)

  if (isLoading) {
    return <Spinner />
  } else {
    if (expenses.length === 0) {
      return <h4 className='text-center'>No items yet.</h4>
    } else {
      return (
        <>
          <h4>Expense History</h4>
          <ListGroup>
            {expenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </ListGroup>
        </>
      )
    }
  }
}

export default ExpenseList
