// schemas/footer.js
export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    // Company Info Section
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      description: "The name of the company.",
    },
    {
      name: "companyTagline",
      title: "Company Tagline",
      type: "string",
      description: "A short tagline or description about the company.",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "url",
              title: "URL",
              type: "url",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
          ],
        },
      ],
    },

    // Quick Links Section
    {
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Link Name",
              type: "string",
            },
            {
              name: "href",
              title: "Link URL",
              type: "url",
            },
          ],
        },
      ],
    },

    // Contact Section
    {
      name: "contactInfo",
      title: "Contact Info",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "type",
              title: "Contact Type",
              type: "string",
              description: "The type of contact (e.g., address, email, phone).",
            },
            {
              name: "value",
              title: "Contact Value",
              type: "string",
              description:
                "The actual contact value (e.g., phone number, address).",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              description: "The icon representing the contact type.",
            },
          ],
        },
      ],
    },

    // Newsletter Section
    {
      name: "newsletterText",
      title: "Newsletter Text",
      type: "string",
      description: "The text describing the newsletter subscription.",
    },

    // Bottom Bar Section
    {
      name: "bottomBarLinks",
      title: "Bottom Bar Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
            },
            {
              name: "href",
              title: "Link URL",
              type: "url",
            },
          ],
        },
      ],
    },

    // FDA Compliance Notice
    {
      name: "fdaComplianceNotice",
      title: "FDA Compliance Notice",
      type: "string",
      description: "Text for the FDA compliance notice.",
    },
  ],
};
