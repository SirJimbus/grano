import React from "react";
import { GridPageItem } from "../GridPageItem";

const DOLCE_DATA = [
  { title: "Brioche", image: "../../images/salato.png", price: "€ 1.50" },
  { title: "Bombolone", image: "../../images/salato.png", price: "€ 1.50" },
  { title: "Cannolo", image: "../../images/salato.png", price: "€ 1.50" },
  { title: "Budino", image: "../../images/salato.png", price: "€ 1.50" },
];

export default function DolceGridPage() {
  return (
    <div>
      <h1 className="grid-title">I nostri Prodotti</h1>
      <div className="grid" id="grid">
        {DOLCE_DATA.map((item) => (
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
