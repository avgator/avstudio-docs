---
title: "How to Use the Player Element"
sidebar_label: "Player"
sidebar_position: 14
description: "Learn how to use and configure the Player element in AVStudio, including its properties, playback data, and state options."
keywords:
  - avstudio
  - ui
  - player
  - media
  - audio
  - video
  - playback
  - elements
  - data
  - guide
tags:
  - avstudio
  - elements
  - player
  - guide
  - audio
schema:
  "@context": "https://schema.org"
  "@type": "HowTo"
  "name": "Using the Player Element in AVStudio"
  "description": "Step-by-step guide for configuring the Player element in AVStudio, including data bindings, visibility, and playback controls."
  "step":
    - "Add the Player element to your page or subpage."
    - "Configure its dimensions and available modes."
    - "Set up player data for headers, metadata, repeat, shuffle, and sources."
    - "Define visibility and state behaviors."
---

# How to Use the Player Element

🎯 The `Player` element is used to display and control media playback within your project.  
This article explains how to add and configure a Player, manage its data sections, and customize its behavior through visibility and state settings.

This guide covers:  
- Adding the Player element  
- Editing its properties  
- Managing playback data and visibility  

---

## 👉 Adding a Player Element

To add a Player element, follow the steps in [How to Add an Element](../../../4-5-adding-elements/4-5-adding-elements.md).  

Once added, you can select it in the `Editor` to configure its properties and behavior.

---

## 👉 Player Properties Overview

When you select a Player element, the properties panel displays multiple configuration sections.

![Player Overview](img/player-overview.png "Player element displayed in the Editor")

### `Player Friendly Name`
Defines the label or identifier for the element. Use clear names to make the player easy to find in the hierarchy.

### `Element Constraints`
Sets the X and Y axis alignment within the layout.  
These control how the player is positioned relative to its container.  
(See the upcoming **How to Configure Element Constraints** guide.)

### `Z Index`
Controls the layer order of the element. Higher values bring it to the front of overlapping components.

### `Dimensions`
Defines the player’s width and height.  
You can enter fixed values or assign dynamic bindings.  
See [How to Configure Dimensions](../../../4-6-configuring-dimensions/4-6-configuring-dimensions.md) for details.

### `Mode Selector by Index or Name`
Specifies which playback mode or layout variation the player should display.  
Can be bound dynamically using the `{–}` icon or the [Assigning Dynamic Values](../../../4-7-assigning-dynamic-values/4-7-assigning-dynamic-values.md) guide.

### `Available Player Modes`
Lists the modes you can assign to switch between visual or functional layouts (for example, Default, Compact, or Full).  
You can create additional modes by clicking the `+` button beside the list.

### `Player CSS Class Name`
Specifies a CSS class for applying custom styles or visual adjustments to the player.  
This allows consistent styling across multiple player instances.

---

## 👉 Configuring Player Data

The `Player Data` section contains grouped properties that define how playback information is displayed and managed.

![Player Data Panel](img/player-data-panel.png "Player Data configuration in the properties panel")

- **Header Text** – Defines top-line text such as `Player Name`, `Current Track`, and `Next Track Name`.  
- **Meta Info** – Displays playback details like `Meta Title`, `Subtitles`, and `Meta Image`.  
- **Repeat / Shuffle** – Controls playback modes and signal bindings.  
- **Seek** – Manages playback position, total length, and progress tracking.  
- **Controls** – Includes toggle and feedback options for Play, Pause, and Skip buttons.  
- **Source List** – Lists media sources and selectors for track navigation.  

---

## 👉 Configuring State and Visibility

The `State` section manages visibility and conditional rendering.

### `Visibility`
Specifies when the player should be shown based on orientation or dynamic signals.  
You can bind visibility to direct values or to Crestron feedback.

📌 Optionally enable `Reserve space while hidden` to maintain layout consistency when the player is hidden.

---

## 📌 Key Points

- The `Player` element supports multiple playback modes and data bindings.  
- Use `Player Data` groups to configure information such as metadata, controls, and sources.  
- Dynamic bindings allow the player to react to live system data.  
- Visibility can be tied to feedback or triggers for adaptive layouts.

---

## ❓ Frequently Asked Questions (FAQ)

**Can I display both audio and video content in one player?**  
No. Each player instance supports a specific media type — use separate players for different media.

**Can I customize the player layout for each mode?**  
Yes. Create and edit player modes under `Available Player Modes` to design different visual states.

**How can I bind dynamic track information?**  
Use the `{–}` icon beside a metadata field and follow the steps in [Assigning Dynamic Values](../../../4-7-assigning-dynamic-values/4-7-assigning-dynamic-values.md).


