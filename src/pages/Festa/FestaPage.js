import React from "react";
import FestaGridPage from "./FestaGridPage";
import Footer from "../../components/Footer";
import PagesNavbar from "../PagesNavbar";

export default function FestaPage() {
  return (
    <div>
      <PagesNavbar />
      <FestaGridPage />
      <Footer />
    </div>
  );
}
