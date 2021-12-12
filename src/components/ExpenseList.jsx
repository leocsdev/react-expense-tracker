import { ListGroup } from 'react-bootstrap'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses }) {
  // console.log(expenses)
  return (
    <section className='py-4'>
      <h4>Expense History</h4>
      <ListGroup>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ListGroup>
    </section>
  )
}

export default ExpenseList
