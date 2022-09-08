---

database-plugin: basic

---

<%%
name: Chumipower
description: new description
columns:
  hp:
    input: "number"
    accessor: "hp"
    label: "hp"
    key: "hp"
    position: 3
    skipPersist: false
    accessorKey: "hp"
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  ac:
    input: "number"
    accessor: "ac"
    label: "ac"
    key: "ac"
    position: 4
    skipPersist: false
    accessorKey: "ac"
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  modifier:
    input: "number"
    accessor: "modifier"
    label: "modifier"
    key: "modifier"
    position: 5
    skipPersist: false
    accessorKey: "modifier"
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  level:
    input: "number"
    accessor: "level"
    label: "level"
    key: "level"
    position: 6
    skipPersist: false
    accessorKey: "level"
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  Tags:
    input: "tags"
    accessor: "Tags"
    label: "Tags"
    key: "Tags"
    position: 7
    skipPersist: false
    accessorKey: "Tags"
    isHidden: false
    sortIndex: -1
    options:
      - { label: "jugador,personaje", backgroundColor: "hsl(307, 95%, 90%)"}
      - { label: "jugador,personaje,IslasShamal,Chumipower", backgroundColor: "hsl(166, 95%, 90%)"}
      - { label: "Jugador,personaje,IslasShamal,Chumipower", backgroundColor: "hsl(264, 95%, 90%)"}
      - { label: "jugador", backgroundColor: "hsl(292, 95%, 90%)"}
      - { label: "personaje", backgroundColor: "hsl(176, 95%, 90%)"}
      - { label: "IslasShamal", backgroundColor: "hsl(187, 95%, 90%)"}
      - { label: "Chumipower", backgroundColor: "hsl(77, 95%, 90%)"}
      - { label: "Jugador", backgroundColor: "hsl(178, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  Campaña:
    input: "select"
    accessor: "Campaña"
    label: "Campaña"
    key: "Campaña"
    position: 9
    skipPersist: false
    accessorKey: "Campaña"
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Chumipower", backgroundColor: "hsl(285, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  Competencias:
    input: "tags"
    accessor: "Competencias"
    label: "Competencias"
    key: "Competencias"
    position: 2
    skipPersist: false
    accessorKey: "Competencias"
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Acrobacias,Arcano,Historia,Investigación,Naturaleza,Actuación,Religión,Sigilo", backgroundColor: "hsl(26, 95%, 90%)"}
      - { label: "Atletismo,Historia,Intimidación,Percepcion,Persuasión", backgroundColor: "hsl(305, 95%, 90%)"}
      - { label: "Trato con animales,Atletismo,Perspicacia,Persuasion,Intimidación", backgroundColor: "hsl(217, 95%, 90%)"}
      - { label: "Engaño,Juego de manos,Perspicacia,Persuasión", backgroundColor: "hsl(184, 95%, 90%)"}
      - { label: "Atletismo,Intimidación,Percepcion,Sigilo,Trato con animales", backgroundColor: "hsl(314, 95%, 90%)"}
      - { label: "Atletismo Perspicacia  Intimidación  Percepcion", backgroundColor: "hsl(235, 95%, 90%)"}
      - { label: "Acrobacias", backgroundColor: "hsl(267, 95%, 90%)"}
      - { label: "Arcano", backgroundColor: "hsl(69, 95%, 90%)"}
      - { label: "Historia", backgroundColor: "hsl(345, 95%, 90%)"}
      - { label: "Investigación", backgroundColor: "hsl(239, 95%, 90%)"}
      - { label: "Naturaleza", backgroundColor: "hsl(352, 95%, 90%)"}
      - { label: "Actuación", backgroundColor: "hsl(332, 95%, 90%)"}
      - { label: "Religión", backgroundColor: "hsl(8, 95%, 90%)"}
      - { label: "Sigilo", backgroundColor: "hsl(151, 95%, 90%)"}
      - { label: "Atletismo", backgroundColor: "hsl(75, 95%, 90%)"}
      - { label: "Intimidación", backgroundColor: "hsl(273, 95%, 90%)"}
      - { label: "Percepcion", backgroundColor: "hsl(34, 95%, 90%)"}
      - { label: "Persuasión", backgroundColor: "hsl(62, 95%, 90%)"}
      - { label: "Trato con animales", backgroundColor: "hsl(76, 95%, 90%)"}
      - { label: "Perspicacia", backgroundColor: "hsl(314, 95%, 90%)"}
      - { label: "Persuasion", backgroundColor: "hsl(113, 95%, 90%)"}
      - { label: "Engaño", backgroundColor: "hsl(65, 95%, 90%)"}
      - { label: "Juego de manos", backgroundColor: "hsl(114, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  __file__:
    key: "__file__"
    input: "markdown"
    label: "File"
    accessorKey: "__file__"
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    accessor: "__file__"
    position: 1
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: true
      source_data: current_folder
  En_curso:
    input: "select"
    accessor: "En_curso"
    label: "En curso"
    key: "En_curso"
    position: 8
    skipPersist: false
    accessorKey: "En_curso"
    isHidden: false
    sortIndex: -1
    options:
      - { label: "si", backgroundColor: "hsl(217, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  tipo:
    input: "select"
    accessor: "tipo"
    key: "tipo"
    label: "tipo"
    position: 100
    skipPersist: false
    accessorKey: "tipo"
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Acompañante", backgroundColor: "hsl(306, 95%, 90%)"}
      - { label: "jugador", backgroundColor: "hsl(127, 95%, 90%)"}
      - { label: "Mascota", backgroundColor: "hsl(77, 95%, 90%)"}
      - { label: "Jugador", backgroundColor: "hsl(29, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
config:
  enable_show_state: false
  group_folder_column: 
  remove_field_when_delete_column: true
  cell_size: compact
  sticky_first_column: true
  show_metadata_created: false
  show_metadata_modified: false
  source_data: current_folder
  source_form_result: root
  show_metadata_tasks: false
  frontmatter_quote_wrap: false
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  source_destination_path: /
filters:
  enabled: false
  conditions:
%%>