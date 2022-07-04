import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Layout/Header/Header";
import Footer from "./component/Layout/Footer/Footer";
import ErrorHandler from "./component/ErrorHandler/ErrorHandler";
import TimerPage from "./component/TimerPage/TimerPage/TimerPage";
import TaskPage from "./component/TaskPage/TaskPage/TaskPage";
import TaskProvider from "./store/task/TaskProvider";
import TimerProvider from "./store/timer/TimerProvider";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <TimerProvider>
          <TaskProvider>
            <Routes>
              <Route path="/" element={<TimerPage />} />
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="*" element={<ErrorHandler />} />
            </Routes>
          </TaskProvider>
        </TimerProvider>
      </main>
      <Footer />
    </Suspense>
  );
}
