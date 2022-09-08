---

database-plugin: basic

---

<%%
name: 11. Lugares
description: new description
columns:
  Tags:
    input: tags
    accessor: Tags
    label: Tags
    key: Tags
    position: 17
    skipPersist: false
    accessorKey: Tags
    width: 351
    options:
      - { label: "lugar", backgroundColor: "hsl(111, 95%, 90%)"}
      - { label: "IslasShamal", backgroundColor: "hsl(97, 95%, 90%)"}
      - { label: "Aretries/Altalos", backgroundColor: "hsl(108, 95%, 90%)"}
      - { label: "región", backgroundColor: "hsl(44, 95%, 90%)"}
      - { label: "Aretries", backgroundColor: "hsl(99, 95%, 90%)"}
      - { label: "mar_castigo", backgroundColor: "hsl(342, 95%, 90%)"}
      - { label: "Punto de interes", backgroundColor: "hsl(163, 95%, 90%)"}
      - { label: "Aretries/Adur", backgroundColor: "hsl(189, 95%, 90%)"}
      - { label: "Edificio", backgroundColor: "hsl(117, 95%, 90%)"}
      - { label: "punto_de_interes", backgroundColor: "hsl(99, 95%, 90%)"}
      - { label: "Aretries/Altalos/Riven", backgroundColor: "hsl(240, 95%, 90%)"}
      - { label: "Mazmorra", backgroundColor: "hsl(221, 95%, 90%)"}
      - { label: "Kalithir", backgroundColor: "hsl(160, 95%, 90%)"}
      - { label: "Aretries/Roncor", backgroundColor: "hsl(49, 95%, 90%)"}
      - { label: "Aretries/Hismal", backgroundColor: "hsl(148, 95%, 90%)"}
      - { label: "Aretries/Bolgog", backgroundColor: "hsl(101, 95%, 90%)"}
      - { label: "Aretries/Bas'loch", backgroundColor: "hsl(6, 95%, 90%)"}
      - { label: "mar", backgroundColor: "hsl(91, 95%, 90%)"}
      - { label: "MarDelCastigo", backgroundColor: "hsl(292, 95%, 90%)"}
      - { label: "ciudad", backgroundColor: "hsl(91, 95%, 90%)"}
      - { label: "ciudad Aretries/Adur Kalithir", backgroundColor: "hsl(331, 95%, 90%)"}
      - { label: "capital", backgroundColor: "hsl(37, 95%, 90%)"}
      - { label: "Aretries/Adur Kalithir", backgroundColor: "hsl(158, 95%, 90%)"}
      - { label: "Aretries/Infraoscuridad", backgroundColor: "hsl(203, 95%, 90%)"}
      - { label: "faccion", backgroundColor: "hsl(69, 95%, 90%)"}
      - { label: "Isla de Adur", backgroundColor: "hsl(133, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 50
      media_height: 50
      isInline: false
      source_data: current_folder
  Mundo:
    input: select
    accessor: Mundo
    label: Mundo
    key: Mundo
    position: 3
    skipPersist: false
    accessorKey: Mundo
    options:
      - { label: "Aretries", backgroundColor: "hsl(6, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  Tipo:
    input: select
    accessor: Tipo
    label: Tipo
    key: Tipo
    position: 2
    isSorted: true
    isSortedDesc: true
    skipPersist: false
    accessorKey: Tipo
    options:
      - { label: "zona", backgroundColor: "hsl(98, 95%, 90%)"}
      - { label: "región", backgroundColor: "hsl(326, 95%, 90%)"}
      - { label: "Punto de interes", backgroundColor: "hsl(164, 95%, 90%)"}
      - { label: "Mazmorra", backgroundColor: "hsl(15, 95%, 90%)"}
      - { label: "Isla principal", backgroundColor: "hsl(301, 95%, 90%)"}
      - { label: "ciudad", backgroundColor: "hsl(71, 95%, 90%)"}
      - { label: "Región", backgroundColor: "hsl(213, 95%, 90%)"}
      - { label: "faccion", backgroundColor: "hsl(234, 95%, 90%)"}
      - { label: "SubContinentes", backgroundColor: "hsl(40, 95%, 90%)"}
      - { label: "Subcontinentes", backgroundColor: "hsl(132, 95%, 90%)"}
      - { label: "Subcontinente", backgroundColor: "hsl(187, 95%, 90%)"}
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
  Usado_en:
    input: select
    accessor: Usado_en
    label: Usado en
    key: Usado_en
    position: 4
    skipPersist: false
    accessorKey: Usado_en
    options:
      - { label: "Chumipower", backgroundColor: "hsl(91, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  tematica:
    input: tags
    accessor: tematica
    key: tematica
    label: tematica
    position: 5
    skipPersist: false
    accessorKey: tematica
    options:
      - { label: "Alienigena", backgroundColor: "hsl(279, 95%, 90%)"}
      - { label: "Terror", backgroundColor: "hsl(97, 95%, 90%)"}
      - { label: "Superviviencia", backgroundColor: "hsl(91, 95%, 90%)"}
      - { label: "Demoniaca", backgroundColor: "hsl(268, 95%, 90%)"}
      - { label: "Desolación", backgroundColor: "hsl(270, 95%, 90%)"}
      - { label: "Ancestral", backgroundColor: "hsl(68, 95%, 90%)"}
      - { label: "Intriga", backgroundColor: "hsl(284, 95%, 90%)"}
      - { label: "Misterio", backgroundColor: "hsl(238, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  economia:
    input: text
    accessor: economia
    key: economia
    label: economia
    position: 6
    skipPersist: false
    accessorKey: economia
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  peligro:
    input: select
    accessor: peligro
    key: peligro
    label: peligro
    position: 7
    skipPersist: false
    accessorKey: peligro
    options:
      - { label: "Muy Alto", backgroundColor: "hsl(97, 95%, 90%)"}
      - { label: "Alto", backgroundColor: "hsl(352, 95%, 90%)"}
      - { label: "Medio", backgroundColor: "hsl(1, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  descripcion:
    input: text
    accessor: descripcion
    key: descripcion
    label: descripcion
    position: 8
    skipPersist: false
    accessorKey: descripcion
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  comercio:
    input: text
    accessor: comercio
    key: comercio
    label: comercio
    position: 10
    skipPersist: false
    accessorKey: comercio
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  religion:
    input: text
    accessor: religion
    key: religion
    label: religion
    position: 11
    skipPersist: false
    accessorKey: religion
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  historia:
    input: text
    accessor: historia
    key: historia
    label: historia
    position: 13
    skipPersist: false
    accessorKey: historia
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  ubicacion:
    input: tags
    accessor: ubicacion
    key: ubicacion
    label: ubicacion
    position: 14
    skipPersist: false
    accessorKey: ubicacion
    options:
      - { label: "Infraoscuridad", backgroundColor: "hsl(161, 95%, 90%)"}
      - { label: "Aretries", backgroundColor: "hsl(247, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  clima:
    input: text
    accessor: clima
    key: clima
    label: clima
    position: 9
    skipPersist: false
    accessorKey: clima
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  ecologia:
    input: text
    accessor: ecologia
    key: ecologia
    label: ecologia
    position: 12
    skipPersist: false
    accessorKey: ecologia
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  monstruos:
    input: text
    accessor: monstruos
    key: monstruos
    label: monstruos
    position: 15
    skipPersist: false
    accessorKey: monstruos
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  defensas:
    input: text
    accessor: defensas
    key: defensas
    label: defensas
    position: 16
    skipPersist: false
    accessorKey: defensas
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
config:
  enable_show_state: "false"
  group_folder_column: "Tipo"
  remove_field_when_delete_column: "false"
  sticky_first_column: "true"
  show_metadata_created: "false"
  show_metadata_modified: "false"
  source_data: "current_folder"
  source_form_result: "lugar"
  show_metadata_tasks: "false"
  frontmatter_quote_wrap: "false"
  row_templates_folder: "Plantillas/Sencillas/"
  current_row_template: "Plantillas/Sencillas/Mazmorra.md"
  cell_size: "compact"
filters:
%%>