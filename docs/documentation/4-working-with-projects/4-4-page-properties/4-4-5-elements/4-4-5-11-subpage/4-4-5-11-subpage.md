---
title: "Subpage"
sidebar_label: "Subpage"
sidebar_position: 11
description: "Learn how to add and configure Subpage elements in AVStudio, including layout, appearance, and action properties."
keywords:
  - avstudio
  - elements
  - ui
  - subpage
  - container
  - navigation
  - responsive
  - adaptive
tags:
  - avstudio
  - elements
  - ui
  - subpage
  - container
  - navigation
schema:
  "@context": "https://schema.org"
  "@type": "HowTo"
  "name": "How to Add and Configure a Subpage in AVStudio"
  "description": "Step-by-step guide on creating, linking, and configuring Subpage elements within AVStudio projects."
  "step":
    - "Add a Subpage element from Page Containers or directly from the Editor."
    - "Configure dataset source, dimensions, and mode settings."
    - "Adjust appearance, parameters, and state visibility."
    - "Add actions and assign signals."
---

# Subpage

The `Subpage` element allows you to display separate pages or layouts within a project. Subpages are often used to organize complex interfaces, show popups, or dynamically load content within a defined area of the main layout.

**Summary:**  
This guide explains how to add a `Subpage` element in AVStudio and configure its data source, dimensions, design, and action behavior.

---

## Adding a Subpage Element

There are several ways to add a `Subpage` element in AVStudio.

### 1. From `Page Containers`

1. Go to `Container` under `Page Containers`.
2. Click the dropdown arrow, select `Elements`, and choose `Add Element`.
3. In the `Type` dropdown, select `subpage`.
4. Choose whether to `Select subpage` or `Create New Subpage`.

When `Create New Subpage` is selected:
- Enter a name in the `New subpage name` field.
- Choose a design paradigm: `Adaptive` or `Responsive`.
- Click `Add Element` to create and add the new subpage.

![Add Subpage (Select Existing Subpage)](img/add-subpage-select-existing.png "Select or create a new subpage element from the Page Containers menu.")

When `Select subpage` is selected:
- Use the search bar to select from existing subpages in the project.
- Once selected, click `Add Element` to link it.

### 2. From the `Editor`

1. Click the subpage icon from the toolbar on the right-hand side of the `Editor`.
2. The `Select target subpage` modal opens.
3. Choose `Select subpage` to link to an existing subpage, or `Create New Subpage` to make a new one.
4. Click `Create new subpage` to add it to the layout.

![Select Target Subpage](img/select-target-subpage.png "Select target subpage from the Editor toolbar.")

---

## Subpage Properties

When the `Subpage` element is selected in the `Editor`, its properties appear on the right-hand panel in the order below.

### Subpage friendly name
Specifies the name of the subpage. Click the edit icon to rename it. The name is used to identify the subpage across the project.

### Subpage dataset source
Choose how the subpage receives data.

| Option | Description |
|---|---|
| `Static` | Uses fixed data. No additional configuration. |
| `Dynamic` | Opens `Select datasource to work with`, where a data source can be selected. |

### Dimensions
Controls the size of the subpage container.

| Field | Description |
|---|---|
| `Width` | Enter a value or use `{-}`. Default placeholder shows `Inherits From Subpage`. Units: `px` or `%`. |
| `Height` | Enter a value or use `{-}`. Default placeholder shows `Inherits From Subpage`. Units: `px` or `%`. |

### Mode selector by index or name
Selects a mode for the subpage using an index or a name.

- Enter a value directly, use `{-}`, or click `fx` to choose an `Assign post-processing function`.

### Available subpage modes
Manage subpage modes.

- `Default` is included automatically.  
- Click `+` to open `Create new subpage mode`, then set the mode name and options to add it.

### Subpage CSS classname
Sets a CSS class for styling.

- Enter a class directly (default: `subpageElement`), use `{-}`, or click `fx` to select a post-processing function.

### Parameters
Shows parameters exposed by the source subpage (read-only notice appears when none are available).  
Example message: `Source subpage New subpage doesn’t have parameters.`

---

## Appearance

Controls background, typography, and visual effects.

### Background

| Setting | Description |
|---|---|
| `Background color` | Pick a color or use `{-}`. |
| `Background elements blur` | Adjust blur amount with the slider or numeric input. |

### Font

| Setting | Description |
|---|---|
| `Font family` | Choose a font (default `Default`). |
| `Font size` | Enter a size or use `{-}`. Units: `px`. |

### Border
Toggle between `Default` and `Override` to control border styling.

### Shadow
Toggle `None` / `Enabled` to control shadow rendering.

### Reflection
Toggle `None` / `Enabled` to add a reflection effect.

---

## Content

Select the target subpage source.

| Setting | Description |
|---|---|
| `Select source (target subpage)` | Choose `Manual` to pick from existing subpages, or `Dynamic by name` to link by name dynamically. |
| Subpage picker (when `Manual`) | Choose the target from the dropdown (e.g., `New subpage`). |

---

## State

Controls visibility and signal states for the subpage.

### Visibility

| Setting | Description |
|---|---|
| `Orientation visibility` | Show in `Both`, Portrait, or Landscape. |
| `Direct Value` / `Crestron FB` | Control visibility directly or via Crestron feedback. |
| `Visibility dynamic value` | Use `{-}` to bind a dynamic controller for visibility. |
| `Reserve space while hidden` | Keep layout space when hidden. |

### Disabled signal
Enter a signal name directly or use `{-}` to control when the subpage is disabled.

---

## Actions

### Adding a new action

1. Click `Add new action`.  
2. The `Create new action for subpage` modal opens.  
3. Configure:  
   - `Name` — action name.  
   - `Behaviour` — when it runs (e.g., `On Change`).  
   - `Execution Delay` — delay in `ms`.  
4. Select a target tab: `Crestron`, `Routing`, `Variables`, `Parameters`, `Overlays`, `Functions`, `HTTP Web Requests`, `Web Sockets`, or `Audio`.  
5. Example (`Crestron` tab):  
   - `Type` — e.g., `Push Digital`.  
   - `Signal Name` — enter/assign.  
   - Choose `Push onChange Value` or `Push custom Value`.  
6. Click `Create action` to save.

---

## Key Points

- Use descriptive names for subpages for easier project tracking.  
- Set `Dynamic` dataset sources for data-driven layouts.  
- Use `Adaptive` or `Responsive` design paradigms based on screen orientation needs.  
- Keep reflections and shadows simple for better performance.

---

## Frequently Asked Questions (FAQ)

**What’s the purpose of a Subpage in AVStudio?**  
Subpages allow modular design by displaying sections or layouts within a container. This helps manage complex projects efficiently.

**Can I reuse the same Subpage across multiple pages?**  
Yes. You can link a single subpage to multiple parent containers, allowing shared or dynamic content.

**What’s the difference between Adaptive and Responsive?**  
`Adaptive` uses fixed layouts optimized for set screen sizes, while `Responsive` adjusts dynamically based on resolution and orientation.
 