---
id: pages
title: Pages
sidebar_label: Pages
sidebar_position: 2
tags:
  - avstudio
  - user-interface
  - pages
---

# Pages

In AVstudio v3, a page is the main container for placing your content, including elements, widgets, applications, and subpages. Pages support both **Adaptive** and **Responsive** design paradigms, allowing flexible layout customization based on screen size or manual positioning.

## Creating and Managing Pages

To create a new page:
1. Navigate to the **Pages** tab in your project.
2. Click **Create New Page**.
3. In the "Add new page" dialog:
   - Enter a unique **Name** (e.g., "main").
   - Select a **Design paradigm**:
     - **Adaptive**: Allows manual element positioning with optional adaptability.
     - **Responsive**: Automatically arranges elements based on screen size. *Note: Responsive is the most preferred option for optimal layout adjustment across devices.*
   - Click **Add new page** to create the page.

![Add New Page (Adaptive)](./img/avstudio-3-002-02-add-new-page-adaptive.jpg)
*Caption: Creating a new page with the Adaptive design paradigm.*

![Add New Page (Responsive)](./img/avstudio-3-002-03-add-new-page-responsive.jpg)
*Caption: Creating a new page with the Responsive design paradigm.*

Within the Pages section, you can manage your pages:

| Element         | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Name**        | Change page name or filter by name.                                        |
| **Analog flip ID** | Page number for flip trigger from processor (see [Project Settings](../1-project-settings/1-project-settings.md). |
| **Updated**     | Last page update date (e.g., Mar 9, 2025, 4:21 PM).                        |
| **Subpages Used**| Information about subpages used on this page.                              |
| **Actions**     | - Open in Editor: Edit the page.                                           |
|                 | - Mark as Start Page: Set as the first page loaded.                        |
|                 | - Clone Page: Duplicate the page.                                          |
|                 | - Delete Page: Permanently remove the page.                                |

![Pages Management Interface](./img/avstudio-3-002-01-pages.jpg)
*Caption: The initial Pages tab in AVstudio v3.*

![Pages Actions Dropdown](./img/avstudio-3-002-11-pages-action.jpg)
*Caption: The Actions dropdown for managing a page.*

## Adding Elements to a Page

Once a page is created, you can enhance it by adding elements in the page editor. The editor provides a canvas where you can design your interface, initially starting with no elements.

![Page Editor with No Elements](./img/avstudio-3-002-04-new-page-main-editor.jpg)
*Caption: The page editor interface before adding elements.*

To add elements:
1. In the page editor, click **Add Element** (or use the context menu) to open the element addition dialog.
   - This dialog allows you to select the element to be added to the page.
2. Elements are grouped into categories:
   - **Elements**:
     - Button
     - Checkbox
     - Dpad
     - Image
     - Keypad
     - Slider
     - Spacer
     - SubPage
     - Switch
     - Text
     - Text Input
     - Video
   - **Widgets**:
     - Circle Slider
     - Clock
     - DateTime
     - HTML Block
     - MediaPlayer
     - Shades Control
     - Toggle Switch
3. Give a name and click **Add Element** to insert it.

![Initiating Add Element](./img/avstudio-3-002-06-new-page-main-add-elements.jpg)
*Caption: Initiating the Add Element process in the page editor. This dialog appears after clicking "Add Element," prompting you to name the element and select its type from a dropdown.*

![New Element Type Dropdown (Part 1)](./img/avstudio-3-002-07-new-page-main-new-elements-menu1.jpg)
*Caption: First part of the element type dropdown (e.g., Button, SubPage).*

![New Element Type Dropdown (Part 2)](./img/avstudio-3-002-08-new-page-main-new-elements-menu2.jpg)
*Caption: Second part of the dropdown (e.g., Switch, Text).*

![New Element Type Dropdown (Part 3)](./img/avstudio-3-002-09-new-page-main-new-elements-menu3.jpg)
*Caption: Third part of the dropdown (e.g., Video, Widgets).*

![New Element Type Dropdown (Part 4)](./img/avstudio-3-002-10-new-page-main-new-elements-menu4.jpg)
*Caption: Fourth part of the dropdown (e.g., Circle Slider, Clock).*

:::tip
Use keyboard shortcuts like `Cmd+Ctrl+C` to copy, `Cmd+Ctrl+V` to paste, and `Del/Backspace` to delete elements.
:::

## Defining Page Parameters

Customize page behavior with parameters:
1. Switch to the **Parameters** tab.
2. Click **Add Page Parameter** to define settings (e.g., Type, Default Value, Signal FB Setter).
3. Configure as needed.

![Page Parameters Interface](./img/avstudio-3-002-05-new-page-main-parametrs.jpg)
*Caption: The Page Parameters tab in AVstudio v3.*

## Important Notes
:::info
The **Start page** is the first page loaded after the initial UI loads.
:::

:::warning
Page names must be unique to avoid conflicts.
:::

:::danger
Deleting a page is permanent and cannot be undone. Proceed with caution.
:::

:::tip
Hold the Option/Ctrl key while clicking to open multiple page editor tabs at once.
:::

## Best Practices
- Use unique, descriptive names for pages and elements.
- Test pages with both Adaptive and Responsive paradigms across devices.
- Regularly save your project after adding pages or elements.

## Related Topics
- Learn about the project workspace in [Working with Projects](../3-2-working-with-project.md).
- Manage subpages in [Subpages](../3-subpages/3-subpages.md).
- Configure reusable layouts with [Global Containers](../4-global-containers/4-global-containers.md).

---