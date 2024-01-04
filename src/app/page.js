'use client'
import Navbar from './components/Navbar'
import Header from './components/Header'
import TodoProvider from './Context/TodoContext'
import TodoList from './components/Todolist'
import Todo from './components/Todo'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <TodoProvider>
        <Navbar/>
        <Header/>
        <Todo/>
        <TodoList/>
        <Footer/>
        </TodoProvider>
        
    </main>
  )
}
