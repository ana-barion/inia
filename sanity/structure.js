// https://www.sanity.io/docs/structure-builder-cheat-sheet
// sanity/structure.js
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Science Page')
        .schemaType('sciencePage')
        .child(
          S.document()
            .schemaType('sciencePage')
            .documentId('sciencePage')
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        listItem =>
          !['header', 'sciencePage'].includes(listItem.getId())
      )
    ])
