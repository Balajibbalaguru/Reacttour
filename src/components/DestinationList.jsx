import React, { useState, useEffect } from 'react';
import "./destination.css"
function DestinationList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const destinationData = [
            { name: 'California', region: 'west', rating: '4', type: 'beach'},
            { name: 'Missouri', region: 'midwest', rating: '3', type: 'city' },
            { name: 'Arizona', region: 'west', rating: '4', type: 'desert' },
            { name: 'Pennsylvania', region: 'northeast', rating: '4', type: 'historical' },
            { name: 'Tennessee', region: 'south', rating: '4', type: 'music' },
            { name: 'Florida', region: 'south', rating: '5', type: 'beach' },
            { name: 'Indiana', region: 'midwest', rating: '3', type: 'city' },
            { name: 'Louisiana', region: 'south', rating: '4', type: 'cultural' },
            { name: 'Nevada', region: 'west', rating: '4', type: 'entertainment' },
            { name: 'Idaho', region: 'west', rating: '3', type: 'nature' },
            { name: 'Delaware', region: 'northeast', rating: '3', type: 'coastal' },
            { name: 'Illinois', region: 'midwest', rating: '4', type: 'city' },
            { name: 'New Jersey', region: 'northeast', rating: '4', type: 'coastal' },
            { name: 'North Carolina', region: 'south', rating: '4', type: 'mountain' },
            { name: 'Colorado', region: 'west', rating: '5', type: 'mountain' },
            { name: 'Washington', region: 'west', rating: '5', type: 'nature' },
            { name: 'Hawaii', region: 'west', rating: '5', type: 'beach' },
            { name: 'Utah', region: 'west', rating: '4', type: 'mountain' },
            { name: 'Texas', region: 'south', rating: '5', type: 'city' },
            { name: 'Montana', region: 'west', rating: '3', type: 'nature' },
            { name: 'Michigan', region: 'midwest', rating: '4', type: 'lake' },
            { name: 'South Dakota', region: 'midwest', rating: '3', type: 'nature' },
            { name: 'Massachusetts', region: 'northeast', rating: '4', type: 'historical' },
            { name: 'Vermont', region: 'northeast', rating: '3', type: 'nature' }
    ];
    setDestinations(destinationData);
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value.toLowerCase());
  const handleRegionChange = (e) => setRegionFilter(e.target.value);
  const handleRatingChange = (e) => setRatingFilter(e.target.value);
  const handleTypeChange = (e) => setTypeFilter(e.target.value.toLowerCase());

  const filterDestinations = () => {
    return destinations.filter((destination) => {
      const matchesRegion = !regionFilter || destination.region === regionFilter;
      const matchesRating = !ratingFilter || destination.rating === ratingFilter;
      const matchesType = !typeFilter || destination.type.includes(typeFilter);
      const matchesSearch = !searchQuery || destination.name.toLowerCase().includes(searchQuery);

      return matchesRegion && matchesRating && matchesType && matchesSearch;
    });
  };

  return (
    <div className="destinations">
      <h2>Destinations</h2>
      <div className="search-filters">
        <input id="search-bar" type="text" placeholder="Search..." onChange={handleSearchChange} />
        <div className="filters">
          <select id="region-filter" onChange={handleRegionChange}>
            <option value="">All Regions</option>
            <option value="west">West</option>
            <option value="midwest">Midwest</option>
            <option value="northeast">Northeast</option>
            <option value="south">South</option>
          </select>
          <select id="rating-filter" onChange={handleRatingChange}>
            <option value="">All Ratings</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select id="type-filter" onChange={handleTypeChange}>
            <option value="">All Types</option>
            <option value="beach">Beach</option>
            <option value="city">City</option>
            <option value="desert">Desert</option>
            <option value="historical">Historical</option>
            <option value="music">Music</option>
            <option value="cultural">Cultural</option>
            <option value="entertainment">Entertainment</option>
            <option value="nature">Nature</option>
            <option value="coastal">Coastal</option>
            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
          </select>
        </div>
      </div>
      <div className="destination-list">
        {filterDestinations().map((destination, index) => (
          <div key={index} className="destination-item" data-region={destination.region} data-rating={destination.rating} data-type={destination.type}>
            <img src={`images/${destination.name.toLowerCase().replace(/ /g, '_')}.jpg`} alt={destination.name} />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <p>{destination.type}</p>
              <div className="rating">{'⭐'.repeat(destination.rating)}</div>
              <button className="view-more">View More</button>
              <span className="favorite" onClick={(e) => e.target.classList.toggle('active')}>♡</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;
