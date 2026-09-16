import BackButton from "../../../../components/BackButton";
import knifeSkillsData from "./knifeSkillsData";
import KnifeSkillsCard from "./KnifeSkillsCard";
import PagesHeader from "../PagesHeader";

export default function KnifeSkills() {
  return (
    <main className="p-4 md:p-8">
      <BackButton />

      <PagesHeader
        category="Culinary Skills"
        title="Knife Skills & Cuts"
        description="Improve speed, grip ergonomics, and master standard culinary cuts for
          safer, more even cooking."
      />

      <div className="mt-10 columns-1 gap-6 md:columns-2 lg:columns-3 2xl:columns-4">
        {knifeSkillsData.map((knifeSkill) => (
          <KnifeSkillsCard knifeSkill={knifeSkill} />
        ))}
      </div>
    </main>
  );
}
