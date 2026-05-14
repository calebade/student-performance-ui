function PredictionCard({ result }) {

  return (

    <div className="prediction-card">

      <h2>Prediction Result</h2>

      <div className="prediction-grid">

        <div className="card-item">
          <span>Predicted Grade</span>
          <h3>{result.predicted_grade}</h3>
        </div>

        <div className="card-item">
          <span>Status</span>
          <h3>{result.pass_fail}</h3>
        </div>

        <div className="card-item">
          <span>Risk Level</span>
          <h3>{result.risk_level}</h3>
        </div>

        <div className="card-item">
          <span>Confidence</span>
          <h3>{result.confidence}%</h3>
        </div>

      </div>

    </div>

  );

}

export default PredictionCard;