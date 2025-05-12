
import header from "./header";
import newsType from "./newsType";
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
    newsType,
  ],
};
