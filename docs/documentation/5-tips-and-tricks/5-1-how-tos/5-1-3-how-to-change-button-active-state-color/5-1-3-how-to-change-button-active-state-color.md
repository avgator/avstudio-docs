---
title: "How to Change Button Active State Color"
sidebar_label: "Change Button Active State Color"
sidebar_position: 3
tags:
  - button
  - styling
  - avstudio
  - css
  - modes
---

# How to Change Button Active State Color

By default, all buttons in AVstudio use a mint green color when pressed or active. If you’d like to customize this state (for example, changing the pressed color of a mute button), there are several methods you can use.

## Option 1 – Custom CSS

You can override the button’s pressed state with CSS.

1. Open **Project CSS** from the left sidebar.  
2. Add your custom CSS snippet.  

AVstudio automatically applies the `.isPressed` class when the button is pressed.

```css
/* Default look */
.buttonElement {
  background-color: #444;
  color: #fff;
}

/* Pressed/active state */
.buttonElement.isPressed {
  background-color: #0ea5e9 !important; /* custom color */
  color: #ffffff !important;
}
```

- Use `!important` to ensure your style overrides the default.  
- To limit this effect to specific buttons, add a **custom class name** (for example, `blueButton`) in **Button CSS Classname** and target it.


```css
.blueButton.isPressed {
  background-color: #0ea5e9 !important;
  color: #ffffff !important;
}
```

## Option 2 – Mode Selector by Index or Name

Use this method if you want the button to stay in a new state based on feedback, not just while pressed.

1. Select the button in the editor.  
2. In the right-hand panel, under **Mode Selector by Index or Name**, set the parameter (for example, `feedback`).  
3. Link this parameter to a **Signal FB Setter** (for boolean parameters, assign a digital join number).  
4. Add available button modes such as:  
   - Mode 0 → Default (normal)  
   - Mode 1 → Active (pressed/feedback)  
5. Customize **Design properties** for each mode (color, text, borders, etc.).  

When the parameter changes, the button automatically switches to the correct mode.

- For boolean parameters, you usually only need 0 (false) and 1 (true), but you can define more modes if needed.  
- In this setup you don’t need the **Pressed Signal** from the State menu — the mode change is fully controlled by the parameter.

## Option 3 – Theme (future option)

In upcoming versions of AVstudio, you’ll be able to edit the **Project Theme** directly and set default colors for pressed/active states.  
For now, this feature is not yet available.

---

## Summary

- ✅ Use **Custom CSS** (Option 1) for a quick pressed color override.  
- ✅ Use **Mode Selector** (Option 2) for persistent feedback states.  
- ✅ **Theme editing** (Option 3) will simplify this process in a future release.  