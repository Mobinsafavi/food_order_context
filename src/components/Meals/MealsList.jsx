import React from "react";
import MealsItem from "./MealsItem";
import pizza from "../../assets/pizza.jpg";
import stromboli from "../../assets/stromboli.jpg";
import berger from "../../assets/berger.jpg";
import kfc from "../../assets/kfc.jpg";

const AvailableMeals = [
  {
    id: "1",
    name: "پیتزا پپرونی",
    description:
      "خمیر پیتزا کلاسیک ۲۳ سانتی متری، کالباس پپرونی، قارچ، فلفل هالوپینو، پنیر موزارلا",
    price: 116900,
    src: `${pizza}`,
  },
  {
    id: "2",
    name: "استرامبولی ژامبون پنیری",
    description:
      "ژامبون مرغ دودی، پپرونی، قارچ طعم دار شده، سس مخصوص، پنیر مخصوص، سیب زمینی سرخ شده",
    price: 107100,
    src: `${stromboli}`,
  },
  {
    id: "3",
    name: " چیز برگر",
    description: "همبرگر، پنیر دیپ گودا، گوجه، خیارشور، کاهو ،سس مخصوص",
    price: 89100,
    src: `${berger}`,
  },
  {
    id: "4",
    name: "چیکن استریپس",
    description:
      "۳ تکه فیله مرغ سوخاری، سس مخصوص، سالاد کلم، سیب زمینی، نان بروتچن",
    price: 154000,
    src: `${kfc}`,
  },
];

const MealsList = () => {
  return (
    <div className="shadow col-12 p-2 rounded bg-white">
      {AvailableMeals.map((item) => {
        return (
          <MealsItem
            key={item.id}
            Id={item.id}
            Name={item.name}
            Description={item.description}
            Price={item.price}
            Src={item.src}
          />
        );
      })}
    </div>
  );
};

export default MealsList;
