import { useState } from "react";

import axios from "axios";

import ShapChart from "../components/ShapChart";
import PerformanceChart from "../components/PerformanceChart";
import PredictionCard from "../components/PredictionCard";
import RiskBadge from "../components/RiskBadge";
import FactorBar from "../components/FactorBar";
import Loader from "../components/Loader";

function StudentPage() {

  const [formData, setFormData] = useState({
    CA1: "",
    CA2: "",
    Assignment: "",
    Mid_Semester_Exam: "",
    Attendance_Percent: ""
  });

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setResult(null);

    try {

      const payload = {
        CA1: Number(formData.CA1),
        CA2: Number(formData.CA2),
        Assignment: Number(formData.Assignment),
        Mid_Semester_Exam: Number(formData.Mid_Semester_Exam),
        "Attendance_%": Number(formData.Attendance_Percent)
      };

      const response = await axios.post(
        "https://student-performance-api-kbp0.onrender.com",
        payload
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert("Prediction failed");

    }

    setLoading(false);

  };

  return (

    <div className="app">

      <div className="main-card">

        <h1>AI Student Performance Predictor</h1>

        <p className="subtitle">
          Predict academic outcomes using machine learning
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-grid">

            <input
              type="number"
              name="CA1"
              placeholder="CA1"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="CA2"
              placeholder="CA2"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="Assignment"
              placeholder="Assignment"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="Mid_Semester_Exam"
              placeholder="Midterm"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="Attendance_Percent"
              placeholder="Attendance %"
              onChange={handleChange}
              required
            />

          </div>

          <button type="submit">

            Predict Performance

          </button>

        </form>

        {loading && <Loader />}

        {result && (

          <div className="results-section">

            <PredictionCard result={result} />

            <div className="risk-section">

              <h3>Risk Indicator</h3>

              <RiskBadge level={result.risk_level} />

            </div>

            <div className="factors-section">

              <h3>Top Influencing Factors</h3>

              {result.top_factors.map((factor, index) => (

                <FactorBar
                  key={index}
                  factor={factor}
                  index={index}
                />

              ))}

            </div>

            <ShapChart importance={result.feature_importance} />
            
            <PerformanceChart formData={formData} />

          </div>

        )}

      </div>

    </div>

  );

}

export default StudentPage;