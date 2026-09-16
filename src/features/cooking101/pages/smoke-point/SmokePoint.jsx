import { useState } from "react";
import BackButton from "../../../../components/BackButton";
import { cookingFats } from "./SmokePointsData";
import FatExplorer from "./FatExplorer";
import SmokePointsExplanation from "./SmokePointExp";
import SafetyRules from "./SafetyRules";
import PagesHeader from "../PagesHeader";

export default function SmokePoints() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeOilIndex, setActiveOilIndex] = useState(0);

  const filteredFats = cookingFats.filter((fat) => {
    if (selectedCategory === "all") return true;
    return fat.category === selectedCategory;
  });

  const activeFat =
    filteredFats[activeOilIndex] || filteredFats[0] || cookingFats[0];

  return (
    <main className="space-y-12 p-4 md:p-8">
      <BackButton />
      {/* Page Header */}
      <PagesHeader
        category="Equipment & Basicss"
        title="Smoke Points"
        description="Select the right cooking fat for the right temperature to avoid bitter
          burnt flavors and harmful free radicals."
      />

      {/*Fat Explorer */}
      <FatExplorer
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setActiveOilIndex={setActiveOilIndex}
        filteredFats={filteredFats}
        activeFat={activeFat}
      />

      {/* Why Smoke Point Matters */}
      <SmokePointsExplanation />

      {/* Deep Frying & Oil Safety Rules */}
      <SafetyRules />
    </main>
  );
}
