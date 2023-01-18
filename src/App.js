import React from "react";
import AppNavbar from "./components/AppNavbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Grid from "./components/Grid";
import Cover from "./components/Cover";
import Marche from "./components/Marche";

export default function App() {
  return (
    <div>
      <AppNavbar />
      <Cover />
      <Main />
      <Grid />
      <Marche />
      <Map />
      <Footer />
    </div>
  );
}
