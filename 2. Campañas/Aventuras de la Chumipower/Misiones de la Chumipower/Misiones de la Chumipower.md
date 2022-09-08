---
database-plugin: basic
#mision

---

<%%
name: Misiones de la Chumipower
description: Misiones de la Chumipower
columns:
  __file__:
    key: "__file__"
    input: "markdown"
    label: "File"
    accessorKey: "__file__"
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
  NPCs:
    input: "text"
    accessorKey: "NPCs"
    key: "NPCs"
    label: "NPCs"
    position: 100
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  importancia:
    input: "text"
    accessorKey: "importancia"
    key: "importancia"
    label: "importancia"
    position: 100
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  recompensa:
    input: "text"
    accessorKey: "recompensa"
    key: "recompensa"
    label: "recompensa"
    position: 100
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  gancho:
    input: "text"
    accessorKey: "gancho"
    key: "gancho"
    label: "gancho"
    position: 100
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  nudo:
    input: "text"
    accessorKey: "nudo"
    key: "nudo"
    label: "nudo"
    position: 100
    skipPersist: false
    isHidden: false
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
config:
  enable_show_state: false
  remove_field_when_delete_column: false
  sticky_first_column: true
  group_folder_column: 
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  source_data: current_folder
  source_form_result: FROM #mision
  frontmatter_quote_wrap: false
  row_templates_folder: Plantillas/Sencillas
  current_row_template: Plantillas/Sencillas/NPC v2.md
  cell_size: compact
  pagination_size: 20
filters:
  enabled: false
  conditions:
%%>