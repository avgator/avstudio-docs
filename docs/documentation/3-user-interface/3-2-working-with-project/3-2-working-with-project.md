---
id: working-with-project
title: Working with Projects
sidebar_label: Working with Projects
sidebar_position: 2
order: 2
tags:
  - avstudio
  - user-interface
---

# Working with Projects

The project workspace is your primary development environment in AVstudio v3, where you create and manage exceptional user interfaces for Crestron systems.

![Project Dashboard Overview](./img/avstudio-3-001-1-dashboard.jpg)
*Caption: The AVstudio v3 project dashboard as of March 12, 2025.*

## Project Dashboard and Configuration

### Basic Controls and Settings
- **Project Name and Theme**: Displayed at the top (e.g., "Dark Huddle").
- **Timestamp**: Shows the last update (e.g., March 9, 2025, 7:13 AM).
- **Save Project**: Click the "Save project" button to manually save your work.

### Live Preview
The Live Preview feature enables real-time interaction with your project:
1. Click the **Live** button.
2. Select an environment (e.g., "Default") from the dropdown.
3. Open a new window to view live updates connected to your control system or equipment.

![Live Preview in Action](./img/avstudio-3-001-2-live-preview.jpg)
*Caption: Live Preview with the Default environment selected.*

:::tip
Use Live Preview to test modifications instantly while connected to your Crestron system.
:::

### Build
Create a compiled file for deployment:
1. Click the **Build** button.
2. Select an environment (e.g., "Default") from the dropdown.
3. Download the archive file (e.g., `.ch5z` for Crestron or `.zip` for other panels).

![Build Selection](./img/avstudio-3-001-3-build.jpg)
*Caption: Building a project with the Default environment.*

### Project Settings
Access additional options via the hamburger menu. For more details, see [Project Settings](../../3-user-interface/3-2-working-with-project/1-project-settings/1-project-settings.md)

- **Project Settings**: Configure project details.
- **Clone Project**: Duplicate the current project.
- **Delete Project**: Remove the project permanently.

![Project Settings Submenu](./img/avstudio-3-001-4-project-settings-submenu.jpg)
*Caption: The project settings submenu in AVstudio v3.*

## Content Management

### Pages and Structure
- Create and manage pages within your project. Learn more in [Pages](../3-2-working-with-project/2-pages/2-pages.md).
- Implement **Global Containers** for reusable layouts. See [Global Containers](../3-2-working-with-project/4-global-containers/4-global-containers.md).
- Configure the navigation system.

### Asset Management
- Manage an **Image and Icon Library**.
- Optimize video content for performance.
- Organize files efficiently.
- Use the **Media Gallery** for asset oversight.

## Development Tools

### Visual Editor
- Intuitive drag-and-drop interface.
- Extensive component library.
- Precise layout grid system.
- **Adaptive and Responsive** design tools.

### Code Integration
- Apply **Custom CSS Styling**.
- Add **JavaScript Functionality**.
- Implement **HTML Blocks**.
- Customize components as needed.

:::tip Keyboard Shortcuts
Boost productivity with:
- Ctrl/Cmd + C: Copy
- Ctrl/Cmd + P: Paste
- Ctrl/Cmd + S: Save
- Ctrl/Cmd + Z: Undo
- Ctrl/Cmd + Y: Redo
:::

## Project Components

### Core Elements
- Pages.
- **Global Containers** for shared layouts.
- **Variables** management. See [Variables](../3-2-working-with-project/5-variables/5-variables.md).
- **Data Sources** configuration. See [Data Sources](../3-2-working-with-project/6-data-sources/6-data-sources.md).
- Custom Functions.
- **Media Gallery**.
- Font management.

## Testing & Preview

### Preview Options
- **Standard Page Preview**: View a static render.
- **Live Preview**: Test full functionality across:
  - Tablet responsive testing.
  - Mobile adaptation testing.
  - Custom resolution testing.

### Development Tools
- **Real-time Live Preview**.
- Multi-device simulation.
- Performance monitoring.
- Debug console access.

:::note Automatic Saving
AVstudio auto-saves periodically, but manual saves after significant changes are recommended.
:::

## Collaboration Features (Upcoming)

### Team Collaboration
- Shared project access (coming soon).
- Role-based permissions (in development).
- Version control system (planned).
- Change history tracking (upcoming).

### Team Communication
- In-page annotations (future release).
- Design review tools (in progress).
- Task management (planned).
- Change request system (upcoming).

:::caution
Collaboration features are not yet available in AVstudio v3 as of March 12, 2025. Stay tuned for updates!
:::

## Best Practices

### Project Organization
- Use consistent naming conventions.
- Structure assets logically.
- Maintain component documentation.
- Create clear hierarchies.

### Optimization
- Compress media assets.
- Optimize custom code.
- Utilize shared components.
- Perform regular testing.

### Development Flow
- Save work frequently.
- Create version backups.
- Reuse components.
- Keep documentation current.

:::caution Testing
Thoroughly test across multiple devices and screen sizes before deployment.
:::

---