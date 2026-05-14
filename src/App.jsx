import { useState } from "react";

import StudentPage from "./pages/StudentPage";

import LecturerDashboard from "./pages/LecturerDashboard";

function App() {

  const [view, setView] = useState("student");

  return (

    <div>

      <div className="nav-bar">

        <button
          onClick={() => setView("student")}
        >
          Student View
        </button>

        <button
          onClick={() => setView("lecturer")}
        >
          Lecturer Dashboard
        </button>

      </div>

      {

        view === "student"
        ? <StudentPage />
        : <LecturerDashboard />

      }

    </div>

  );

}

export default App;