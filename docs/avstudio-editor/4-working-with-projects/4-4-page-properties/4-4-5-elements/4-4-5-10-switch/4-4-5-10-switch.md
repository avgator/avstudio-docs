title: "Switch / Toggle (Deprecated)"
sidebar_label: "Switch / Toggle (Deprecated)"
sidebar_position: 10
description: "Learn how to add and configure the Switch element in AVStudio, including sizing, design, text, and action settings."
keywords:
  - avstudio
  - elements
  - ui
  - switch
  - toggle
  - control
  - guide
  - tutorial
title: "Switch"
sidebar_label: "Switch"
   - ui
   - switch
   - toggle
   - control
   - deprecated
schema:
  "@context": "https://schema.org"
   # - deprecated
  "name": "How to Add and Configure a Switch Element in AVStudio"
# Switch
    - "Configure dimensions, mode selector, and available switch modes."
    - "Adjust sizing, design, and text properties."
    - "Add actions and manage state settings."
---

# Switch / Toggle

:::danger Deprecated
The Toggle form of this element is deprecated and will be removed in a future release. Existing usages continue to function but should not be used in new projects.
:::

The `Switch` element allows you to create an on/off control, often used for toggling features or activating functions in a project.

**Summary:**  
This guide explains how to add a `Switch` element in AVStudio, access its configuration panel, and customize its dimensions, appearance, and actions.

---

## Adding a Switch Element

There are several ways to add a `Switch` element in AVStudio.

1. From `Page Containers`  
   - Go to `Container` under `Page Containers`.  
   - Click the dropdown arrow, select `Elements`, and choose `Add Element`.  
   - In the `Type` list, select `Switch`, then click `Add Element`.  
   - ![Add Switch from Page Containers](img/add-switch-from-page-containers.png "Add a new Switch element from Page Containers")

2. By right-clicking on the `Editor`  
   - Right-click anywhere on the `Editor`.  
   - Select `Add Element`.  
   - From the `Type` dropdown, select `Switch`, then click `Add Element`.

3. By dragging from the elements list  
   - On the right side of the `Editor`, locate the `Switch` element icon in the elements panel.  
   - Click and drag the icon onto the `Editor`.  
   - The `Switch` element will be added automatically.  
   - ![Drag Switch to Editor](img/drag-switch-to-editor.png "Drag the Switch element directly to the Editor workspace")

---

## Switch Properties

When the `Switch` element is selected in the `Editor`, its properties appear on the right-hand panel. These settings allow you to configure its behavior, design, and interaction.

### Switch friendly name
Specifies the name of the element. Click the edit icon to rename it. This name helps identify the element in the `Editor` and across the project.

### Switch dataset source
Determines the source of data for the `Switch`.

| Option | Description |
|--------|--------------|
| `Static` | No additional configuration is required. |
| `Dynamic` | Opens the `Select datasource to work with` modal, where you can select an available data source. |

### Dimensions
Defines the size of the element.

- Configure `Width` and `Height`.  
- Enter values directly or use `{-}` to set dynamic dimensions.  
- Switch between `px` (pixels) and `%` (percentage) as needed.

### Mode selector by index or name
Specifies the mode of the switch using an index or name.

- Enter a value directly or click the `fx` icon to open the `Assign post-processing function` dropdown.  
- Use `{-}` to open the `Pick dynamic value` modal to configure variables, parameters, or state entries.

### Available switch modes
Lists all defined switch modes.

- The `Default` mode is included automatically.  
- Click the `+` icon to open the `Create new switch mode` modal, where you can:  
  - Set a `Name`.  
  - Choose whether to copy from the default mode.  
  - Toggle `Separate actions for this switch mode`.  
  - Add the new mode.

### Switch CSS classname
Defines the CSS class for styling the element.

- Enter a class name directly or use `{-}` to link a dynamic source.  
- Default class name: `switchElement`.  
- Click the `fx` icon to open the `Select post-processing function` dropdown.

---

## Sizing

Controls the visual proportions of the `Switch` element, including text size, overall switch size, and internal spacing.

| Property | Description | Units |
|-----------|--------------|-------|
| `Text size` | Defines font size for switch labels. Enter a value or use `{-}` dynamically. | `px`, `vh`, `vw` |
| `Switch size` | Choose between `small` or `normal` size. | — |
| `Inner content gap` | Sets spacing between inner elements. Enter a value or use `{-}` dynamically. | `px`, `em`, `vh`, `vw` |

---

## Design

Controls appearance and visual effects.

| Property | Description |
|-----------|--------------|
| `Font family` | Choose a font (default `Default`). |
| `Switch order` | Set layout order: `normal` or `reverse`. |
| `Switch on-state background color` | Opens a color picker for the active state. |
| `Reflect` | Adds reflection. Options: `None`, `Enabled`. |

When `Reflect` is enabled:

| Subsetting | Description | Default |
|-------------|--------------|----------|
| `Align` | Choose reflection alignment (e.g., `Bottom`). | — |
| `Offset` | Adjust vertical distance. | — |
| `Start opacity` | Set starting opacity. | `100` |
| `End opacity` | Set end opacity. | `0` |

---

## Text

Defines the text shown when the switch is toggled on or off.

| Field | Description | Default Label |
|--------|--------------|----------------|
| `Text` | Opens the `Edit text` modal for formatting or variables. | — |
| `Switch on text` | Appears when switch is on. Accepts dynamic values via `{-}`. | `ON Text` |
| `Switch off text` | Appears when switch is off. Accepts dynamic values via `{-}`. | `OFF Text` |

---

## Actions

Defines what happens when the user interacts with the `Switch`.

1. Click `Add new action`.  
2. The `Create new action for switch` modal opens.  
3. Configure:  
   - `Name` — action name.  
   - `Behaviour` — when it triggers (e.g., `On Change`).  
   - `Execution Delay` — delay in `ms`.  
4. Select a target tab: `Crestron`, `Routing`, `Variables`, `Parameters`, `Overlays`, `Functions`, `HTTP Web Requests`, `Web Sockets`, or `Audio`.  
5. Example (`Crestron` tab):  
   - `Type` — `Push Digital`.  
   - `Signal Name` — enter or assign.  
   - Choose `Push onChange Value` or `Push custom Value`.  
6. Click `Create action` to save.

---

## State

Controls the visibility and signal states of the `Switch`.

### Visibility

| Setting | Description |
|----------|--------------|
| `Orientation visibility` | Show in `Both`, `Portrait`, or `Landscape`. |
| `Direct value` / `Crestron FB` | Control visibility directly or via Crestron feedback. |
| `Visibility dynamic value` | Use `{-}` to control visibility dynamically. |
| `Reserve space while hidden` | Keeps layout spacing when hidden. |

### Disabled signal

Defines whether the `Switch` is disabled via signal input.

| Property | Description | Default |
|-----------|--------------|----------|
| `Disabled signal` | Enter a signal name or use `{-}`. | Now Always Enabled |

### Checked status signal

Specifies control state for the `Switch`.

| Property | Description | Default |
|-----------|--------------|----------|
| `Checked status signal` | Enter a signal name or use `{-}`. | No Checked Control State |

---

## Key Points

- Use short, descriptive names for better project navigation.  
- Use `Dynamic` data sources for reactive switch states.  
- Keep `Reflect` and `Design` simple for performance on large projects.  

---

## Frequently Asked Questions (FAQ)

**What’s the difference between a Switch and a Toggle?**  
They are functionally similar. The `Switch` is used for binary control, while `Toggle` may include more customized visual behavior.

**Can I bind multiple actions to one Switch?**  
Yes. You can add several actions with different targets (e.g., `Crestron` + `HTTP Web Request`) and control their sequence using `Execution Delay`.

