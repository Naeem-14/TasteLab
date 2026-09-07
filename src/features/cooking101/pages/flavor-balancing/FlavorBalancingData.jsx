export const flavorProfiles = [
  {
    name: "Acid / Sour",
    role: "Cuts through heaviness, brightens dull flavors, and activates saliva.",
    sources:
      "Lemon/Lime juice, Vinegars (Apple Cider, Red Wine, Balsamic), Wine, Tomatoes, Yogurt, Pickled elements.",
    pairsWith: "Fat, Salt, Sweetness",
    badge: "Brightener",
  },
  {
    name: "Salt",
    role: "Enhances natural flavors, suppresses bitterness, and draws out moisture.",
    sources:
      "Sea Salt, Kosher Salt, Soy Sauce, Miso, Hard Cheeses (Parmesan), Anchovies, Cured Meats.",
    pairsWith: "Acid, Sweetness, Umami",
    badge: "Enhancer",
  },
  {
    name: "Fat",
    role: "Carries flavor, coats the palate, softens harsh acidity, and provides richness.",
    sources:
      "Butter, Olive Oil, Heavy Cream, Avocados, Nuts, Egg Yolks, Fatty Meats.",
    pairsWith: "Acid, Heat/Spiciness, Bitter",
    badge: "Carrying Agent",
  },
  {
    name: "Sweetness",
    role: "Rounds out harsh edges, balances extreme heat/spiciness, and tames high acidity.",
    sources:
      "Honey, Maple Syrup, Brown Sugar, Caramelized Onions, Fruit Purées, Sweet Wines.",
    pairsWith: "Acid, Salt, Heat",
    badge: "Softener",
  },
  {
    name: "Umami (Savoriness)",
    role: "Provides depth, richness, and long-lasting savory satisfaction.",
    sources:
      "Soy Sauce, Fish Sauce, Dried Mushrooms, Tomato Paste, Aged Cheeses, Bone Broths.",
    pairsWith: "Salt, Acid, Bitterness",
    badge: "Depth Builder",
  },
  {
    name: "Bitterness",
    role: "Adds complexity, cuts through rich/fatty dishes, and prevents overall monotony.",
    sources:
      "Dark Leafy Greens (Kale, Radicchio), Dark Chocolate, Coffee, Citrus Zest, Beer.",
    pairsWith: "Sweetness, Fat, Salt",
    badge: "Complexity",
  },
];

export const flavorFixes = {
  salty: {
    title: "Dish is Too Salty",
    solutions: [
      {
        method: "Dilute the Dish",
        detail:
          "Add unsalted liquid (water, unsalted stock, cream, or milk) depending on the recipe base.",
      },
      {
        method: "Add Acid or Sweetness",
        detail:
          "A squeeze of fresh lemon juice or a pinch of sugar can distract the palate from excess salt.",
      },
      {
        method: "Introduce Starch",
        detail:
          "Add raw potato chunks, rice, or pasta to absorb salted liquid (remove potato before serving).",
      },
      {
        method: "Bulk Up Ingredients",
        detail:
          "Double the non-salted components (more unsalted veggies, proteins, or grains).",
      },
    ],
  },
  acidic: {
    title: "Dish is Too Sour / Acidic",
    solutions: [
      {
        method: "Add Sweetness",
        detail:
          "Stir in small amounts of honey, maple syrup, or sugar to neutralize sharp acid.",
      },
      {
        method: "Introduce Fat",
        detail:
          "Whisk in butter, cream, olive oil, or cheese to coat the mouth and soften acidity.",
      },
      {
        method: "Add a Pinch of Baking Soda",
        detail:
          "Use a tiny fraction of a teaspoon (1/8 tsp) in tomato sauces or stews to chemically neutralize excess acid.",
      },
    ],
  },
  spicy: {
    title: "Dish is Too Spicy / Hot",
    solutions: [
      {
        method: "Add Dairy or Fat",
        detail:
          "Casein in milk, sour cream, yogurt, or coconut cream binds to capsaicin and cools heat.",
      },
      {
        method: "Add Sweetness",
        detail:
          "Sugar, honey, or fruit purées reduce the perceived intensity of chili burn.",
      },
      {
        method: "Increase Acid",
        detail:
          "A dash of fresh lime juice or rice vinegar cuts through heavy chili oils.",
      },
    ],
  },
  sweet: {
    title: "Dish is Too Sweet",
    solutions: [
      {
        method: "Add Acid",
        detail:
          "Lemon/lime juice or vinegar provides immediate contrast to overly sweet dishes.",
      },
      {
        method: "Add Salt or Bitterness",
        detail:
          "A pinch of salt or bitter greens/herbs offsets excess sweetness.",
      },
      {
        method: "Add Heat",
        detail:
          "Chili flakes or hot sauce balance sweet glazes and rich sauces.",
      },
    ],
  },
  bitter: {
    title: "Dish is Too Bitter",
    solutions: [
      {
        method: "Add Salt",
        detail:
          "Salt naturally suppresses the tongue's perception of bitter compounds.",
      },
      {
        method: "Add Sweetness or Fat",
        detail:
          "A touch of honey or butter masks bitterness, making greens or sauces more palatable.",
      },
    ],
  },
};
