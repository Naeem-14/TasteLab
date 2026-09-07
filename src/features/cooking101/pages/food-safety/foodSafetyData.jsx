export const proteins = [
    {
      name: "Poultry (Chicken, Turkey)",
      tempF: 165,
      tempC: 74,
      restTime: "8-10 mins",
      note: "Includes whole, ground, or parts. No pink juice should remain.",
      badge: "High Risk",
    },
    {
      name: "Ground Meats (Beef, Pork, Lamb)",
      tempF: 160,
      tempC: 71,
      restTime: "3-5 mins",
      note: "Ground meat distributes surface bacteria throughout the meat.",
      badge: "Medium Risk",
    },
    {
      name: "Beef, Pork, Veal, Lamb (Steaks & Roasts)",
      tempF: 145,
      tempC: 63,
      restTime: "3 mins minimum",
      note: "Resting allows temperature to stabilize and juices to redistribute.",
      badge: "Safe at 145°F",
    },
    {
      name: "Fish & Finfish",
      tempF: 145,
      tempC: 63,
      restTime: "None required",
      note: "Flesh should turn opaque and flake easily with a fork.",
      badge: "Safe at 145°F",
    },
  ];

export  const cuttingBoards = [
    {
      color: "bg-red-500",
      border: "border-red-200",
      lightBg: "bg-red-50",
      label: "Red Board",
      usage: "Raw Red Meat & Poultry",
      tips: "Keep separate from all ready-to-eat foods. Wash & sanitize immediately.",
    },
    {
      color: "bg-emerald-500",
      border: "border-emerald-200",
      lightBg: "bg-emerald-50",
      label: "Green Board",
      usage: "Fruits & Vegetables",
      tips: "Prep produce before raw meats to prevent cross-contamination.",
    },
    {
      color: "bg-amber-500",
      border: "border-amber-200",
      lightBg: "bg-amber-50",
      label: "Yellow Board",
      usage: "Cooked Meats & Bread",
      tips: "Use only for items that will not undergo further high-heat cooking.",
    },
    {
      color: "bg-blue-500",
      border: "border-blue-200",
      lightBg: "bg-blue-50",
      label: "Blue Board",
      usage: "Seafood & Fish",
      tips: "Isolate seafood allergens and prevent fish odors on other ingredients.",
    },
  ];