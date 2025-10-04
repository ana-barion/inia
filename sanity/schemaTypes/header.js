// Define a reusable link type
const linkType = {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "linkType",
      type: "string",
      title: "Link Type",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
      },
      initialValue: "internal",
    },
    {
      name: "href",
      type: "string",
      title: "URL",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "openInNewTab",
      type: "boolean",
      title: "Open in New Tab",
      initialValue: false,
    },
  ],
};

export default {
  name: "header",
  title: "Header",
  type: "document",
  // Make it a singleton
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "isEnabled",
      title: "Enable Header",
      type: "boolean",
      description: "Toggle to enable/disable the header",
      initialValue: true,
    },
    {
      name: "isSticky",
      title: "Sticky Header",
      type: "boolean",
      description:
        "Make the header stick to the top of the page when scrolling",
      initialValue: true,
    },
    {
      name: "style",
      title: "Header Style",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
      initialValue: "primary",
    },
    {
      name: "url",
      title: "URL Configuration",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Link Type",
          type: "string",
          options: {
            list: [{ title: "Link", value: "link" }],
          },
          initialValue: "link",
        },
        {
          name: "linkType",
          title: "Link Type",
          type: "string",
          options: {
            list: [
              { title: "Internal", value: "internal" },
              { title: "External", value: "external" },
            ],
          },
          initialValue: "internal",
        },
        {
          name: "openInNewTab",
          title: "Open in New Tab",
          type: "boolean",
          initialValue: false,
        },
      ],
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      description: "The email address displayed in the header",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "The main logo image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for accessibility",
        },
      ],
    },
    {
      name: "navigationLinks",
      title: "Navigation Links",
      type: "array",
      description: "The main navigation links",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Link URL",
              type: "string",
              description: "The URL where this link points to",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "isEnabled",
              title: "Enable Link",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "style",
              title: "Link Style",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                ],
              },
              initialValue: "primary",
            },
            {
              name: "url",
              title: "Link Settings",
              type: "object",
              fields: [
                {
                  name: "linkType",
                  type: "string",
                  title: "Link Type",
                  options: {
                    list: [
                      { title: "Internal", value: "internal" },
                      { title: "External", value: "external" },
                    ],
                  },
                  initialValue: "internal",
                },
                {
                  name: "openInNewTab",
                  type: "boolean",
                  title: "Open in New Tab",
                  initialValue: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      description: "Social media icons and links",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              description: "SVG or PNG icon for the social platform",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      description: "Call-to-action button configuration",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
          description: "Text displayed on the button",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "mobileText",
          title: "Mobile Button Text",
          type: "string",
          description:
            'Shorter text for mobile displays (e.g., "Join" instead of "Join Our Study")',
        },
        {
          name: "href",
          title: "Button Link",
          type: "string",
          description: "The URL where this button links to",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "isEnabled",
          title: "Enable Button",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "style",
          title: "Button Style",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
            ],
          },
          initialValue: "primary",
        },
        {
          name: "url",
          title: "Link Settings",
          type: "object",
          fields: [
            {
              name: "linkType",
              type: "string",
              title: "Link Type",
              options: {
                list: [
                  { title: "Internal", value: "internal" },
                  { title: "External", value: "external" },
                ],
              },
              initialValue: "internal",
            },
            {
              name: "openInNewTab",
              type: "boolean",
              title: "Open in New Tab",
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Header Configuration",
      };
    },
  },
  types: [linkType],
};
