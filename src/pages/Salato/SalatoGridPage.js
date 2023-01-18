import React from "react";
import { GridPageItem } from "../GridPageItem";

const SALATO_DATA = [
  { title: "Pizza", image: "../../images/salato.png", price: "€ 1.50" },
  { title: "Valdostana", image: "../../images/salato.png", price: "€ 1.50" },
  { title: "Pane", image: "../../images/salato.png", price: "€ 1.50" },
  { title: "Focaccia", image: "../../images/salato.png", price: "€ 1.50" },
];

export default function SalatoGridPage() {
  return (
    <div>
      <h1 className="grid-title">I nostri Prodotti</h1>
      <div className="grid" id="grid">
        {SALATO_DATA.map((item) => (
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
