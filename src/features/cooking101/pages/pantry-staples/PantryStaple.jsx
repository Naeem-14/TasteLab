import { useState } from "react";
import BackButton from "../../../../components/BackButton";
import { stapleItems } from "./pantryStaplesData";
import ManagementRules from "./ManagementRules";
import ExpirationDates from "./ExpirationDates";
import ItemInspector from "./ItemInspector";
import PagesHeader from "../PagesHeader";

export default function PantryStaples() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const filteredItems = stapleItems.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const activeItem =
    filteredItems[activeItemIndex] || filteredItems[0] || stapleItems[0];

  return (
    <main className="space-y-12 p-4 md:p-8">
      <BackButton />
      {/* Page Header */}
      <PagesHeader
        category="Equipment & Basics"
        title="Pantry Staples Guide"
        description="Maximize freshness, reduce food waste, and master storage practices
          for common dry goods and ingredients."
      />

      {/* SECTION 1: Interactive Pantry Item Inspector */}
      <ItemInspector
        activeItem={activeItem}
        filteredItems={filteredItems}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setActiveItemIndex={setActiveItemIndex}
      />

      {/* SECTION 2: Understanding Expiration Dates */}
      <ExpirationDates />

      {/* SECTION 3: The FIFO Method & Storage Best Practices */}
      <ManagementRules />
    </main>
  );
}
