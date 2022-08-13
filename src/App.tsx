import { Suspense } from "react";
import Header from "./component/Layout/Header/Header";
import Footer from "./component/Layout/Footer/Footer";
import useLoad from "./hook/async/use-load";
import { Route, Routes } from "react-router-dom";
import TimerPage from "./component/TimerPage/TimerPage/TimerPage";
import TaskPage from "./component/TaskPage/TaskPage/TaskPage";
import TaskFormPage from "./component/TaskFormPage/TaskFormPage";
import ErrorHandler from "./component/ErrorHandler/ErrorHandler";
import useTimeEffect from "./hook/logic/use-time-effect";
import HistoryPage from "./component/HistoryPage/HistoryPage";
import StatusPage from "./component/StatusPage/StatusPage";

export default function App() {
  useLoad();
  useTimeEffect();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TimerPage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/history/" element={<HistoryPage />} />
          <Route path="/status/" element={<StatusPage />} />
          <Route path="/tasks/form/:taskId" element={<TaskFormPage />} />
          <Route path="/tasks/form/" element={<TaskFormPage />} />
          <Route path="*" element={<ErrorHandler />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}
