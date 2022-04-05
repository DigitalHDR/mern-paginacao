export default function PaginationSelector({ itensPerPage, setItensPerPage }) {
  return (
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
  )
}
