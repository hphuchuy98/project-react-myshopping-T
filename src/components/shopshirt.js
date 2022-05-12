import React from "react";
import list from "../data";
import Cards from "../components/card";
import "../styles/shopshirt.css";

const Shopshirt = ({ handleClick }) => {
    return (
        <section>
          {list.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      );
    };

export default Shopshirt;