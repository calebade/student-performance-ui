import { useEffect, useState } from "react";

import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function LecturerDashboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const response = await axios.get(
        "https://student-performance-api-kbp0.onrender.com/history"
      );

      setStudents(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const totalStudents = students.length;

  const passCount = students.filter(
    s => s.pass_fail === "Pass"
  ).length;

  const failCount = students.filter(
    s => s.pass_fail === "Fail"
  ).length;

  const highRiskCount = students.filter(
    s => s.risk_level === "High"
  ).length;

  const pieData = [
    {
      name: "Pass",
      value: passCount
    },
    {
      name: "Fail",
      value: failCount
    }
  ];

  const gradeCounts = {};

  students.forEach(student => {

    const grade = student.predicted_grade;

    gradeCounts[grade] =
      (gradeCounts[grade] || 0) + 1;

  });

  const gradeData = Object.entries(gradeCounts).map(
    ([grade, count]) => ({
      grade,
      count
    })
  );

  return (

    <div className="dashboard-container">

      <h1>Lecturer Analytics Dashboard</h1>

      <div className="summary-grid">

        <div className="summary-card">
          <h2>{totalStudents}</h2>
          <p>Total Students</p>
        </div>

        <div className="summary-card">
          <h2>{passCount}</h2>
          <p>Pass Count</p>
        </div>

        <div className="summary-card">
          <h2>{failCount}</h2>
          <p>Fail Count</p>
        </div>

        <div className="summary-card">
          <h2>{highRiskCount}</h2>
          <p>High Risk</p>
        </div>

      </div>

      <div className="charts-grid">

        <div className="chart-card">

          <h3>Pass vs Fail</h3>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >

                <Cell />

                <Cell />

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="chart-card">

          <h3>Grade Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={gradeData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="grade" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="count" />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="table-section">

        <h3>Prediction History</h3>

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>

                <th>ID</th>
                <th>Grade</th>
                <th>Status</th>
                <th>Risk</th>
                <th>Confidence</th>

              </tr>

            </thead>

            <tbody>

              {students.map(student => (

                <tr key={student.id}>

                  <td>{student.id}</td>

                  <td>{student.predicted_grade}</td>

                  <td>{student.pass_fail}</td>

                  <td>{student.risk_level}</td>

                  <td>{student.confidence}%</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default LecturerDashboard;