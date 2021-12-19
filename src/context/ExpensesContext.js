import { createContext, useEffect, useState } from 'react'

const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  // Initialize expenses list
  const [expenses, setExpenses] = useState([])

  // initialize expense to edit
  const [expenseToEdit, setExpenseToEdit] = useState({
    expense: {},
    edit: false,
  })

  useEffect(() => {
    // Get all expenses data
    const fetchExpenses = async () => {
      const response = await fetch('/expenses.json')

      const data = await response.json()

      const expensesData = []

      for (const key in data) {
        const expense = {
          id: key,
          ...data[key],
        }

        expensesData.push(expense)
      }

      setExpenses(expensesData)
      setIsLoading(false)
    }

    fetchExpenses()
    console.log(`from ExpenseContext useEffect`)
  }, [])

  // Add expense
  const addExpense = async (expense) => {
    const response = await fetch('/expenses.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    })

    // returns only the unique key (id)
    const data = await response.json()

    const newExpense = {
      id: data.name,
      date: expense.date,
      item: expense.item,
      amount: expense.amount,
    }

    // console.log(newExpense)
    setExpenses([newExpense, ...expenses])
  }

  // Edit expense
  // Set the expense item to update and render to form
  // expense coming from the clicked edit icon
  const editExpense = (expense) => {
    setExpenseToEdit({ expense, edit: true })
  }

  // Update expense
  const updateExpense = async (id, updExpense) => {
    const response = await fetch(`/expenses/${id}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updExpense),
    })

    const data = await response.json()

    const newUpdExpense = {
      id: id,
      date: data.date,
      item: data.item,
      amount: data.amount,
    }

    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, ...newUpdExpense } : expense
      )
    )
  }

  const deleteExpense = async (id) => {
    if (window.confirm('Are you sure you want to delete an item?')) {
      await fetch(`/expenses/${id}.json`, {
        method: 'DELETE',
      })

      setExpenses(expenses.filter((expense) => expense.id !== id))
    }
  }

  // Currency Format Helper
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        expenseToEdit,
        isLoading,
        setExpenseToEdit,
        addExpense,
        editExpense,
        updateExpense,
        deleteExpense,
        currencyFormat,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContext
