
function Form({ location, setLocation, activity, setActivity, budget, setBudget, getRecommendation }) {
  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="location">Location Preference:</label><br></br>
        <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="Mountains">Mountains</option>
          <option value="Beach">Beach</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="activity">Activity Preference:</label><br></br>
        <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="Adventure">Adventure</option>
          <option value="Relaxation">Relaxation</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget:</label><br></br>
        <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button onClick={getRecommendation} className="submit-button">
        Get Recommendation
      </button>
    </div>
  );
}

export default Form;
