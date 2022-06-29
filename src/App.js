import Header from "./component/layout/Header/Header";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes></Routes>
        </Suspense>
      </Router>
    </>
  );
}
