---
title: "How to Configure Dimensions"
sidebar_label: "Configuring Dimensions"
description: "Learn how to adjust element width and height in AVstudio using pixels, percentages, or dynamic values, plus inheritance tips."
sidebar_position: 6
keywords:
  - avstudio
  - ui
  - dimensions
  - width
  - height
  - layout
  - size
  - element
  - editor
  - design
tags:
  - avstudio
  - elements
  - guide
  - dimensions
schema:
  "@context": "https://schema.org"
  "@type": "HowTo"
  "name": "Configuring Dimensions in AVStudio"
  "description": "Step-by-step guide for setting width and height using pixels, percentages, or dynamic values in AVStudio."
  "step":
    - "Open the element in the Editor."
    - "Expand the Dimensions section in the properties panel."
    - "Enter the width and height values."
    - "Select a unit type: px, %, or dynamic."
---

# How to Configure Dimensions

🎯 Learn how to set or adjust the width and height of any element in AVstudio.  
This guide explains how to work with different measurement units, apply dynamic values, and understand how sizing behaves across responsive layouts.

---

## 👉 Locating the `Dimensions` Section

1. Open the page or subpage where the element is placed.  
2. Select the element in the `Editor` workspace.  
3. In the properties panel on the right, scroll down and expand `Dimensions`.  

![Dimensions Section](img/dimensions-section.png "Locate the Dimensions section in the properties panel")

---

## 👉 Setting `Width` and `Height`

1. Under `Dimensions`, enter numeric values for `Width` and `Height`.  
2. Each field includes a dropdown for selecting units: `px` (pixels) or `%` (percentage).  
3. Choose `px` for fixed dimensions or `%` for relative sizing based on container width or height.  

![Dimension Units](img/dimension-units.png "Select units for width and height")

📌 When using percentages, the element’s size adjusts relative to its parent container. This is useful for responsive layouts.

---

## 👉 Using Dynamic Values

1. Click inside the `Width` or `Height` field to activate the dynamic input option `{–}`.  
2. You can assign a variable, parameter, or state value to make the dimension change automatically.  
3. Use the `fx` icon if you need to apply a post-processing function to modify the bound value before rendering.  

📌 Dynamic values let elements resize automatically based on external data or system feedback.

---

## 📌 Key Points

- Use `px` for fixed sizing and `%` for responsive design.  
- Dynamic inputs (`{–}`) make dimensions flexible and data-driven.  
- Dimension settings can be inherited from parent containers in nested layouts.  
- You can reset or override inherited values directly in each element’s panel.

---

## ❓ Frequently Asked Questions (FAQ)

**Can I mix `px` and `%` values for width and height?**  
Yes. For example, you can set the width in `%` for responsiveness while keeping height fixed in `px`.

**What happens if I leave a field empty?**  
The element inherits its size from its parent container or default layout configuration.

**Can dynamic values override static ones?**  
Yes. When a dynamic value is applied, it takes priority over any manually entered number.

---

## Summary

Control element size by:

- Choosing px for fixed sizes or % for responsive sizing
- Binding dimensions to dynamic values for data-driven sizing
- Leveraging inheritance from parent containers where helpful

Use Fit/Reset and the editor preview to validate layouts across devices.
