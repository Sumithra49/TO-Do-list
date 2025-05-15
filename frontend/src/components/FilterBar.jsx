const FilterBar = ({ filter, setFilter }) => {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? 'active' : ''}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
