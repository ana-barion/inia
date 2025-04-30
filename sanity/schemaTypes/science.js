// sanity/schemaTypes/science.js

export const accordionItem = {
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
};

export const threeMinuteStep = {
  name: 'threeMinuteStep',
  title: '3-Minute Step',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the SVG/PNG for this step’s icon',
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'For accessibility',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Text under the icon, e.g. “Wear the Vest”',
      validation: Rule => Rule.required()
    }
  ]
};

export const sciencePage = {
  name: 'sciencePage',
  title: 'Science',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],

  fields: [
    {
      name: 'scientificApproach',
      title: 'Our Scientific Approach',
      type: 'object',
      fields: [
        { name: 'title',    title: 'Title',    type: 'string', validation: Rule => Rule.required() },
        { name: 'subtitle', title: 'Subtitle', type: 'text' }
      ]
    },

    {
      name: 'ultrasoundTechnology',
      title: 'Ultrasound Technology',
      type: 'object',
      fields: [
        { name: 'title',   title: 'Section Title', type: 'string', validation: Rule => Rule.required() },
        {
          name: 'bullets',
          title: 'Key Points',
          type: 'array',
          of: [{ type: 'string' }],
          validation: Rule => Rule.min(1)
        },
        {
          name: 'diagram',
          title: 'Diagram Image',
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },

    {
      name: 'iniacoreSteps',
      title: 'INIAcore Steps',
      type: 'array',
      of: [{
        type: 'object',
        name: 'iniacoreStep',
        title: 'Step',
        fields: [
          { name: 'order',       title: 'Step Number', type: 'number', validation: Rule => Rule.required() },
          { name: 'description', title: 'Description', type: 'text',   validation: Rule => Rule.required() }
        ]
      }]
    },

    {
      name: 'iniacoreHighlight',
      title: 'INIAcore Highlight',
      type: 'array',
      of: [{ type: 'block' }]
    },

    {
      name: 'threeMinutesSection',
      title: '3 Minutes a Day',
      type: 'object',
      fields: [
        { name: 'title',       title: 'Title',       type: 'string', validation: Rule => Rule.required() },
        { name: 'subtitle',    title: 'Subtitle',    type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [{ type: 'threeMinuteStep' }],
          validation: Rule => Rule.min(1).error('Add at least one step')
        }
      ]
    },

    {
      name: 'whyItMatters',
      title: 'Why It Matters',
      type: 'object',
      fields: [
        { name: 'title',   title: 'Title',   type: 'string', validation: Rule => Rule.required() },
        { name: 'content', title: 'Content', type: 'text',   validation: Rule => Rule.required() }
      ]
    },

    {
      name: 'inflammationControl',
      title: 'Inflammation Control',
      type: 'array',
      of: [{
        type: 'object',
        name: 'feature',
        title: 'Feature',
        fields: [
          { name: 'title',       title: 'Title',       type: 'string', validation: Rule => Rule.required() },
          { name: 'description', title: 'Description', type: 'text',   validation: Rule => Rule.required() }
        ]
      }]
    },

    {
      name: 'clinicalEvidence',
      title: 'Clinical Evidence',
      type: 'array',
      of: [{
        type: 'object',
        name: 'clinicalPhase',
        title: 'Phase',
        fields: [
          { name: 'phase',       title: 'Phase Name', type: 'string', validation: Rule => Rule.required() },
          { name: 'status',      title: 'Status',     type: 'string' },
          { name: 'description', title: 'Detail',     type: 'text' }
        ]
      }]
    },

    {
      name: 'researchAccordion',
      title: 'Research Accordion',
      type: 'array',
      of: [{ type: 'accordionItem' }]
    }
  ],

  preview: {
    select: { title: 'scientificApproach.title' },
    prepare({ title }) {
      return { title: title || 'Science Page' };
    }
  }
};

export default sciencePage;
