---
title: Alignment Settings
sidebar_label: Alignment
description: Learn how to control page-level alignment and container flow, including orientation-based layouts.
sidebar_position: 2
order: 2
tags:
  - avstudio
  - page-properties
  - alignment
  - layout
  - container flow
---

# Alignment Settings

Learn how to control page-level alignment and container flow, including orientation-based layouts.

The `Alignment` panel lets you control how containers are arranged on the page. This setting affects the overall layout flow and helps you visually align elements based on the orientation or structure of your page.

## Using the Alignment Panel

The alignment settings are available in the left-hand panel under `Alignment`. These options define how your containers flow across the page canvas.

![Alignment panel interaction demo](./img/alignment-panel-demo.gif)

### Flow by Orientation

👉 Toggle the `Flow by orientation` switch to enable orientation-based layout behavior.

When this option is enabled, the container layout will automatically respond to the device’s screen orientation to `Portrait` or `Landscape`. This is useful when designing interfaces that need to adapt to different mounting setups or device rotations.

### Layout Flow Options

Once orientation-based flow is enabled, you’ll see controls for:

- **Horizontal flow** – Containers are positioned left to right  
- **Vertical flow** – Containers stack from top to bottom  

👉 Use the icons to select your preferred direction. The preview area on the right will update in real time to reflect your chosen layout style.

## When to Use Alignment Settings

These settings are ideal for:

- Pages that need to support both portrait and landscape devices  
- Touchscreen interfaces mounted in different orientations  
- Quick prototyping of linear layouts without manually positioning each container

:::tip Note
Alignment settings apply to the page-level container flow. You can still control layout inside individual containers using flex properties, margins, and padding.
:::


