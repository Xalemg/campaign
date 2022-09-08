---

database-plugin: basic
#tablaFacciones

---

<%%
name: Facciones de la Chumipower
description: new description
columns:
  Camapaña:
    input: tags
    accessor: Camapaña
    label: Camapaña
    key: Camapaña
    position: 10
    skipPersist: false
    accessorKey: Camapaña
    options:
      - { label: "Chumipower", backgroundColor: "hsl(0, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  Tags:
    input: tags
    accessor: Tags
    label: Tags
    key: Tags
    position: 11
    skipPersist: false
    accessorKey: Tags
    options:
      - { label: "faccion", backgroundColor: "hsl(109, 95%, 90%)"}
      - { label: "Aretries/Altalos", backgroundColor: "hsl(282, 95%, 90%)"}
      - { label: "Aretries", backgroundColor: "hsl(311, 95%, 90%)"}
      - { label: "Kalithir", backgroundColor: "hsl(306, 95%, 90%)"}
      - { label: "Isla de Adur", backgroundColor: "hsl(142, 95%, 90%)"}
      - { label: "Aretries/Adur", backgroundColor: "hsl(358, 95%, 90%)"}
      - { label: "Adur", backgroundColor: "hsl(133, 95%, 90%)"}
      - { label: "cultoBane", backgroundColor: "hsl(301, 95%, 90%)"}
      - { label: "Ciudades Libres de Adur", backgroundColor: "hsl(57, 95%, 90%)"}
      - { label: "Islas Shamal", backgroundColor: "hsl(306, 95%, 90%)"}
      - { label: "Interplanar", backgroundColor: "hsl(302, 95%, 90%)"}
      - { label: "Drow", backgroundColor: "hsl(139, 95%, 90%)"}
      - { label: "Infraoscuridad", backgroundColor: "hsl(64, 95%, 90%)"}
      - { label: "Ust Natha", backgroundColor: "hsl(42, 95%, 90%)"}
      - { label: "jugador", backgroundColor: "hsl(21, 95%, 90%)"}
      - { label: "personaje", backgroundColor: "hsl(110, 95%, 90%)"}
      - { label: "IslasShamal", backgroundColor: "hsl(72, 95%, 90%)"}
      - { label: "Chumipower", backgroundColor: "hsl(338, 95%, 90%)"}
      - { label: "Abismo", backgroundColor: "hsl(130, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  Estructura:
    input: text
    accessor: Estructura
    label: Estructura
    key: Estructura
    position: 3
    skipPersist: false
    accessorKey: Estructura
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  Alineamiento:
    input: select
    accessor: Alineamiento
    label: Alineamiento
    key: Alineamiento
    position: 4
    isSorted: true
    isSortedDesc: false
    skipPersist: false
    accessorKey: Alineamiento
    width: 149
    options:
      - { label: "LB", backgroundColor: "hsl(242, 95%, 90%)"}
      - { label: "LM", backgroundColor: "hsl(238, 95%, 90%)"}
      - { label: "LN", backgroundColor: "hsl(252, 95%, 90%)"}
      - { label: "N", backgroundColor: "hsl(292, 95%, 90%)"}
      - { label: "NM", backgroundColor: "hsl(212, 95%, 90%)"}
      - { label: "CM", backgroundColor: "hsl(306, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  __file__:
    key: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    accessor: __file__
    position: 1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: true
      source_data: current_folder
  ubicaciones:
    input: tags
    accessor: ubicaciones
    key: ubicaciones
    label: ubicaciones
    position: 9
    skipPersist: false
    accessorKey: ubicaciones
    options:
      - { label: "Islas Shamal", backgroundColor: "hsl(302, 95%, 90%)"}
      - { label: "Aretries", backgroundColor: "hsl(282, 95%, 90%)"}
      - { label: "Isla de Altalos", backgroundColor: "hsl(98, 95%, 90%)"}
      - { label: "Kalithir", backgroundColor: "hsl(72, 95%, 90%)"}
      - { label: "Adur", backgroundColor: "hsl(323, 95%, 90%)"}
      - { label: "Embajada de los cinco colores", backgroundColor: "hsl(33, 95%, 90%)"}
      - { label: "[[Ust Natha]]", backgroundColor: "hsl(143, 95%, 90%)"}
      - { label: "[[Ust Natha|Ust Natha]]", backgroundColor: "hsl(234, 95%, 90%)"}
      - { label: "Ust Natha", backgroundColor: "hsl(218, 95%, 90%)"}
      - { label: "Infraoscuridad", backgroundColor: "hsl(134, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  motivacion:
    input: text
    accessor: motivacion
    key: motivacion
    label: motivacion
    position: 2
    skipPersist: false
    accessorKey: motivacion
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  Tipo_organizacion:
    input: select
    accessor: Tipo_organizacion
    label: Tipo organizacion
    key: Tipo_organizacion
    position: 6
    skipPersist: false
    accessorKey: Tipo_organizacion
    width: 149
    options:
      - { label: "Reino", backgroundColor: "hsl(253, 95%, 90%)"}
      - { label: "Culto", backgroundColor: "hsl(44, 95%, 90%)"}
      - { label: "Partido Politico", backgroundColor: "hsl(59, 95%, 90%)"}
      - { label: "Mercenarios", backgroundColor: "hsl(110, 95%, 90%)"}
      - { label: "Mafia", backgroundColor: "hsl(169, 95%, 90%)"}
      - { label: "Orden", backgroundColor: "hsl(199, 95%, 90%)"}
      - { label: "Asamblea", backgroundColor: "hsl(177, 95%, 90%)"}
      - { label: "Casa Drow", backgroundColor: "hsl(67, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  Cita:
    input: text
    accessor: Cita
    key: Cita
    label: Cita
    position: 5
    skipPersist: false
    accessorKey: Cita
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  Nivel_de_influencia:
    input: select
    accessor: Nivel_de_influencia
    key: Nivel_de_influencia
    label: Nivel de influencia
    position: 7
    skipPersist: false
    accessorKey: Nivel_de_influencia
    width: 149
    options:
      - { label: "Alta", backgroundColor: "hsl(205, 95%, 90%)"}
      - { label: "Media", backgroundColor: "hsl(136, 95%, 90%)"}
      - { label: "Baja", backgroundColor: "hsl(76, 95%, 90%)"}
      - { label: "Secreta", backgroundColor: "hsl(95, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  Alcance_de_influencia:
    input: select
    accessor: Alcance_de_influencia
    key: Alcance_de_influencia
    label: Alcance de influencia
    position: 8
    skipPersist: false
    accessorKey: Alcance_de_influencia
    width: 149
    options:
      - { label: "Local", backgroundColor: "hsl(248, 95%, 90%)"}
      - { label: "Regional", backgroundColor: "hsl(330, 95%, 90%)"}
      - { label: "Continental", backgroundColor: "hsl(58, 95%, 90%)"}
      - { label: "Global", backgroundColor: "hsl(299, 95%, 90%)"}
      - { label: "interplanar", backgroundColor: "hsl(144, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
config:
  enable_show_state: "false"
  group_folder_column: ""
  remove_field_when_delete_column: "false"
  cell_size: "normal"
  sticky_first_column: "true"
  show_metadata_created: "false"
  show_metadata_modified: "false"
  source_data: "query"
  source_form_result: "FROM #faccion"
  show_metadata_tasks: "false"
  frontmatter_quote_wrap: "false"
  row_templates_folder: "Plantillas/Sencillas"
  current_row_template: "Plantillas/Sencillas/Facción.md"
filters:
%%>