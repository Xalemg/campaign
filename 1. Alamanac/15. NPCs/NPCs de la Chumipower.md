---
database-plugin: basic
Tags: tablaNPC
---

<%%
name: NPCs
description: new description
columns:
  edad:
    input: "text"
    accessor: "edad"
    label: "edad"
    key: "edad"
    position: 8
    skipPersist: false
    accessorKey: "edad"
    width: 150
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  alineamiento:
    input: "select"
    accessor: "alineamiento"
    label: "alineamiento"
    key: "alineamiento"
    position: 3
    skipPersist: false
    accessorKey: "alineamiento"
    width: 105
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: false
    options:
      - { label: "NE", backgroundColor: "hsl(308, 95%, 90%)"}
      - { label: "N", backgroundColor: "hsl(159, 95%, 90%)"}
      - { label: "LB", backgroundColor: "hsl(7, 95%, 90%)"}
      - { label: "LN", backgroundColor: "hsl(131, 95%, 90%)"}
      - { label: "NM", backgroundColor: "hsl(15, 95%, 90%)"}
      - { label: "CN", backgroundColor: "hsl(286, 95%, 90%)"}
      - { label: "LM", backgroundColor: "hsl(188, 95%, 90%)"}
      - { label: "NB", backgroundColor: "hsl(194, 95%, 90%)"}
      - { label: "CB", backgroundColor: "hsl(34, 95%, 90%)"}
      - { label: "CM", backgroundColor: "hsl(86, 95%, 90%)"}
      - { label: "<%alignment%>", backgroundColor: "hsl(342, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  profesión:
    input: "text"
    accessor: "profesión"
    label: "profesión"
    key: "profesión"
    position: 5
    skipPersist: false
    accessorKey: "profesión"
    width: 150
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  faccion:
    input: "tags"
    accessor: "faccion"
    label: "faccion"
    key: "faccion"
    position: 4
    isSortedDesc: false
    skipPersist: false
    isSorted: false
    accessorKey: "faccion"
    width: 344
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Reino de Altalos", backgroundColor: "hsl(344, 95%, 90%)"}
      - { label: "Tawdrihyde", backgroundColor: "hsl(354, 95%, 90%)"}
      - { label: "Los Callizos", backgroundColor: "hsl(350, 95%, 90%)"}
      - { label: "Los Dardos Nocturnos", backgroundColor: "hsl(305, 95%, 90%)"}
      - { label: "Culto de Bane", backgroundColor: "hsl(188, 95%, 90%)"}
      - { label: "Camallo", backgroundColor: "hsl(274, 95%, 90%)"}
      - { label: "Corte del Rey Inmortal", backgroundColor: "hsl(288, 95%, 90%)"}
      - { label: "Los caballos", backgroundColor: "hsl(306, 95%, 90%)"}
      - { label: "Inquisición", backgroundColor: "hsl(101, 95%, 90%)"}
      - { label: "Los Martillos", backgroundColor: "hsl(183, 95%, 90%)"}
      - { label: "Ojos Plateados,Reino de Altalos", backgroundColor: "hsl(216, 95%, 90%)"}
      - { label: "Chamanes de Grumsh", backgroundColor: "hsl(259, 95%, 90%)"}
      - { label: "Las velas", backgroundColor: "hsl(299, 95%, 90%)"}
      - { label: "Clan CabezaHierro", backgroundColor: "hsl(340, 95%, 90%)"}
      - { label: "Iglesia de la luz", backgroundColor: "hsl(342, 95%, 90%)"}
      - { label: "Tejedoras de la Reina", backgroundColor: "hsl(90, 95%, 90%)"}
      - { label: "Ojos Plateados", backgroundColor: "hsl(209, 95%, 90%)"}
      - { label: "La sombra que fue", backgroundColor: "hsl(111, 95%, 90%)"}
      - { label: "La asamblea de los cinco colores", backgroundColor: "hsl(258, 95%, 90%)"}
      - { label: "<% facion %>", backgroundColor: "hsl(133, 95%, 90%)"}
      - { label: "Casa Despana", backgroundColor: "hsl(315, 95%, 90%)"}
      - { label: "Los que estan a la sombra", backgroundColor: "hsl(36, 95%, 90%)"}
      - { label: "N/A", backgroundColor: "hsl(2, 95%, 90%)"}
      - { label: "Gremio de Aventureros", backgroundColor: "hsl(223, 95%, 90%)"}
      - { label: "Casa Laudrez", backgroundColor: "hsl(4, 95%, 90%)"}
      - { label: "Republica Camallo", backgroundColor: "hsl(197, 95%, 90%)"}
      - { label: "Casa Laudrez", backgroundColor: "hsl(146, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  genero:
    input: "select"
    accessor: "genero"
    label: "genero"
    key: "genero"
    position: 9
    skipPersist: false
    accessorKey: "genero"
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Hombre", backgroundColor: "hsl(95, 95%, 90%)"}
      - { label: "Mujer", backgroundColor: "hsl(43, 95%, 90%)"}
      - { label: "N/A", backgroundColor: "hsl(354, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  raza:
    input: "select"
    accessor: "raza"
    label: "raza"
    key: "raza"
    position: 7
    skipPersist: false
    accessorKey: "raza"
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Elfo", backgroundColor: "hsl(263, 95%, 90%)"}
      - { label: "Gnomo", backgroundColor: "hsl(193, 95%, 90%)"}
      - { label: "Duergar", backgroundColor: "hsl(328, 95%, 90%)"}
      - { label: "Tabaxi", backgroundColor: "hsl(64, 95%, 90%)"}
      - { label: "Humano", backgroundColor: "hsl(325, 95%, 90%)"}
      - { label: "Enano", backgroundColor: "hsl(150, 95%, 90%)"}
      - { label: "Tiefling", backgroundColor: "hsl(350, 95%, 90%)"}
      - { label: "No muerto", backgroundColor: "hsl(22, 95%, 90%)"}
      - { label: "Osgo", backgroundColor: "hsl(95, 95%, 90%)"}
      - { label: "Dragonido", backgroundColor: "hsl(197, 95%, 90%)"}
      - { label: "Dragon", backgroundColor: "hsl(155, 95%, 90%)"}
      - { label: "Drow", backgroundColor: "hsl(13, 95%, 90%)"}
      - { label: "Orca", backgroundColor: "hsl(315, 95%, 90%)"}
      - { label: "Goblin", backgroundColor: "hsl(8, 95%, 90%)"}
      - { label: "Svirfneblin", backgroundColor: "hsl(106, 95%, 90%)"}
      - { label: "Orco", backgroundColor: "hsl(346, 95%, 90%)"}
      - { label: "Dragon, Dragon", backgroundColor: "hsl(38, 95%, 90%)"}
      - { label: "Drow, Drow", backgroundColor: "hsl(122, 95%, 90%)"}
      - { label: "Gnomo, Gnomo", backgroundColor: "hsl(198, 95%, 90%)"}
      - { label: "Principe Demonio", backgroundColor: "hsl(323, 95%, 90%)"}
      - { label: "Gran Dragon", backgroundColor: "hsl(106, 95%, 90%)"}
      - { label: "Semi Elfo", backgroundColor: "hsl(172, 95%, 90%)"}
      - { label: "Derro", backgroundColor: "hsl(327, 95%, 90%)"}
      - { label: "Aboleth", backgroundColor: "hsl(133, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  rango:
    input: "select"
    accessor: "rango"
    label: "rango"
    key: "rango"
    position: 6
    skipPersist: false
    accessorKey: "rango"
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Rector", backgroundColor: "hsl(252, 95%, 90%)"}
      - { label: "Noble", backgroundColor: "hsl(48, 95%, 90%)"}
      - { label: "Figura clave", backgroundColor: "hsl(237, 95%, 90%)"}
      - { label: "Miembro", backgroundColor: "hsl(267, 95%, 90%)"}
      - { label: "Hijo del Conde", backgroundColor: "hsl(276, 95%, 90%)"}
      - { label: "Lider", backgroundColor: "hsl(98, 95%, 90%)"}
      - { label: "Gerente", backgroundColor: "hsl(185, 95%, 90%)"}
      - { label: "Adepto", backgroundColor: "hsl(132, 95%, 90%)"}
      - { label: "Afiliado", backgroundColor: "hsl(295, 95%, 90%)"}
      - { label: "Miembro importante", backgroundColor: "hsl(215, 95%, 90%)"}
      - { label: "Exploradora", backgroundColor: "hsl(226, 95%, 90%)"}
      - { label: "Lider del partido", backgroundColor: "hsl(93, 95%, 90%)"}
      - { label: "Primo lejano", backgroundColor: "hsl(287, 95%, 90%)"}
      - { label: "Lider menor", backgroundColor: "hsl(104, 95%, 90%)"}
      - { label: "Lider de la iglesia", backgroundColor: "hsl(81, 95%, 90%)"}
      - { label: "Capitan", backgroundColor: "hsl(226, 95%, 90%)"}
      - { label: "Sectaria", backgroundColor: "hsl(78, 95%, 90%)"}
      - { label: "Tejedora", backgroundColor: "hsl(351, 95%, 90%)"}
      - { label: "Perdicion oscura", backgroundColor: "hsl(25, 95%, 90%)"}
      - { label: "Principe Demonio", backgroundColor: "hsl(317, 95%, 90%)"}
      - { label: "Esbirro", backgroundColor: "hsl(319, 95%, 90%)"}
      - { label: "Amenaza encapuchada", backgroundColor: "hsl(1, 95%, 90%)"}
      - { label: "prisionero", backgroundColor: "hsl(28, 95%, 90%)"}
      - { label: "<%rango%>", backgroundColor: "hsl(188, 95%, 90%)"}
      - { label: "Lider de casa", backgroundColor: "hsl(351, 95%, 90%)"}
      - { label: "N/A", backgroundColor: "hsl(194, 95%, 90%)"}
      - { label: "Lider local", backgroundColor: "hsl(343, 95%, 90%)"}
      - { label: "Maestra de Armas", backgroundColor: "hsl(102, 95%, 90%)"}
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
    isSorted: true
    isSortedDesc: false
    width: 150
    isHidden: false
    sortIndex: 1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: true
      source_data: current_folder
  interpretacion:
    input: "text"
    accessor: "interpretacion"
    key: "interpretacion"
    label: "interpretacion"
    position: 2
    skipPersist: false
    accessorKey: "interpretacion"
    width: 150
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
      task_hide_completed: true
  ubicaciones:
    input: "tags"
    accessor: "ubicaciones"
    key: "ubicaciones"
    label: "ubicaciones"
    position: 18
    skipPersist: false
    accessorKey: "ubicaciones"
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Torre de Cresta Fria", backgroundColor: "hsl(285, 95%, 90%)"}
      - { label: "Tawdryhide", backgroundColor: "hsl(244, 95%, 90%)"}
      - { label: "Adur", backgroundColor: "hsl(6, 95%, 90%)"}
      - { label: "La sirena Borracha", backgroundColor: "hsl(7, 95%, 90%)"}
      - { label: "Kalithir", backgroundColor: "hsl(321, 95%, 90%)"}
      - { label: "Kanato de Garras", backgroundColor: "hsl(230, 95%, 90%)"}
      - { label: "Islas Shamal", backgroundColor: "hsl(0, 95%, 90%)"}
      - { label: "Altalos", backgroundColor: "hsl(204, 95%, 90%)"}
      - { label: "Republica Camallo", backgroundColor: "hsl(83, 95%, 90%)"}
      - { label: "Altalos - Kalithir", backgroundColor: "hsl(340, 95%, 90%)"}
      - { label: "Isla de Riven", backgroundColor: "hsl(88, 95%, 90%)"}
      - { label: "CrestaFria", backgroundColor: "hsl(256, 95%, 90%)"}
      - { label: "Ust Natha", backgroundColor: "hsl(129, 95%, 90%)"}
      - { label: "Abismo", backgroundColor: "hsl(346, 95%, 90%)"}
      - { label: "Embajada de los cinco colores", backgroundColor: "hsl(312, 95%, 90%)"}
      - { label: "Semipllano de Tormentas", backgroundColor: "hsl(317, 95%, 90%)"}
      - { label: "Hismal", backgroundColor: "hsl(11, 95%, 90%)"}
      - { label: "Isla de Altalos", backgroundColor: "hsl(165, 95%, 90%)"}
      - { label: "Cubo de las mil caras", backgroundColor: "hsl(337, 95%, 90%)"}
      - { label: "Bolgog", backgroundColor: "hsl(156, 95%, 90%)"}
      - { label: "Puerto Kalabor", backgroundColor: "hsl(149, 95%, 90%)"}
      - { label: "Palacio de las flores", backgroundColor: "hsl(325, 95%, 90%)"}
      - { label: "Bajo Volcan", backgroundColor: "hsl(80, 95%, 90%)"}
      - { label: "Asamblea de los cinco colores", backgroundColor: "hsl(86, 95%, 90%)"}
      - { label: "Roncor", backgroundColor: "hsl(337, 95%, 90%)"}
      - { label: "Infraoscuridad", backgroundColor: "hsl(113, 95%, 90%)"}
      - { label: "Aretries", backgroundColor: "hsl(195, 95%, 90%)"}
      - { label: "La dríada descortés", backgroundColor: "hsl(166, 95%, 90%)"}
      - { label: "Lago Natha", backgroundColor: "hsl(232, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
  muerto:
    input: "select"
    accessor: "muerto"
    key: "muerto"
    label: "muerto"
    position: 20
    skipPersist: false
    accessorKey: "muerto"
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "no", backgroundColor: "hsl(6, 95%, 90%)"}
      - { label: "si", backgroundColor: "hsl(183, 95%, 90%)"}
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
config:
  enable_show_state: false
  remove_field_when_delete_column: false
  sticky_first_column: true
  group_folder_column: 
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  source_data: tag
  source_form_result: NPC
  frontmatter_quote_wrap: false
  row_templates_folder: Plantillas/Sencillas
  current_row_template: Plantillas/Sencillas/NPC v2.md
  cell_size: compact
  pagination_size: 20
  source_destination_path: 1. Alamanac/15. NPCs
filters:
  enabled: true
  conditions:
    - {field: usado-en, operator: CONTAINS, value: Chumipower}
%%>