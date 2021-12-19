import { createContext, useEffect, useState } from 'react'
import { db } from '../firebase-config'

import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  // Expenses collection reference from firebase
  const expensesCollectionRef = collection(db, 'expenses')

  // Initialize expenses list
  const [expenses, setExpenses] = useState([])

  // initialize expense to edit
  const [expenseToEdit, setExpenseToEdit] = useState({
    expense: {},
    edit: false,
  })

  useEffect(() => {
    // Get all expenses from firebase
    const fetchExpenses = async () => {
      const data = await getDocs(expensesCollectionRef)

      setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchExpenses()
  }, [expensesCollectionRef])

  // Add expense
  const addExpense = async (expense) => {
    const newExpense = {
      date: expense.date,
      item: expense.item,
      amount: expense.amount,
    }

    await addDoc(expensesCollectionRef, newExpense)
  }

  // Edit expense
  // Set the expense item to update and render to form
  // expense coming from the clicked edit icon
  const editExpense = (expense) => {
    setExpenseToEdit({ expense, edit: true })
  }

  // Update expense
  const updateExpense = async (id, updExpense) => {
    // Get the specific expense document from firebase
    const expenseDoc = doc(db, 'expenses', id)

    // Modify age with its new value
    const newUpdExpense = {
      date: updExpense.date,
      item: updExpense.item,
      amount: updExpense.amount,
    }

    await updateDoc(expenseDoc, newUpdExpense)
  }

  // Delete expense
  const deleteExpense = async (id) => {
    if (window.confirm('Are you sure you want to delete an item?')) {
      // Get the specific expense document from firebase
      const expenseDoc = doc(db, 'expenses', id)

      await deleteDoc(expenseDoc)
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
