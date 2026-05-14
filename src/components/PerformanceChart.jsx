import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function PerformanceChart({ formData }) {

  const data = [
    {
      name: "CA1",
      score: Number(formData.CA1)
    },
    {
      name: "CA2",
      score: Number(formData.CA2)
    },
    {
      name: "Assignment",
      score: Number(formData.Assignment)
    },
    {
      name: "Midterm",
      score: Number(formData.Mid_Semester_Exam)
    },
    {
      name: "Attendance",
      score: Number(formData.Attendance_Percent)
    }
  ];

  return (

    <div className="chart-card">

      <h3>Performance Breakdown</h3>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="score" />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default PerformanceChart;