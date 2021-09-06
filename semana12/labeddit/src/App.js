import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import FeedPage from "./pages/FeedPage"
import LoginPage from "./pages/LoginPage"
import PostPage from "./pages/PostPage"
import SignUpPage from "./pages/SignUpPage"

const GlobalStyle = createGlobalStyle`
  padding:0;
  margin:0;
  box-sizing: border-box;
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact patch={"/"}>
          <FeedPage />
        </Route>
        <Route exact patch={"/login"}>
          <LoginPage />
        </Route>
        <Route exact patch={"/post/:id"}>
          <PostPage />
        </Route>
        <Route exact patch={"/signup"}>
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
