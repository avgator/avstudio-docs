---
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 2
order: 2
tags:
  - avstudio
  - troubleshooting
  - issues
---

# Troubleshooting

This page contains common AVStudio issues and how to fix them quickly.

---

## Toolbox Not Connecting

- Check **Project Settings → Control System** for correct IP, IPID, and WebSocket token.
- Open the control processor’s web UI in a browser tab to refresh SSL trust.
- Reload AVStudio and try the Toolbox again.

---

## Layout or UI Issues

- Use the **Console** to verify parameters or logic that might be hiding UI.
- Adjust layout mode (Adaptive/Responsive) if things aren’t aligning correctly.
- Use **Spacer elements** in containers instead of manual padding or margins.

---

## Editor Is Slow or Unresponsive

- Close unused tabs in your browser.
- Avoid using too many effects (like shadows) across sub-pages.
- Consider splitting complex projects into smaller modules.

---

## Quick Fixes Summary

| Problem               | Suggested Fix                             |
|-----------------------|--------------------------------------------|
| Toolbox won’t connect | Refresh trust, check connection settings  |
| Layout looks broken   | Reset zoom, check layout mode             |
| UI not showing        | Confirm page/sub-page visibility logic    |
| Editor lagging        | Reduce nested pages and visual effects    |

This list will grow over time based on user feedback and platform changes.
