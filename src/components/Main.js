import React from "react";

export default function Main() {
  return (
    <div id="redirect-main">
      <h1 className="main-title">La nostra Storia</h1>
      <div id="main" className="main">
        <img
          className="main--francesca"
          src="../../images/francesca.png"
          alt="francesca"
        />
        <p className="main--p">
          Granò nasce nel Dicembre del 2019, da un'idea di Francesca,
          un'imprenditrice carrarina celiaca che, come molti altri, faticava sia
          nel trovare prodotti Gluten Free, che nel trovare un bar o un
          mini-market che le permetessero di consumare
        </p>
      </div>
    </div>
  );
}
