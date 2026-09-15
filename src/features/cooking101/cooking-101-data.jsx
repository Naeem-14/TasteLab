import { utilities, utensils, pot } from "../../data/icons";

const cooking101Data = [
  {
    category: {
      icon: utilities,
      text: "Utilities",
    },
    pages: [
      {
        title: "Temperature",
        description:
          "Convert effortlessly temperatures for seamless oven prep.",
        image: "../../assets/temperature.jpg",
        path: "/temperature-converter",
      },

      {
        title: "Volume",
        description:
          "Quickly convert liquid and dry measures from milliliters to cups and spoons.",
        image: "../../assets/volume.jpg",
        path: "/volume-converter",
      },
      {
        title: "Weight",
        description: "Translate weights for accurate baking and portioning.",
        image: "../../assets/weight.jpg",
        path: "/weight-converter",
      },
    ],
  },
  {
    category: {
      icon: utensils,
      text: "Culinary Skills",
    },
    pages: [
      {
        title: "Knife Skills & Cuts",
        description:
          "Master foundational cutting techniques, hand positioning, and uniform prep size.",
        image: "../../assets/knife-skills.jpg",
        path: "/knife-skills-and-cuts",
      },
      {
        title: "Food Safety & Prep",
        description:
          "Essential safe internal cooking temperatures and hygienic food thawing methods.",
        image: "../../assets/food-safety.jpg",
        path: "/food-safety-and-prep",
      },
      {
        title: "Flavor Balancing",
        description:
          "Troubleshoot seasonings by balancing acid, salt, fat, and heat in any dish.",
        image: "../../assets/flavor-balancing.jpg",
        path: "/flavor-balancing",
      },
    ],
  },
  {
    category: {
      icon: pot,
      text: "Equipment & Basics",
    },
    pages: [
      {
        title: "Smoke Points",
        description:
          "Match cooking oils to proper heat thresholds to prevent burnt flavors.",
        image: "../../assets/smoke-points.jpg",
        path: "/smoke-points",
      },
      {
        title: "Pantry Staples Guide",
        description:
          "Must-have long-lasting ingredients to build quick, versatile meals anytime.",
        image: "../../assets/pantry-staple.jpg",
        path: "/pantry-staples-guide",
      },
      {
        title: "Basic Sauces",
        description:
          "Learn some basic sauces and simple ratios to elevate any plate.",
        image: "../../assets/basic-sauces.jpg",
        path: "/basic-sauces",
      },
    ],
  },
];

export default cooking101Data;
