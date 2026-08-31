import { source, category, difficulty, clock } from "../../data/icons";

const tags = [
  {
    text: "source",
    logo: source,
    buttons: ["", "featured", "personal", "favorites"],
  },
  {
    text: "category",
    logo: category,
    buttons: ["", "breakfast", "main", "desserts", "drinks"],
  },
  {
    text: "difficulty",
    logo: difficulty,
    buttons: ["", "Easy", "Medium", "Hard"],
  },
  {
    text: "duration",
    logo: clock,
    buttons: [
      "",
      "under 15 minutes",
      "15-30 minutes",
      "30-45 minutes",
      "45+ minutes",
    ],
  },
];

export default tags;
