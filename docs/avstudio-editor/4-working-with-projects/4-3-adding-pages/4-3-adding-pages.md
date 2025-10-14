---
title: Adding Pages to Your Project
sidebar_label: Adding Pages
sidebar_position: 3
order: 3
tags:
  - avstudio
  - pages
  - page editor
  - project structure
  - page parameters
---

# Adding Pages to Your Project

After configuring your project settings, the next step is to add pages. Each page represents a distinct screen in your AVstudio interface. In this guide, you'll learn how to create a page, select a design paradigm, open the page in the editor, and set its properties and parameters.

## Creating a New Page

To start building out your interface, you'll need to create one or more pages in your project. Each page represents a screen or module in your AVstudio layout. Here's how to create your first page.

![Add new page modal with steps 1–5](./img/create-new-page.png)

**1. Open the Pages Tab**

Click the `Pages` tab from the top navigation menu in the project dashboard. This will display a list of all existing pages in your current project.

**2. Click Create New Page**

On the right-hand side of the page list, click the `Create New Page` button. This opens the **Add new page** modal.

**3. Enter the Page Name**

Type a name that reflects the purpose of the page in the `Name` field.  
*Example: `Main`, `SettingsPanel`, `ConferenceRoom`*

**4. Select the Design Paradigm**

Choose how the page should respond to different screen sizes:

- `Adaptive`: Fixed element positions for precise control  
- `Responsive`: Flexbox-based layout that adapts fluidly to screen widths


**5. Click Add New Page**

When you're done naming the page and choosing a layout, click the `Add new page` button to create it. The page will be added to your list and ready to edit.

**6. Open the Page in the Editor**

![Open in editor](./img/open-in-editor.png)

To start customizing your new page, click the `Open in Editor` button next to it. This opens the **Page Properties** view, where you can begin setting up layout behavior, test device previews, and more.

## Adding Subpages

In some cases, you may want to add subpages—smaller screens that live within a parent page. Subpages are often used for popups, nested layouts, or screens tied to specific actions in your interface.

Here's how to create a subpage under an existing page:

![Add Subpage modal with steps 1–5](./img/create-new-subpage.png)

**1. Go to the Subpages Tab**  
Click the `SUBPAGES` tab at the top of the editor to open the list of subpages for the selected parent page.

**2. Click Create New SubPage**  
On the right-hand side, click the `Create New SubPage` button to open the subpage creation modal.

**3. Enter the Subpage Name**  
Type a clear, descriptive name into the `Name` field.  
*Example: `PopupInfo`, `UserFormModal`, or `NavigationOverlay`*

**4. Choose a Design Paradigm**  
Select between `Adaptive` and `Responsive` layouts:
- `Adaptive`: Fixed layouts that do not scale across device widths  
- `Responsive`: Flexbox-based layouts that adjust fluidly to screen size

**5. Click Add New Subpage**  
When finished, click `Add new subpage` to create and save it.

The new subpage will appear in the list and can be opened in the editor for further customization. It behaves like any standard page, with its own containers, actions, and properties—but stays logically linked to its parent.

:::tip Note
Subpages are especially helpful for modal dialogs, drawer views, or contextual screens that extend a page’s behavior without requiring full navigation.
:::

## Managing Pages and Subpages

After creating pages or subpages, you can manage them directly from the `Pages` and `Subpages` tabs. Each entry includes tools to open, duplicate, delete, or mark as the starting page.

### Managing Pages

From the `Pages` tab, click the `...` menu beside any page to open the available actions.

![Page options: Mark as Start Page, Clone, Delete](./img/pages-actions-menu.png)

**1. Mark as Start Page**  
Sets the selected page as the first screen the user sees when the project runs.

**2. Clone Page**  
Creates a duplicate of the selected page, including its layout and components.

**3. Delete Page**  
Removes the page from the project. This action is permanent, so be sure the page is no longer in use before deleting.

### Managing Subpages

Subpages have similar actions, available from the `SUBPAGES` tab.

![Subpage options: Open, Clone, Delete](./img/subpages-actions-menu.png)

**1. Open in Editor**  
Launches the selected subpage in the editor so you can modify layout, containers, and logic.

**2. Clone SubPage**  
Creates a copy of the subpage, ideal for reusing structure or behavior across similar views.

**3. Delete SubPage**  
Removes the subpage from the project. As with pages, deletion is final.


:::tip Note
You cannot delete a page or subpage that is actively in use in navigation, triggers, or actions without first unlinking it from those elements.
:::