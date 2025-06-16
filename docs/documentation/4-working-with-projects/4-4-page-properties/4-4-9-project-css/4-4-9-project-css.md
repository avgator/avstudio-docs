---
title: Project CSS
sidebar_label: Project CSS
sidebar_position: 9
order: 9
tags:
  - avstudio
  - css
  - project-theme
  - global-styles
---

# Project CSS

The `Project CSS` section allows you to define and manage custom CSS that applies globally across your AVstudio project. This gives you more control over the appearance of your layout, especially when visual configuration options are not enough or when you want to apply consistent branding across all pages.

---

## Project Global CSS

At the heart of this feature is the **Project Global CSS** field.

- Click the black code field labeled `/* Your css code here */` in the right-side panel  
- This opens the **CSS Editor**, where you can type or paste your custom CSS code  
- Any CSS you enter will be applied globally to your project

This global CSS will affect all components and containers unless overridden by local or inline styles.

---

## CSS Editor Layout Options

The CSS editor supports multiple display modes for convenience and productivity:

- **Dock Left** – Shows the CSS editor on the left side of the screen  
- **Dock Right** – Moves the editor to the right side  
- **Fullscreen** – Expands the editor to take up the entire screen

These layout toggles are found in the top-right corner of the CSS editor. Choose the one that best suits your editing style or screen layout.

---

## When to Use Project CSS

While most styling in AVstudio can be managed using built-in controls, the Project CSS feature is helpful when you need:

- To enforce a consistent design across many pages  
- More advanced styling rules than what the UI provides  
- Theme tweaks that apply to classes or elements throughout your interface

---

## Example Use Cases

Here are a few examples of how global CSS might be used:

```css
/* Typography */
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333333;
}

h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

/* Spacing Utility */
.spacer {
  margin-bottom: 20px;
}

/* Custom Button Styles */
button {
  background-color: var(--primary);
  border-radius: 8px;
  padding: 12px 20px;
  border: none;
  color: white;
}
```
---

## Summary
Use the Project CSS editor when you need global control over layout, spacing, fonts, or branding. It's an essential tool for advanced users who want to extend the visual flexibility of AVstudio beyond the available UI settings.

For clean and maintainable CSS, group your rules by component type (e.g., buttons, headers) or use class-based naming that matches your AVstudio structure.