import '../App.css'

export default function PaginationComponent({
  pages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            style={index === currentPage ? { backgroundColor: "gray" } : null}
            className="paginationButton"
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        )
      })}
    </div>
  )
}
