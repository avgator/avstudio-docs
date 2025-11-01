---
title: "How to Assign Dynamic Values"
sidebar_label: "Assigning Dynamic Values"
description: "Learn how to assign dynamic values to element fields in AVstudio using the Pick Dynamic Value modal."
sidebar_position: 7
keywords:
  - avstudio
  - ui
  - elements
  - dynamic values
  - variables
  - parameters
  - state entry
  - data binding
  - editor
tags:
  - avstudio
  - elements
  - guide
  - dynamic
  - data
schema:
  "@context": "https://schema.org"
  "@type": "HowTo"
  "name": "Assigning Dynamic Values in AVStudio"
  "description": "Step-by-step guide for binding element fields to live data sources using the Pick Dynamic Value modal in AVStudio."
  "step":
    - "Locate a field that supports dynamic values."
    - "Click the dynamic value icon {–} next to the field."
    - "In the Pick Dynamic Value modal, choose a source such as Variable, Parameter, or State Entry."
    - "Save changes to apply the binding."
---

# How to Assign Dynamic Values

🎯 Learn how to assign dynamic values to element fields in AVstudio.  
This guide explains how to identify dynamic-enabled fields, open the `Pick Dynamic Value` modal, and choose between variables, parameters, or state entries for data binding.

---

## 👉 Identifying Dynamic Fields

Dynamic fields in AVStudio are marked with the `{–}` icon.  
When you hover over the icon, a tooltip appears showing `Assign dynamic value`.

Clicking this icon opens the `Pick Dynamic Value` modal, where you can link the selected field to a live data source.

![Assign Dynamic Value](img/assign-dynamic-value-icon.png "Dynamic value icon beside a field")

📌 The tooltip also indicates the field name where the value will be applied — for example, `Active Mode Index` or `Text CSS Class Name`.

---

## 👉 Opening the `Pick Dynamic Value` Modal

When you click the dynamic value icon `{–}`, the `Pick Dynamic Value` modal appears.  
At the top, you’ll see the name of the field you’re editing (e.g., `Active Mode Index`).

The modal includes three tabs for selecting your data source: `Variables`, `Parameter`, and `State entry`.

![Pick Dynamic Value Modal](img/pick-dynamic-value-modal.png "The Pick Dynamic Value modal showing Variable, Parameter, and State entry tabs")

---

## 👉 Choosing a Data Source

Each tab represents a different type of data binding available in AVStudio.

### `Variables`
Variables are placeholders for values that may change during runtime.  
They are often used to display or update content dynamically — for example, showing temperature data, playback status, or connection state.

📌 Example: A variable can update the text of a label from “Disconnected” to “Connected” when a system status changes.

---

### `Parameter`
Parameters define reusable configuration values that can be referenced across multiple elements or pages.  
When you select the `Parameter` tab, you can add or choose an existing parameter, set its data type (`Boolean`, `String`, or `Number`), and specify a default value.

![Select Parameter](img/select-parameter.png "Selecting a parameter and defining its type and default value")

📌 Example: A `Boolean` parameter can toggle a button’s state between `true` and `false`, controlling element visibility or action behavior.

---

### `State entry`
State entries are system or device state variables that reflect the current condition of a connected system.  
They are typically read from feedback channels and update automatically when the system changes.

📌 Example: A state entry can be bound to an indicator light, updating its color when a device turns on or off.

---

## 👉 Saving and Applying

After selecting the desired source, click `Save changes`.  
The chosen binding will now appear beside the field, showing a green confirmation message or bound label.

📌 Bound fields automatically update whenever the linked variable, parameter, or state entry changes.

---

## 📌 Key Points

- The `{–}` icon indicates that a field supports dynamic data binding.  
- Use `Variables` for live data, `Parameters` for reusable configurations, and `State entries` for system feedback.  
- Bound values automatically refresh when the linked source updates.  
- You can clear or reassign a dynamic value at any time by reopening the modal.

---

## ❓ Frequently Asked Questions (FAQ)

**Can I assign multiple dynamic values to one field?**  
No. Each field can only have one active dynamic source at a time.

**What happens if a variable or parameter is deleted?**  
The bound field will lose its reference and revert to its default or last known value.

**Can I apply functions to dynamic values?**  
Yes. You can use the `fx` icon next to the field to apply post-processing functions to modify how the dynamic value is displayed or calculated.

---

## Summary

Make your UI data-driven by:

- Using the `{–}` icon to bind fields to Variables, Parameters, or State entries
- Applying functions (fx) to transform values before rendering
- Relying on automatic updates when the bound source changes

This keeps elements in sync with live data and system feedback.
