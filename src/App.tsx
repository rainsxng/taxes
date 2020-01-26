import React from 'react';
import Login from "./pages/Login/Login";
import './App.css';
import { Grid, Container } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <>
       <Container maxWidth="sm" style={{ textAlign: "center", position: "absolute", top: "50%" }}>
            <Login />
        </Container>
    </>
  );
}

export default App;
