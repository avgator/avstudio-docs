---
title: "Setting Up Connectors"
sidebar_label: "Setting Up Connectors"
description: "Learn how to manage and configure different types of connectors in AVstudio to enable communication between your project and external systems or devices."
sidebar_position: 8
keywords:
  - avstudio
  - connectors
  - mqtt
  - websocket
  - crestron
  - data exchange
  - integration
  - project settings
tags:
  - avstudio
  - connectors
  - integration
  - setup
  - guide
---

# Setting Up Connectors

Learn how to manage and configure different types of connectors in AVstudio to enable communication between your project and external systems or devices.

Connectors in AVstudio allow your project to communicate with external systems and devices. Each connector type defines how data is exchanged or synchronized between the interface and the target environment.

You can add, configure, or remove connectors through **Project Settings with Environment Support**. Once configured, connectors can be used to send and receive data, control devices, or update variables and parameters dynamically.

## Available connector types

- **Crestron connectors** — exchange data with Crestron control processors.
- **WebSocket connectors** — manage bidirectional data exchange over a WebSocket connection.
- **MQTT connectors** — connect to MQTT brokers and manage data flow between AVstudio and other control systems.
- **Web connectors** — enable HTTP-based integrations and API calls.

## Managing connectors

- To add or edit connectors, go to Project Settings with Environment Support ⚙️⬢ and expand the connector type you want to configure.
- Each connector can have its own host, authentication, and connection parameters.
- You can create multiple connectors of the same type for different environments or systems.

## Summary

You’ve now learned where connectors are configured and how they support communication between AVstudio projects and external systems. Continue with the following guides to learn how to set up individual connector types such as MQTT, WebSocket, or Crestron.

