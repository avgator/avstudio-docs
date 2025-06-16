---
title: Page Actions
sidebar_label: Page Actions
sidebar_position: 6
order: 6
tags:
  - avstudio
  - page-actions
  - triggers
  - events
  - automation
---

# Page Actions

The `Page Actions` section allows you to define automatic or manual behaviors that are triggered when a page loads, exits, or responds to a specific event. These actions help power automation, control signals, and data exchange inside your AVstudio project.

You can create as many actions as you need to support system logic, integrations, and interaction-based functionality.

---

## Accessing Page Actions

To get started:

1. Go to the left panel and click `Page Actions`  
2. If there are no existing actions, the panel will display “No actions yet…”  
3. Click the `Add new action` button to begin

![Accessing page actions and adding a new one](./img/page-actions-add.png)

---

## Creating a New Page Action

After clicking `Add new action`, the **Create new action for page** window will appear. This is where you'll configure your action settings.

![Create new action window](./img/page-actions-configuration.png)

### 1. Name

Enter a clear and logical name for your action.  
*Example: `StartUpSignal`, `ExitCleanup`, `SyncParameters`*

### 2. Behaviour

This determines **when** the action is triggered. Options include:

- `On Load`: Runs when the page is first opened
- `On Exit`: Runs when the user leaves the page
- `Manual`: Can be triggered through logic, button taps, or conditional flows

Use `On Load` for initializing components or sending startup signals.  
Use `Manual` for user-controlled actions like a `Refresh Data` button.

### 3. Execution Delay

Optional field to delay the action after its trigger.

- Enter the delay time in milliseconds (`ms`)
- Default is `0` (no delay)

This is useful when sequencing multiple actions or waiting for transitions to complete.

### 4. Action Type

Select the category for your action. Available tabs include:

- `Crestron`: Send or receive Crestron control signals
- `Routing`: Manage screen navigation or routing logic
- `Variables`: Set or update global/local variables
- `Parameters`: Pass or reset page-specific parameters
- `Overlays`: Show or hide overlays (like modals or subpages)
- `Functions`: Trigger reusable logic blocks
- `HTTP Web Requests`: Make HTTP calls to external APIs
- `Web Sockets`: Communicate with real-time socket services
- `Audio`: Manage audio state or signal routing

Each tab provides a form tailored to its function. For example, in the `Crestron` tab, you can push a signal like `True`, `False`, or `Pulse` to a device.

### 5. Final Step

Once you’ve finished configuring the action, click `Create action` to save.

The new action will now appear in your page’s action list, ready to be triggered based on the assigned behavior.

---

## Summary

Page Actions help you automate page behavior, control signal flow, and trigger dynamic logic when needed. You can:

- Set startup or teardown behavior
- Push control signals
- Update data sources
- Trigger overlays or functions
- Communicate with external APIs

Use the `On Load`, `On Exit`, or `Manual` behavior modes depending on how and when the action should occur.

:::tip Note
For best practices, give every action a clear and descriptive name. This makes it easier to debug and maintain your page logic—especially as projects grow more complex.
:::
