---
title: Switch (Deprecated)
sidebar_label: Switch (Deprecated)
sidebar_position: 10
description: Deprecated Switch element retained for compatibility; prefer State Control in new projects.
tags:
  - avstudio
  - elements
  - switch
  - deprecated
---

# Switch (Deprecated)

:::danger Deprecated
The Switch element is deprecated and will be removed in a future release. It is retained for backward compatibility only and should not be used in new projects.
:::

Replacement: Use `State Control` for modern on/off state management.

## Status

- Maintenance: Critical fixes only
- New features: None planned
- Removal: Scheduled for a future version (date TBA)

## Existing Projects

Existing Switch instances will continue to function until removal. Plan migration during routine refactoring cycles.

## Migration Guidance (Optional)

1. Identify all pages containing Switch.
2. Record any dynamic bindings or actions attached to the element.
3. Replace with current supported control(s) providing equivalent on/off functionality (prefer `State Control`).
4. Reattach actions and verify layout and styling.
5. Test interaction and any dependent logic (signals, variables, parameters).

## Known Limitations

- Styling options are not being expanded.
- No further performance improvements will be applied.
- Not guaranteed to be compatible with future advanced theming features.

## FAQ

**Will existing switches break immediately?**  
No. They remain functional until the formal removal release.

**Is there an automatic migration tool?**  
Not at this time; manual replacement is recommended.

**Will the deprecation timeline be announced?**  
Yes—final removal will be communicated in release notes prior to change.

## Changelog

- Marked deprecated: (internal tracking date)


