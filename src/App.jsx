import './App.css'
import { useState, useEffect } from 'react'
import PaginationComponent from './components/PaginationComponent'
import PaginationSelector from './components/PaginationSelector'

export default function App() {
  const [itens, setItens] = useState([])
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
    // pega a api
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => data)
      setItens(result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    // faz a pagina sempre começar da 1
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <div className="App">
      <PaginationSelector
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
      />

      {currentItens.map((item) => (
        <div className="item" key={item.id}>
          <span>{item.id}</span>
          <span>{item.title} </span>
        </div>
      ))}

      <PaginationComponent
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
