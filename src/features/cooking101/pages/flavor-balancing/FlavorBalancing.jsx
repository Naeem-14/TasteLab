import { useState } from "react";
import BackButton from "../../../../components/BackButton";
import GoldenRule from "./GoldenRule";
import FlavorMatrix from "./FlavorMatrix";
import ProfilesBreakdown from "./ProfilesBreakdown";
import { flavorProfiles, flavorFixes } from "./FlavorBalancingData";
import PagesHeader from "../PagesHeader";

export default function FlavorBalancing() {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [selectedIssue, setSelectedIssue] = useState("salty");

  const currentFixes = flavorFixes[selectedIssue];

  return (
    <main className="space-y-12 p-4 md:p-8">
      <BackButton />
      {/* Page Header */}
      <PagesHeader
        category="Culinary Skills"
        title="Flavor Balancing"
        description="Master the core flavor pillars and quickly diagnose and repair
          seasoned dishes that are out of balance."
      />

      {/* SECTION 1: Interactive Flavor Matrix / Rescue Tool */}
      <FlavorMatrix
        selectedIssue={selectedIssue}
        setSelectedIssue={setSelectedIssue}
        currentFixes={currentFixes}
      />

      {/* SECTION 2: Flavor Profiles Breakdown */}
      <ProfilesBreakdown
        flavorProfiles={flavorProfiles}
        activeProfileIndex={activeProfileIndex}
        setActiveProfileIndex={setActiveProfileIndex}
      />

      {/* SECTION 3: Golden Rules of Seasoning */}
      <GoldenRule />
    </main>
  );
}
