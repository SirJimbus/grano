import React from "react";
import SalatoGridPage from "./SalatoGridPage";
import Footer from "../../components/Footer";
import PagesNavbar from "../PagesNavbar";

export default function SalatoPage() {
  return (
    <div>
      <PagesNavbar />
      <SalatoGridPage />
      <Footer />
    </div>
  );
}
