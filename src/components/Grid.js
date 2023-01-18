import React from "react";
import { GridItem } from "./GridItem";

const GRID_DATA = [
  { title: "Salato", link: "/salato", image: "../../images/salato.png" },
  { title: "Dolce", link: "/dolce", image: "../../images/dolci.png" },
  {
    title: "Festività e Ricorrenze",
    link: "/festa",
    image: "../../images/dolci.png",
  },
  { title: "Bevande", link: "/bevande", image: "../../images/dolci.png" },
];

export default function Grid() {
  return (
    <div>
      <h1 className="grid-title">I nostri Prodotti</h1>
      <div className="grid" id="grid">
        {GRID_DATA.map((item) => (
          <GridItem title={item.title} link={item.link} image={item.image} />
        ))}
      </div>
    </div>
  );
}
