---
title: "Project Settings Overview"
sidebar_label: "Project Settings"
sidebar_position: 3
order: 3
tags:
  - avstudio
  - project configuration
  - environment settings
  - connectors
  - webxpanel
  - authorization
---

# Project Settings Overview

The Project Settings panel allows you to configure environment-specific details, enable project features, and connect your project to external systems. Below is a breakdown of the available settings based on the labeled UI.

## Navigating the Project Settings Interface

The Project Settings layout is divided into configurable areas, each with one or more options. This table explains the numbered and lettered items from the annotated images.

---

## Project Information

This section captures high-level project details such as the name, theme, and splash screen configuration.

![Project information](./img/project-information.png)

| Element                           | Description                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------- |
| **① Project Name**                | The internal name for the project as displayed across AVstudio.                         |
| **② Project Theme**               | Selects the visual style or preset theme applied to the project.                        |
| **③ Splash Screen Logo Image ID** | Assigns a logo image from the asset library for splash screen display.                  |
| **④ Splash Screen Text**          | Text shown during project loading; often used for titles or branding.                   |
| **⑤ Save Project Settings**       | Commits any changes made to the settings across all sections.                           |
| **⑥ Environment Tabs**            | Tabs to switch between environment-specific settings (e.g., Default, Developers, iPad). |
| **⑦ Project Connectors Section**  | Container for configuring control system signals and integrations like Crestron.        |
| **⑧ Dataset Options Section**     | Area to configure external API endpoints and secure header values for dataset access.   |


---

## Environment Configuration

This part of the interface allows you to configure specific project environments, including naming, debugging, and build archive naming.

![Environment configuration](./img/environment-configuration.png)

| Element | Description |
|---------|-------------|
| **① Default Project Settings Tab** | Active tab for configuring the default environment. |
| **② Environment Name** | Optional field to label this environment (e.g., “Staging”, “Dev”). |
| **③ Enable Debug Console** | Enables developer output console for real-time feedback. |
| **④ Build Archive Name** | The name of the compiled `.ch5z` build file generated for this project. |

---

## Crestron Signal Mapping

This section provides fields to map AVstudio signals to Crestron control events and statuses.

![Crestron signal mapping](./img/crestron-signal-mapping.png)

| Element | Description |
|---------|-------------|
| **① Crestron Connectors Toggle** | Expands/collapses the connectors section to reveal available signal fields. |
| **② Analog Flip Page Signal** | Sets the analog signal for controlling page navigation. |
| **③ Serial Flip Page Signal** | Assigns a serial signal for step-based or conditional controls. |
| **④ Notification Signal** | Activates in-app or system-level notifications. |
| **⑤ Refresh All DataSources** | Triggers a full refresh of every bound data source. |
| **⑥ Refresh Single DataSource** | Allows targeting and refreshing of a single source. |
| **⑦ Connected Status Indicator** | Uses a digital signal to indicate system connection status. |

---

## WebXpanel Configuration

Configure WebXpanel deployment parameters here, including host targeting and authentication.

![WebXpanel configuration](./img/webxpanel-configuration.png)

| Element | Description |
|---------|-------------|
| **① Host** | The hostname or IP of the system controller for WebXpanel access. |
| **② IPID** | Integration ID assigned for control communication. |
| **③ Room ID** | Identifies the current room session context. |
| **④ Auth Token** | Secure token used for authenticating access to the WebXpanel session. |
| **⑤ Web Connectors (Disabled)** | Placeholder for potential web-based integrations (currently not configured). |
| **⑥ Websocket Connectors (Disabled)** | Reserved for websocket-based integrations or real-time streams. |



## Dataset Integration Options

Use this section to configure dataset URLs and authorization headers for API-based integrations.

![Dataset integration options](./img/dataset-integration-options.png) 

| Element | Description |
|---------|-------------|
| **① Dataset Base URL** | The endpoint or root URL from which dataset resources are pulled. |
| **② Authorization Header Key** | The header key sent in API requests for auth (e.g., `Authorization`). |
| **③ Authorization Header Value** | The secret value or token sent with the key for authentication. |

