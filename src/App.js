import React, { useState } from 'react';
import AgeInput from './Components/AgeInput';
import ClothingSuggestions from './Components/ClothingSuggestions';
import ClothingItem from './Components/ClothingItem';
import Button from './Components/Button';
import './App.css';

const App = () => {
  const [age, setAge] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleAgeChange = (newAge) => {
    setAge(parseInt(newAge, 10));
  };

  const handleButtonClick = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="App">
      <h1>Clothing Recommendation App</h1>
      <AgeInput age={age} onChange={handleAgeChange} />
      <Button onClick={handleButtonClick}>Show Clothing Suggestions</Button>
      {showSuggestions && (
        <ClothingSuggestions age={age}>
          {(items) => (
            <div className="clothing-items">
              {items.map((item, index) => (
                <ClothingItem key={index} item={item} />
              ))}
            </div>
          )}
        </ClothingSuggestions>
      )}
    </div>
  );
};

export default App;
