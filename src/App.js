import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import ErrorHandler from "./component/ErrorHandler/ErrorHandler";

export default function Main() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<ErrorHandler />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}
