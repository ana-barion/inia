import header from "./header";
import sciencePage, {
  accordionItem,
  threeMinuteStep,
  clinicalPhase,
  feature,
  iniacoreStep,
} from "./science";
import { teamMember, leadershipMember, teamIntro } from "./teamMember";

export const schema = {
  types: [
    header,
    teamMember,
    leadershipMember,
    teamIntro,
    accordionItem,
    threeMinuteStep,
    clinicalPhase,
    feature,
    iniacoreStep,
    sciencePage,
  ],
};
