import {defineConfig} from 'sanity'

import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem, orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import { CogIcon, HomeIcon, InfoOutlineIcon, MenuIcon } from "@sanity/icons"
import { structureTool } from "sanity/structure"

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])
// Define the singleton document types
const singletonTypes = new Set(["settings"])

let queryString = window.location.search
let urlParams = new URLSearchParams(queryString)
let userType = urlParams.get('user')

export default defineConfig({
  name: 'default',
  title: 'Admin',
  basePath: '/admin',
  projectId: 'a1b2cd3e',
  dataset: 'production',
  plugins: getDocuments(),
  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})

function getDocuments(){

    return [
      structureTool({
        structure: (S, context) =>
          S.list()
            .title("Content")
            .items([

              // Singleton document types
              S.listItem()
                .title("Settings")
                .id("settings")
                .icon(CogIcon)
                .child(
                  // Instead of rendering a list of documents, we render a single
                  // document, specifying the `documentId` manually to ensure
                  // that we're editing the single instance of the document
                  S.document()
                    .schemaType("settings")
                    .documentId("settings")
                ),



              
              // Sortable document types

              orderableDocumentListDeskItem({
                type: 'footer',
                title: 'Footer',
                id: 'orderable-footer',
                icon: MenuIcon,
                S,
                context
              }),

              // Regular document types
              // S.documentTypeListItem("example").title("Example"),
            
              // Icons: https://icons.sanity.build/all


     


            ]),
      }),
      visionTool(), 
    ]
  }
}