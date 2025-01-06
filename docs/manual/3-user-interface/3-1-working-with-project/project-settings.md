---
title: "Project settings"
sidebar_label: "Project settings"
---

#  Project settings 

![](avstudio-projectsettings.png)

This settings block includes the following functionality: viewing
project metadata, creating and working with project builds, opening the
project in live preview mode, accessing the editing of project
properties, deleting it, and cloning it.

## Live

The "Live" button opens the current project in a separate tab. This is
the complete working version of your project that will give you an idea
of how the project will look in its final form. All changes made in the
project editor are automatically reflected in Live mode. This allows you
to display the Live preview in a separate tab with the resolution and
screen orientation of your choice. In Live mode, the project is fully
functional: page transitions are supported, all interaction events are
processed, and all dynamic data that you configured earlier is actively
involved.

By default, Live Mode works when both project editing and viewing occur
in the same browser on the same device. Pricing plans that involve
**team development** allow the use of Live Mode on any devices,
regardless of where the project editing takes place.

## Build

The "Build" button triggers the compilation of your project. Typically
the build process takes from three to 20 seconds depending on the volume
of your project data. The result of the build is an archive with the
extension ".ch5z" which can be directly uploaded to the processor or any
web server.

It's important to understand that during the build process the project
uses data that has been saved previously. Therefore any changes that
have not been saved at the moment will not be included in the build.

## Project settings

![AVstudio Project settings](project-settings2.png)

In the project settings you can modify various aspects including its
name, the archive name after compiling the build, graphical theme,
control signals for page switching and dynamic data updates,
notification control signals, webxpanel settings and more.

Let's take a closer look at each field.

PROPERTIES

Name

Project name

Archive Name

Archive name after compiling the build

Theme

UI graphical theme.

SIGNALS (JOINS)

Analog flip page signal

Analog signal name feedback with proper page number trigger page flip to
this page

Serial flip page signal

Serial signal name feedback with proper page name trigger page flip to
this page

Notification signal

Serial signal name feedback content appears as notification

Refresh DataSources

Digital signal name feedback with “true“ value trigger datasources data
refresh

CONNECTOR SETTINGS

Connector

Type of connector , for now only webXpanel supported

Host

WebXpanel host value

IpId

WebXpanel IpId value

Room ID

WebXpanel Room ID value

DATASOURCE VARIABLES

Dataset base URL

Base url for remote datasources

Authorization header key

Authorization header key for remote datasources

Authorization header value

Authorization header value for remote datasources

