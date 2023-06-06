import React from 'react';

const ClothingSuggestions = ({ age, children }) => {
  // Example clothing suggestions based on age
  const clothingSuggestions = [
    { id: 1, category: 'Shirts', ageRange: '0-4 years', suggestions: ['T-shirts', 'Polo shirts', 'Button-down shirts'] },
    { id: 2, category: 'Pants', ageRange: '2-4 years', suggestions: ['Jeans', 'Chinos', 'Sweatpants'] },
    { id: 3, category: 'Shoes', ageRange: '2-4 years', suggestions: ['Sneakers', 'Sandals', 'Boots'] },
    // Add more clothing suggestions based on age
  ];

  // Filter clothing suggestions based on age
  const filteredSuggestions = clothingSuggestions.filter((suggestion) =>
    suggestion.ageRange.includes(age)
  );

  return (
    <div>
      <h2>Clothing Suggestions</h2>
      {filteredSuggestions.length > 0 ? (
        <div>
          {filteredSuggestions.map((suggestion) => (
            <div key={suggestion.id}>
              <h3>{suggestion.category}</h3>
              <ul>
                {suggestion.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No clothing suggestions available for the selected age range.</p>
      )}
      {children(filteredSuggestions)}
    </div>
  );
};

export default ClothingSuggestions;
