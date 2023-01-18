import React from "react";
import { GridPageItem } from "../GridPageItem";

const FESTA_DATA = [
  {
    title: "Torta di compleanno",
    image: "../../images/salato.png",
    price: "€ 1.50",
  },
  { title: "Chiacchere", image: "../../images/salato.png", price: "€ 1.50" },
];

export default function FestaGridPage() {
  return (
    <div>
      <h1 className="grid-title">I nostri Prodotti</h1>
      <div className="grid" id="grid">
        {FESTA_DATA.map((item) => (
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
