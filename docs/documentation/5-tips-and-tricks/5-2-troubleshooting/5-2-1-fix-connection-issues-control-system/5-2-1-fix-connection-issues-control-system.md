---
title: Fix Connection Issues with Control System
sidebar_label: Fix Connection Issues
sidebar_position: 1
order: 1
tags:
  - avstudio
  - troubleshooting
  - control-system
  - connection
---

# How to Fix Connection Issues with the Control System in AVStudio

If you click the **Connect** button in AVStudio and it fails to link with your control system, this guide will help you understand what’s happening — and how to fix it quickly.

---

## What Happens When You Click “Connect”

When you press the **Connect** button in AVStudio:

- The system attempts to open a real-time WebSocket connection with your control processor.
- A successful connection appears:
  - In the top menu bar as **Connected**
  - In the right-hand console with a message like  
    `Connected to wss://192.168.254.22...`
- Once connected, you can test live signals, commands, and feedback from your UI in real time.

---

## Troubleshooting: If the Connection Fails

If the connection doesn't go through, it might be caused by:

- **Security or session timeout** from the control processor
- **Cached tokens or browser session issues**

This often happens if you haven’t used the control system for a few days.

---

## Quick Fix

:::tip Note
Open the processor interface directly to refresh browser trust.
:::

Follow these steps:

1. In a new browser tab, open the control system's URL directly.  
   *Example: `https://192.168.254.22`*
2. Log in or approve any security prompts shown by the processor.
3. Once done, **close the tab**.
4. Go back to AVStudio and click **Connect** again.

✅ It should now connect successfully.

This workaround helps the browser re-establish trust or session recognition with the processor.

---

## Summary

| Step                        | Action                                             |
|-----------------------------|----------------------------------------------------|
| Connection fails            | May be due to session or SSL trust expiration     |
| Open control system in tab  | Log in or approve security prompts if shown       |
| Retry in AVStudio           | Close tab and click **Connect** again             |

If the issue persists, double-check the **IP address**, **WebSocket token**, and network reachability in **Project Settings → Control System**.
