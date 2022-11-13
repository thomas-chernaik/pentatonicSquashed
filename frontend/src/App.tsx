import React from "react";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import theme from "./theme/theme";
import TestConditionProvider from "./test/TestConditionProvider";
import HomePage from "./Pages/HomePage";
import DecksPage from "./Pages/DecksPage";
import DeckPage from "./Pages/DeckPage";
import FullScreenCardPage from "./Pages/FullScreenCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/deck",
    element: <DecksPage />
  },
  {
    path: "/deck/:deckId",
    element: <></>
  },
  {
    path: "/deck/:deckId/card",
    element: <DeckPage />
  },
  {
    path: "/deck/:deckId/card/:cardId",
    element: <FullScreenCardPage/>
  }
]);

const testing = true;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TestConditionProvider test={testing}>
        <RouterProvider router={router}/>
      </TestConditionProvider>
    </ThemeProvider>
  );
}

export default App;
