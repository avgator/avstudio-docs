---
title: Image Element
sidebar_label: Image
sidebar_position: 3
order: 3
tags:
  - avstudio
  - element
  - image
  - visual
  - static
  - dynamic
---

# Image Element

The `Image` element in AVStudio is used to display static or dynamic images within a container. It supports multiple image modes and offers configuration options for size and layout.

## Dataset Source

The image can be sourced as either:

- `Static`: A fixed image asset that does not change based on data.
- `Dynamic`: An image whose source is determined by dataset values.

## Size

Control the dimensions of the image using:

- `Width`: Set a fixed or dynamic width (default: `100px`).
- `Height`: Set a fixed or dynamic height (default: `100px`).

## Mode Selector

The `Mode Selector by Index or Name` field allows you to control which image mode is currently active. You can enter an index value or a name string.

## Available Image Modes

Multiple image modes can be defined and switched based on logic or user interaction. The `Default` mode is always present, but additional modes can be added by selecting the `+` button.

## Image CSS Classname

This field allows you to assign a custom CSS class to the image element (default: `imageElement`).
