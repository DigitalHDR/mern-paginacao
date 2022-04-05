import './App.css'
import { useState, useEffect } from 'react'

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
      <div>
        <select
          value={itensPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>

      {currentItens.map((item) => (
        <div className="item" key={item.id}>
          <span>{item.id}</span>
          <span>{item.title} </span>
        </div>
      ))}

      <div>
        {Array.from(Array(pages), (item, index) => (
          <button
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(e.target.value)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
