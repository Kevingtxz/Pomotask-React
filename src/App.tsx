import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Layout/Header/Header";
import Footer from "./component/Layout/Footer/Footer";
import ErrorHandler from "./component/ErrorHandler/ErrorHandler";
import TimerPage from "./component/TimerPage/TimerPage/TimerPage";
import TaskPage from "./component/TaskPage/TaskPage/TaskPage";
import TaskForm from "./component/TaskForm/TaskForm";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<TimerPage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/tasks/form" element={<TaskForm />} />
            <Route path="*" element={<ErrorHandler />} />
          </Routes>
        </Provider>
      </main>
      <Footer />
    </Suspense>
  );
}
