---
title: Connect Project to Control System
sidebar_label: Connect to Control System
sidebar_position: 1
order: 1
tags:
  - avstudio
  - control-system
  - websocket
  - processor
  - toolbox
---

# Connect Project to Control System

This guide explains how to connect an existing AVStudio project to a control system using a WebSocket token. This enables real-time communication between your interface and the processor during testing and deployment.

:::tip Note
If you haven’t created a project yet, refer to [How to Create a Project](/docs/documentation/4-working-with-projects/4-1-creating-projects/4-1-creating-projects.md) before proceeding.
:::



## What You'll Need

Before connecting, make sure you have the following:

- An existing AVStudio project  
- Access to a control processor  
- The **IP address**, **IPID**, and **WebSocket token** for your processor  
- A basic control setup (e.g. digital input/output project for testing)

---

## Access Project Settings

To begin:

1. Open your project in AVStudio.
2. Click **Project Settings** in the left sidebar.
3. Open the **Control System** section.

---

## Configure Control System Details

In the Control System settings, enter:

| Field              | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| Processor IP       | The IP address of the processor you’re connecting to                       |
| IPID               | The integration partner ID used by your project (e.g., `1991`)             |
| WebSocket Token    | The secure token that enables real-time communication with the processor   |

👉 After entering the details, click **Save**.

> 🔒 The WebSocket token allows AVStudio to establish a real-time connection for sending commands and receiving feedback during development.

---

## Use the Toolbox for Real-Time Testing

Once your project is connected:

1. Open the **Toolbox** panel from the top toolbar.
2. Ensure it uses the same IP and token from your settings.
3. The Toolbox will connect and display real-time signal status.

You can now:
- Trigger commands from your interface
- View processor responses live
- Confirm logic and behavior without compiling

---

## Test with a Simple Setup

Try connecting to a basic control project with:
- One digital input
- Two digital outputs

This allows you to:
- Send a signal from the UI
- See feedback from the control system immediately

> ✅ If you can see feedback in the Toolbox, your connection is working correctly.

---

## Troubleshooting Tips

Having trouble connecting? Try the following:

- Verify that the processor is powered on and network-accessible
- Confirm that the IPID and WebSocket token match exactly
- Refresh the browser and re-open the Toolbox

---

Connecting your project to a control system is the first step in building dynamic, data-driven UIs in AVStudio. In the next article, we’ll explore how to create interactive elements like buttons and bind them to control logic.
