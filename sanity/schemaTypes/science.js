// Placeholder schema types for sciencePage, accordionItem, and threeMinuteStep

const clinicalPhase = {
  name: "clinicalPhase",
  type: "object",
  title: "Clinical Phase",
  fields: [
    { name: "phase", type: "string", title: "Phase" },
    { name: "status", type: "string", title: "Status" },
    { name: "description", type: "text", title: "Description" },
  ],
};

const feature = {
  name: "feature",
  type: "object",
  title: "Feature",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "text", title: "Description" },
  ],
};

const iniacoreStep = {
  name: "iniacoreStep",
  type: "object",
  title: "INIAcore Step",
  fields: [
    { name: "order", type: "number", title: "Order" },
    { name: "description", type: "text", title: "Description" },
  ],
};

const sciencePage = {
  name: "sciencePage",
  type: "document",
  title: "Science Page",
  fields: [
    {
      name: "clinicalEvidence",
      title: "Clinical Evidence",
      type: "array",
      of: [{ type: "clinicalPhase" }],
    },
    {
      name: "inflammationControl",
      title: "Inflammation Control",
      type: "array",
      of: [{ type: "feature" }],
    },
    {
      name: "iniacoreHighlight",
      title: "INIAcore Highlight",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "iniacoreSteps",
      title: "INIAcore Steps",
      type: "array",
      of: [{ type: "iniacoreStep" }],
    },
    {
      name: "researchAccordion",
      title: "Research Accordion",
      type: "array",
      of: [{ type: "accordionItem" }],
    },
    {
      name: "scientificApproach",
      title: "Scientific Approach",
      type: "object",
      fields: [
        { name: "subtitle", type: "string", title: "Subtitle" },
        { name: "title", type: "string", title: "Title" },
      ],
    },
    {
      name: "threeMinutesSection",
      title: "Three Minutes Section",
      type: "object",
      fields: [
        { name: "description", type: "string", title: "Description" },
        { name: "subtitle", type: "string", title: "Subtitle" },
        { name: "title", type: "string", title: "Title" },
        {
          name: "steps",
          type: "array",
          of: [{ type: "threeMinuteStep" }],
        },
      ],
    },
    {
      name: "ultrasoundTechnology",
      title: "Ultrasound Technology",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        {
          name: "bullets",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "diagram",
          type: "image",
        },
      ],
    },
    {
      name: "whyItMatters",
      title: "Why It Matters",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "content", type: "text", title: "Content" },
      ],
    },
  ],
};

const accordionItem = {
  name: "accordionItem",
  type: "object",
  title: "Accordion Item",
  fields: [
    { name: "heading", type: "string", title: "Heading" },
    { name: "content", type: "text", title: "Content" },
  ],
};

const threeMinuteStep = {
  name: "threeMinuteStep",
  type: "object",
  title: "Three Minute Step",
  fields: [
    { name: "label", type: "string", title: "Label" },
    { name: "icon", type: "image", title: "Icon" },
  ],
};

export default sciencePage;
export { accordionItem, threeMinuteStep, clinicalPhase, feature, iniacoreStep };
