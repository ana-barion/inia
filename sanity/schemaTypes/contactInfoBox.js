import { defineField, defineType } from "sanity";

export const contactInfoBox = defineType({
  name: "contactInfoBox",
  title: "Contact Info Box Content",
  type: "document",
  
  fields: [
    defineField({
      name: "addressLine",
      title: "Address Line",
      description: "The address shown in the box.",
      type: "string",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      description: "The contact email shown in the box.",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      description: "The phone number shown in the box.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Info Box Content"
      }
    }
  }
});
