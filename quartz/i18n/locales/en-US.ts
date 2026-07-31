import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description provided",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Resumen",
      info: "Información",
      todo: "Pendiente",
      tip: "Consejo",
      success: "Éxito",
      question: "Pregunta",
      warning: "Advertencia",
      failure: "Fallo",
      danger: "Peligro",
      bug: "Error",
      example: "Ejemplo",
      quote: "Cita",
    },
    backlinks: {
      title: "Referencias",
      noBacklinksFound: "No se encontraron Referencias",
    },
    themeToggle: {
      lightMode: "Modo Claro",
      darkMode: "Modo Oscuro",
    },
    readerMode: {
      title: "Modo Lectura",
    },
    explorer: {
      title: "Base de Datos",
    },
    footer: {
      createdWith: "",
    },
    graph: {
      title: "Mapa Multiversal",
    },
    recentNotes: {
      title: "Últimos Informes",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Link to original",
    },
    search: {
      title: "Buscar",
      searchBarPlaceholder: "Buscar un Expediente",
    },
    tableOfContents: {
      title: "Contenido",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "Archivo no Encontrado",
      notFound: "El expediente solicitado no existe o está clasificado",
      home: "Return to Homepage",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation
