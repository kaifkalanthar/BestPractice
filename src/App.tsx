import { useState } from 'react'
import './App.css'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'


function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 23, category: "Utilities" },
    { id: 2, description: "bba", amount: 34, category: "Entertainment" },
    { id: 3, description: "vva", amount: 244, category: "Utilities" },
  ])


  const visibleCategory = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;
  return (
    <>
      <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      <ExpenseFilter onSelectedCategory={(category) => setSelectedCategory(category)} />
      <ExpenseTable
        expenses={visibleCategory}
        onDelete={() => console.log("deleted")}
      />
    </>
  )
}

export default App
