import React from 'react';

function Recommendations({ recommendation }) {
  return (
    <div id="recommendation" className="recommendation-text">
      <h2>Recommendations:</h2>
      {recommendation.map((item, index) => (
        <p key={index}>- {item}</p>
      ))}
    </div>
  );
}

export default Recommendations;
