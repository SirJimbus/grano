import React from "react";
import BevandaGridPage from "./BevandaGridPage";
import Footer from "../../components/Footer";
import PagesNavbar from "../PagesNavbar";

export default function BevandaPage() {
  return (
    <div>
      <PagesNavbar />
      <BevandaGridPage />
      <Footer />
    </div>
  );
}
