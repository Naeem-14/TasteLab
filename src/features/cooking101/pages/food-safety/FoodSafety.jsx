import { useState } from "react";
import BackButton from "../../../../components/BackButton";
import { proteins, cuttingBoards } from "./foodSafetyData";
import TemperatureGauge from "./TemperatureGauge";
import CalculatorAndDanger from "./CalculatorAndDanger";
import CuttingBoards from "./CuttingBoards";
import PagesHeader from "../PagesHeader";

export default function FoodSafetyAndPrep() {
  // Pure JavaScript State
  const [selectedProteinIndex, setSelectedProteinIndex] = useState(0);
  const [weight, setWeight] = useState(3);
  const [thawMethod, setThawMethod] = useState("fridge");

  function calculateThawTime() {
    if (thawMethod === "fridge") {
      const days = (weight / 5).toFixed(1);
      return `~${days} Days in Refrigerator (at 40°F / 4°C or below)`;
    } else {
      const totalMinutes = weight * 30;
      const hours = Math.floor(totalMinutes / 60);
      const mins = totalMinutes % 60;
      if (hours === 0) {
        return `~${mins} Minutes in Cold Water (change water every 30 mins)`;
      }
      return `~${hours} hr ${mins > 0 ? `${mins} mins` : ""} in Cold Water (change water every 30 mins)`;
    }
  }

  const currentProtein = proteins[selectedProteinIndex];

  return (
    <main className="mx-auto max-w-7xl space-y-12 p-4 md:p-8">
      <BackButton />
      {/* Header */}
      <PagesHeader
        category="Culinary Skills"
        title="Food Safety & Prep"
        description="Interactive tools and guidelines to ensure safe handling, optimal
          internal temperatures, and clean prep workflows in your kitchen."
      />

      {/* Temperature Gauge */}
      <TemperatureGauge
        proteins={proteins}
        currentProtein={currentProtein}
        selectedProteinIndex={selectedProteinIndex}
        setSelectedProteinIndex={setSelectedProteinIndex}
      />

      {/* Cutting Boards */}
      <CuttingBoards cuttingBoards={cuttingBoards} />

      {/* Thaw Calculator & Danger Zone */}
      <CalculatorAndDanger
        weight={weight}
        setWeight={setWeight}
        thawMethod={thawMethod}
        setThawMethod={setThawMethod}
        calculateThawTime={calculateThawTime}
      />
    </main>
  );
}
