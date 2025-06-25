---
title: Button Element
sidebar_label: Button
sidebar_position: 1
order: 1
tags:
  - avstudio
  - elements
  - button
  - ui-elements
---

# Button Element

The **Button** is one of the most commonly used elements in AVStudio. It can be used to trigger actions, navigate between pages, or toggle visibility of components.

---

## How to Add a Button

1. Open your project in AVStudio and go to the **Editor** view.
2. From the left panel, click on **Elements**.
3. Click the **Add Element** dropdown and choose **Button**.
4. The button will appear in your layout.

---

## Button Settings Overview

Once selected, the button's settings appear in the right panel.

---

### Basic Properties

| Setting             | Description |
|---------------------|-------------|
| **Button Display Name** | Visible label in the layout and project |

---

### Size Settings

- Set button width and height using fixed px or percentage values.
- Margins allow spacing from surrounding elements.

---

### Class Name

- **Button Class Name**: Add a custom class for styling.
---

## Styling and Design Options

### Sizing

- Adjust **Text Size**, **Gap**, and **Padding**.
- Enable **Advanced Padding** for individual sides (top, bottom, left, right).

### Icon Settings

- Toggle **Use image as icon**
- Choose from:
  - **Library** (built-in assets)
  - **URL** (external image)
- Set:
  - **Icon position** (Left, Right, etc.)
  - **Size**, **Color**, and **Spacing**

---

### Design

- Choose **Design Preset** (Default or custom themes)
- Button width (Normal, Full-width, Auto)
- **Text Alignment**, **Wrap**, and **Font Type**
- Set **Text Color** and **Background Color**

---

### Borders and Shadows

- Border style: Solid, Dotted, Dashed
- Border color and width
- Border radius for rounded corners
- Shadow options:
  - Enable/Disable
  - Customize offset, blur, spread, and color
  - Toggle **Inset Shadow**

---

### Reflect

- Add a reflection effect to the bottom of the button
- Customize start/end opacity and vertical offset

---

### Button Text

- Set the label displayed on the button face

---

## Actions

You can assign actions such as:

- Navigate to another page
- Toggle a parameter
- Send a signal
- Trigger visibility

👉 Click **Add new action** to configure what the button does on click.

---

## State Settings

Control when the button appears or how it behaves:

| Setting                 | Purpose |
|-------------------------|---------|
| **Creation Visibility** | Show button on Mobile/Desktop/Both |
| **Visibility Signal**   | Show/hide based on logic or parameter |
| **Reserve Space When Hidden** | Keeps layout intact even when button is hidden |
| **Disabled Signal**     | Toggle interactivity using a parameter |
| **Press State**         | Add a press-down animation or visual effect |

---

## Usage Tips

- Buttons are best paired with parameter toggles, navigation, or simple logic actions.
- Use consistent padding and class naming to manage appearance across devices.
- Add visibility rules to customize UI behavior across page states or roles.
---

In the next element guide, we’ll cover the **Label** element.
