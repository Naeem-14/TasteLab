import data from "../../data/data";

export default function filterRecipes(activeTags) {
  const searchTerm = (activeTags.search || "").toLowerCase();
  const difficultyFilter = (activeTags.difficulty || "").toLowerCase();
  const categoryFilter = (activeTags.category || "").toLowerCase();
  const durationFilter = (activeTags.duration || "").toLowerCase();
  const sourceFilter = (activeTags.source || "").toLowerCase();

  return data.filter((recipe) => {
    const matchesSearch =
      recipe.foodName.toLowerCase().includes(searchTerm) ||
      recipe.madeByCreator.toLowerCase().includes(searchTerm);

    const matchesDifficulty = recipe.difficulty
      .toLowerCase()
      .includes(difficultyFilter);

    const matchesCategory = recipe.category
      .toLowerCase()
      .includes(categoryFilter);

    const matchesDuration = () => {
      if (!durationFilter) return true;

      switch (durationFilter) {
        case "under 15 minutes":
          return recipe.time <= 15;
        case "15-30 minutes":
          return recipe.time > 15 && recipe.time <= 30; // Proper boolean split
        case "30-45 minutes":
          return recipe.time > 30 && recipe.time <= 45; // Proper boolean split
        case "45+ minutes":
          return recipe.time >= 45; // Fixed threshold
        default:
          return true;
      }
    };

    const matchesSource = () => {
      if (!sourceFilter) return true;

      switch (sourceFilter) {
        case "featured":
          return recipe.origin === "featured";
        case "personal":
          return recipe.origin === "own";
        case "favorites":
          return recipe.isFavorite;
        default:
          return true;
      }
    };

    return (
      matchesSearch &&
      matchesDifficulty &&
      matchesCategory &&
      matchesDuration() &&
      matchesSource()
    );
  });
}
