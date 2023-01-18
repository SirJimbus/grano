import React from "react";
import DolceGridPage from "./DolceGridPage";
import Footer from "../../components/Footer";
import PagesNavbar from "../PagesNavbar";

export default function DolcePage() {
  return (
    <div>
      <PagesNavbar />
      <DolceGridPage />
      <Footer />
    </div>
  );
}
