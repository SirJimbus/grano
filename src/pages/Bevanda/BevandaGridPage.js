import React from "react";
import { GridPageItem } from "../GridPageItem";

const BIRRA_DATA = [
  {
    title: "Birra Daura",
    image: "../../images/salato.png",
    price: "€ 1.50",
  },
  { title: "Birra Peroni", image: "../../images/salato.png", price: "€ 1.50" },
];

export default function BevandaGridPage() {
  return (
    <div>
      <h1 className="grid-title">I nostri Prodotti</h1>
      <div className="grid" id="grid">
        {BIRRA_DATA.map((item) => (
          <GridPageItem
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
