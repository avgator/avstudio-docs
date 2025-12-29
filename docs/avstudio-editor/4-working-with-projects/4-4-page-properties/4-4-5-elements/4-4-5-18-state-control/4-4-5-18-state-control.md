---
title: State Control
sidebar_label: State Control
sidebar_position: 18
order: 18
tags:
  - avstudio
  - state-control
  - element
  - toggle
---

# State Control

The `State Control` element replaces `Switch` and provides a clear ON/OFF control for managing binary state, visibility, or feature activation.

## Adding a State Control Element

Follow the steps in [How to Add an Element](../../../4-5-adding-elements/4-5-adding-elements.md). In the `Type` dropdown, select `State Control`, then configure options in the right-side panel.

## Switch Friendly Name

The UI shows `Switch Friendly Name` and the default name is `Switch`. Click the pencil icon next to the label to rename the element. This friendly name appears in the editor and helps you identify the element across the project.

## Switch Dataset Source

Choose how the element receives or references its data:

- `Static`: Provides a fixed configuration.
- `Dynamic`: Opens the `Select Data Source to Work With` modal to choose from available sources.

## Dimensions

Define the element’s width and height. Each field supports dynamic or direct input:

- `Width`: Use `Assign dynamic value` `{−}` to bind from `Variables`/`Parameter`, or enter a numeric value and select a unit (`px` or `%`).
- `Height`: Use `Assign dynamic value` `{−}` to bind from `Variables`/`Parameter`, or enter a numeric value and select a unit (`px` or `%`).

## Mode Selector by Index or Name

Control which state/mode is active using a numeric index or name.

- `Assign dynamic value` `{−}`: Opens the `Pick dynamic value` modal (`Variables`, `Parameter`).
- `Assign post-processing function` `fx`: Opens `Select post-processing function` to transform the value before applying.

## Available Modes

Manage modes the element can toggle between. A `Default` mode is always present.

- Click `+` to open `Create new mode`.
- Configure `Name`, optionally `Copy from` an existing mode, and toggle `Separate actions for this mode` when actions should be distinct.

## State Control CSS Classname

Assign a custom CSS class to target the element with project styles. The default may be `stateControlElement`.

- `Assign dynamic value` `{−}`: Bind from `Variables` or `Parameter` via the `Pick dynamic value` modal.
- `Assign post-processing function` `fx`: Transform the value before applying.

## Appearance

### Color & Background

Configure colors:

- `Default Color`: Base color of the control.
- `Pressed Color`: Color shown while pressed/active.
- `Text Color`: Color of labels/text. Supports `Assign dynamic value` `{−}`.

### Font

Control typography:

- `Font Family`: `Default` uses the project’s default font family.
- `Font Size`: `Assign dynamic value` `{−}` or enter a numeric value and unit (`px`, `em`, `vh`, `vw`).
- `Text Transform`: `None`, `Uppercase`, `Lowercase`, `Capitalized`.

### Border

Define border style:

- `Corners Radius`: `Assign dynamic value` `{−}` or enter a numeric value (unit: `px`).
- `Thickness`: `Assign dynamic value` `{−}` or enter a numeric value (unit: `px`).

### Reflection

Control reflection with `Reflect`:

- `None`: No reflection.
- `Enabled`: Shows `Align` (`Top`, `Bottom`, `Left`, `Right`), `Offset` (numeric), `Start Opacity`, `End Opacity` (slider + direct entry).

## Content

Configure labels for ON/OFF states.

- `On Text`: Label when ON. Supports `Assign dynamic value` `{−}`.
- `Off Text`: Label when OFF. Supports `Assign dynamic value` `{−}`.

## State

Configure visibility and interactivity.

### Visibility

- `Orientation Visibility`: `Both`, `Portrait Only Visible`, `Landscape Only Visible`.
- Mode: `Direct Value` or `Crestron FB`.

When `Direct Value` is selected:

- `Visibility Dynamic Value`: `Assign dynamic value` `{−}` or type a direct expression.
- `Reserve space while hidden`: Toggle ON/OFF.

When `Crestron FB` is selected:

- `Visibility Signal`: Enter a signal or use `Assign dynamic value` `{−}`.
- `Reserve space while hidden`: Toggle ON/OFF.

### Disabled Signal

- `Disabled Signal`: Enter a value or use `Assign dynamic value` `{−}` to disable the element.

## Actions

Define what happens when the State Control is interacted with.

- Click `Add new action` to open the `Create new action for State Control` modal.
- Core fields: `Name`, `Behaviour`, `Execution Delay` (ms), `Threshold` (if shown).
- Integration tabs: `Crestron`, `Routing`, `Variables`, `Parameters`, `Overlays`, `Functions`, `HTTP Web Requests`, `Web Sockets`, `MQTT`, `Audio`.
- Use `Create action` to save or `Cancel` to discard.
