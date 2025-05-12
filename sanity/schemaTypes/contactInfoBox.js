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
      name: "addressIcon",
      title: "Address Icon",
      description: "Upload the icon for the address.",
      type: "image",
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
      name: "emailIcon",
      title: "Email Icon",
      description: "Upload the icon for the email.",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      description: "The phone number shown in the box.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneIcon",
      title: "Phone Icon",
      description: "Upload the icon for the phone.",
      type: "image",
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
