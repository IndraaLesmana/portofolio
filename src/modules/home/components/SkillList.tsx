import { STACKS } from "@/constant/stacks";
import SkillCard from "./SkillCard";
import MarqueeElement from "@/components/MarqueeElement";

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS
  ).sort(() => Math.random() - 0.5);
  return (
    <div className="space-y-6">
       <div className="space-y-2">
          <h3 className="h3 service-title font-bold">Skills</h3>
      </div>
      <div className="flex flex-col space-y-1 overflow-x-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </div>
  );
}
