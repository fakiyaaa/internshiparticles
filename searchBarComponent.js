function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value.trim()); // Trigger search with trimmed input
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search articles by topic or interest..."
        className="search-input"
      />
    </div>
  );
}

function App() {
  const [filteredCards, setFilteredCards] = React.useState([]);

  React.useEffect(() => {
    const allCards = Array.from(document.querySelectorAll('.card-item'));
    setFilteredCards(allCards); // Set initial state to all cards
  }, []);

  const handleSearch = (query) => {
    const allCards = Array.from(document.querySelectorAll('.card-item'));

    // Filter cards matching the query
    const matchingCards = allCards.filter((card) =>
      card.innerText.toLowerCase().includes(query.toLowerCase())
    );

    // Show only matching cards, hide others
    allCards.forEach((card) => (card.style.display = 'none'));
    matchingCards.forEach((card) => (card.style.display = 'block'));

    // Update the state to re-render if needed
    setFilteredCards(matchingCards);
  };

  return <SearchBar onSearch={handleSearch} />;
}

// Render the React App
ReactDOM.render(<App />, document.getElementById('react-root'));