import { source, category, difficulty, clock } from "../../data/icons";

const tags = [
  {
    logo: source,
    text: "source",
    buttons: ["all", "featured", "personal", "favorites"],
  },
  {
    logo: category,
    text: "category",
    buttons: ["all", "breakfast", "main", "desserts", "drinks"],
  },
  {
    logo: difficulty,
    text: "difficulty",
    buttons: ["all", "easy", "medium", "hard"],
  },
  {
    logo: clock,
    text: "duration",
    buttons: [
      "all",
      "under 15 minutes",
      "15-30 minutes",
      "30-45 minutes",
      "45+ minutes",
    ],
  },
];

export default tags;
