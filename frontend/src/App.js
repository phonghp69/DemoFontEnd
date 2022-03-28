import Topbar from "./Layouts/Topbar/Topbar";
import Leftbar from "./Layouts/Leftbar/Leftbar";
import Main from "./Layouts/Main/Main";
import { Grid } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Topbar />

      <Grid container>
        <Grid item xs={3}>
          <Leftbar />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            backgroundColor: "#d3d3d3",
          }}
        >
          <Main />
         
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Grid>
        
      </Grid>

    </div>
  );
}

export default App;
