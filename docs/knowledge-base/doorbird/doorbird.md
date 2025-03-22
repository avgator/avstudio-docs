---
title: "DoorBird Intercoms Integration Guide"
sidebar_label: "DoorBird Intercoms Integration Guide"
tags:
- knowledge-base
- ui-components
- datasource
- avstudio
- javascript
- functions
- dynamic-content
- video
- html
- html block
- mjpg
- cctv
- streaming
- http request
- https
- http
- proxy
- DoorBird
- doorbird
- intercom
- camera
- API
- http action
sidebar_position: 3
---


# DoorBird Intercoms Integration Guide

## Before We Start

This document explains how to integrate multiple DoorBird intercoms into your AVStudio project using datasets and direct HTTP requests without requiring a control system. You'll learn how to organize DoorBird devices in your interface and communicate directly with them.

## Understanding DoorBird API

DoorBird video intercoms feature a robust HTTP API that enables direct integration without requiring intermediary control systems. This API provides secure access to all critical intercom functions through standard web protocols, making it ideal for AVStudio projects.

Key capabilities available through the DoorBird API include:

- **Live video streaming** - Access real-time MJPEG video streams from the intercom's camera
- **Door/gate control** - Trigger relays to unlock doors or gates remotely
- **Image capture** - Request high-resolution still images from the camera on demand
- **Event history** - Retrieve logs of past interactions (doorbell presses, motion events)
- **Notifications** - Set up and manage push notifications for intercom events
- **Light control** - Activate the integrated infrared LEDs for night vision

The API uses standard HTTP authentication methods and returns data in structured formats that are easy to process with JavaScript functions in AVStudio. All communication happens over your local network, ensuring responsive performance with minimal latency.

For comprehensive documentation and the latest API specifications, refer to the official DoorBird developer resources at:
[https://www.doorbird.com/en/api](https://www.doorbird.com/en/api)

## Setting Up Global Variables

To efficiently manage multiple DoorBird intercoms, we need to establish global project variables that will store the currently selected intercom's information. 

![Project variables configuration screen](./img/project_variables.jpg)

### Required Project Variables

Create the following variables in your AVStudio project settings:

1. **`currentIntercomName`** (string)
   - **Purpose**: Stores the human-readable name of the currently active intercom
   - **Application**: Displayed in UI components to indicate which intercom is being viewed

2. **`currentIntercomVideoURL`** (string)
   - **Purpose**: Contains the complete endpoint URL for accessing the live video stream
   - **Application**: Used as the source for video streaming component

3. **`currentIntercomOpenTrigger`** (string)
   - **Purpose**: Holds the endpoint URL for the door/gate release mechanism
   - **Application**: Used in HTTP action when the user activates door/gate controls

4. **`currentIntercomLightTrigger`** (string)
   - **Purpose**: Contains the endpoint for controlling the IR lighting system
   - **Application**: Used when toggling night vision or lighting features of the active intercom

## Setting Up Your Dataset

To integrate multiple DoorBird intercoms into AVStudio without a control system, you'll need to create a structured dataset containing all your devices and their API endpoints. This approach centralizes your device information and makes it easily accessible throughout your interface.

### Dataset Structure

Create a JSON dataset with an `intercoms` array containing objects for each of your DoorBird devices:

```json
{
    "intercoms": [
    {
        "Name": "Main Entry",
        "Image": "http://192.168.1.1/bha-api/image.cgi?http-user01&http-password=password01",
        "Video": "http://192.168.1.1/bha-api/video.cgi?http-user01&http-password=password01",
        "Open": "http://192.168.1.1/bha-api/open-door.cgi?http-user01&http-password=password01",
        "Light": "http://192.168.1.1/bha-api/light-on.cgi?http-user01&http-password=password01"
    },{
        "Name": "Garden Entry",
        "Image": "http://192.168.1.2/bha-api/image.cgi?http-user02&http-password=password02",
        "Video": "http://192.168.1.2/bha-api/video.cgi?http-user02&http-password=password02",
        "Open": "http://192.168.1.2/bha-api/open-door.cgi?http-user02&http-password=password02",
        "Light": "http://192.168.1.2/bha-api/light-on.cgi?http-user02&http-password=password02"
    }
    ]
}
```

### Understanding Dataset Fields

Each intercom object contains:

- **Name**: A descriptive identifier for the intercom location (e.g., "Main Entry")
- **Image**: URL endpoint for retrieving a still image from the device
- **Video**: URL endpoint for accessing the MJPEG video stream
- **Open**: URL endpoint for triggering the door/gate relay
- **Light**: URL endpoint for activating the infrared LEDs

### Authentication in URLs

Notice how each URL includes authentication parameters (`http-user` and `http-password`). The DoorBird API supports this basic authentication method directly in the URL, though for production systems you may want to consider more secure approaches.

![DoorBird dataset example showing multiple intercoms](./img/doorbird_dataset.jpg)

## Creating a Single Intercom Component

This section details how to create a dedicated page that displays the live video feed from your selected DoorBird intercom and provides controls for operating the door lock and light. If your project uses only one intercom, this single page will be sufficient.

### Step 1: Create the Basic Page Layout

1. Create a new page in your project and name it "Camera Feed"
2. Split the page into two containers:
   - Top container: Will hold the intercom name and video feed
   - Bottom container: Will contain the control buttons
3. Set the bottom container height to 80px
4. Configure the bottom container's alignment, padding, and element distribution settings for optimal button placement

![Page containers structure](./img/doorbird_subpage_containers.jpg)

### Step 2: Add the Intercom Label

1. Insert a text element in the top container
2. Configure the text element to display the current intercom name
3. Bind the text element to the `currentIntercomName` project variable we created earlier
4. Position the label appropriately above where the video feed will appear

![Intercom name label configuration](./img/doorbird_video_label.jpg)

### Step 3: Create the Video Feed Component

1. Insert an HTML Block element below the label in the top container
2. Set the HTML block's dimensions to:
   - Width: 100%
   - Height: 600px
3. This will create adequate space for the video stream

![HTML block configuration](./img/doorbird_video_html.jpg)

### Step 4: Configure the HTML Block

Insert the following HTML code into the HTML block to create a responsive video feed display:

```html
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>DoorBird Live Stream</title>
  <style>
    img.doorbird-stream {
      width: auto;
      height: 580px;
      object-fit: cover; 
    }
    .centered-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  </style>
</head>
<body>
  <div class="centered-container">
    <img 
      class="doorbird-stream"
      alt="DoorBird Live Stream"
      id="doorbird-img" />
  </div>
  <script>
    document.getElementById('doorbird-img').src = window?.avgatorStudio?.getVariableByName({ name: 'currentIntercomVideoURL' });
  </script>
</body>
</html>
```

### Understanding the HTML Implementation

The HTML code above:

1. Creates a responsive container that centers its contents
2. Adds an image element that will display the MJPEG stream from the DoorBird device
3. Uses CSS to ensure the video stream displays correctly at 580px height
4. Includes JavaScript that dynamically sets the image source to the URL stored in our `currentIntercomVideoURL` project variable

This approach ensures that whenever a user selects a different intercom (changing the `currentIntercomVideoURL` variable), the video feed will automatically update to show the newly selected stream.

### Controls

In the following sections, we'll add control buttons to the bottom container that will allow users to:
- Open the door/gate by triggering the `currentIntercomOpenTrigger` endpoint
- Toggle the IR light using the `currentIntercomLightTrigger` endpoint

#### Adding the Door Open Button

1. In the bottom container, add a new Button element
2. Set the button's label to "Open"
3. Add an HTTP action to the button:
   - Select HTTP GET request as the action type
   - In the Request URL field, bind to the `currentIntercomOpenTrigger` project variable

![Open button configuration showing HTTP GET action setup](./img/doorbird_open_button_html.jpg)

#### Adding the Light Control Button

1. Clone the "Open" button to maintain consistent styling
2. Modify the cloned button's label to "Light On"
4. Change the button's action:
   - Keep the HTTP GET request action type
   - Update the Request URL field to bind to `currentIntercomLightTrigger` instead

![Light button configuration showing modified HTTP action settings](./img/doorbird_light_button_html.jpg)

These controls will complete our single intercom component interface.

![Video feed page](./img/doorbird_page_ready.jpg)

## Creating a Intercoms Menu entry

To efficiently manage multiple DoorBird intercoms, we'll create a reusable subpage component that represent a single intercom device within a list. 

### Component Parameters

Create a subpage with the following input parameters to handle each DoorBird device:

1. **`intercomImageURL`** (string)
   - Purpose: Provides the endpoint for retrieving the live image feed
   - Format: Complete URL including authentication credentials
   - Example: `http://192.168.1.1/bha-api/image.cgi?http-user01&http-password=password01`
   - Usage: Used as the source for the background or image element

2. **`intercomVideoURL`** (string)
   - Purpose: Provides the endpoint for retrieving the live video feed
   - Format: Complete URL including authentication credentials
   - Example: `http://192.168.1.1/bha-api/video.cgi?http-user01&http-password=password01`
   - Usage: Used as the value which we will pass to the current intercom's video stream 

3. **`intercomOpenTrigger`** (string)
   - Purpose: Stores the endpoint to activate the door/gate release
   - Format: Complete URL including authentication credentials
   - Example: `http://192.168.1.1/bha-api/open-door.cgi?http-user01&http-password=password01`
   - Usage: Triggered when the user presses the "Open Door" button

4. **`intercomLightTrigger`** (string)
   - Purpose: Provides the endpoint to control IR lighting
   - Format: Complete URL including authentication credentials
   - Example: `http://192.168.1.1/bha-api/light-on.cgi?http-user01&http-password=password01`
   - Usage: Triggered when the user toggles the lighting control

5. **`intercomName`** (string)
   - Purpose: Identifies the specific intercom location
   - Example: "Main Entry" or "Garden Gate"
   - Usage: Displayed as a label within the component

![Subpage parameters](./img/doorbird_subpage_parameters.jpg)

### Component Design

Design your intercom component with these essential elements:

### Video Feed Display 
Set the component background that loads the `intercomImageURL` image

![Subpage background](./img/doorbird_subpage_background.jpg)

### Creating the Interactive Selection Area

The menu entry for each intercom needs an interactive area that displays the intercom's name and allows users to select it for viewing the live video feed. Let's create this component:

#### Step 1: Create the Intercom Label Subpage

First, we'll create a reusable label component to display the intercom name:

1. Create a new subpage named "Intercom Label"
2. Add a single container to the subpage
3. Configure the container:
   - Set Alignment to "Start : Start" (top-left corner)
   - Add 10px padding on all sides
   - This positioning ensures the label appears in a consistent location

![Intercom Labels Alignment](./img/doorbird_label_alignment.jpg)

4. Add a string parameter named `labelText` to this subpage
   - This parameter will receive the intercom name from the parent component

![Intercom Label Parameters](./img/doorbird_intercom_label_parameters.jpg)

5. Add a text element to the container
6. Bind this text element to the `labelText` parameter

![Intercom Label Text Configuration](./img/doorbird_intercom_label_text.jpg)

#### Step 2: Add the Label to the Intercom Tile

Now we'll integrate this label into our main intercom tile component:

1. In the main intercom tile subpage, ensure you have two containers:
   - The top container will display the intercom image and label
   - The bottom container (80px height) will contain control buttons

![Containers Structure](./img/doorbird_subpage_containers.jpg)

2. Add the "Intercom Label" subpage to the top container
3. Configure the subpage instance:
   - Set Width and Height to 100% to fill the container
   - Bind the `labelText` parameter to the `intercomName` parameter of the parent component

![Subpage Configuration](./img/doorbird_intercom_label_text_configuration.jpg)

#### Step 3: Configure Selection Actions

When a user clicks on an intercom label, we need to update global variables and navigate to the video feed:
1. Add a Click actions to the Intercom Label component
   a. Set the `currentIntercomName` project variable from the `intercomName` parameter
   
   ![Setting Project Variable](./img/doorbird_variable_from_parameter.jpg)
   
   b. Similarly, set these project variables:
      - `currentIntercomVideoURL` from `intercomVideoURL` parameter
      - `currentIntercomLightTrigger` from `intercomLightTrigger` parameter
      - `currentIntercomOpenTrigger` from `intercomOpenTrigger` parameter
   
   c. Add a Flip action as the final step to navigate to the "Camera Feed" page

   ![Flip Action Configuration](./img/doorbird_flip_action.jpg)

2. Verify all actions are properly sequenced to ensure they execute in the correct order

![All Actions Configured](./img/doorbird_actions_are_set.jpg)

### Door Control Button
1. In the bottom container, add a new Button element
2. Set the button's label to "Open"
3. Add an HTTP action to the button:
   - Select HTTP GET request as the action type
   - In the Request URL field, bind to the `intercomOpenTrigger` subpage parameter
![Open button configuration showing HTTP GET action setup](./img/doorbird_open_button_parameter.jpg)

### Light Toggle Button
1. Clone the "Open" button to maintain consistent styling
2. Modify the cloned button's label to "Light On"
4. Change the button's action:
   - Keep the HTTP GET request action type
   - Update the Request URL field to bind to `intercomLightTrigger` subpage parameter
![Light button configuration showing modified HTTP action settings](./img/doorbird_light_button_parameter.jpg)

## Creating an Intercoms Menu

After creating the individual intercom component, you'll need to implement a menu that displays all your DoorBird devices. This section guides you through creating a dynamic menu using a subpage list component connected to your intercoms dataset.

### Step 1: Create the Menu Page

1. Create a new page in your project to serve as the main intercoms menu
2. Add a subpage list component to this page, selecting your "Intercom Menu Entry" subpage as the template
   
![Configuring subpage list](./img/doorbird_menu_configuration.jpg)

### Step 2: Connect the Dataset

1. Configure the subpage list to use dynamic data
2. Select your intercoms dataset as the data source
3. Set the data path to target the `intercoms` array in your dataset

![Subpage list dynamic source](./img/doorbird_menu_dynamic.jpg)

### Step 3: Configure List Layout

Apply appropriate styling to optimize the visual presentation of your intercoms:

1. Set both width and height to 100% to fill the available space
2. Configure the list to display in 2 columns for efficient space utilization
3. Enable the "Force children to fill list width" option
4. Add 10px padding around items for visual separation

![Subpage list styling](./img/doorbird_menu_style.jpg)

### Step 4: Map Dataset Fields to Component Parameters

Connect each field from your dataset to the corresponding parameter in your intercom component:

| Dataset Field | Component Parameter |
|--------------|---------------------|
| Image | intercomImageURL |
| Open | intercomOpenTrigger |
| Light | intercomLightTrigger |
| Name | intercomName |
| Video | intercomVideoURL |

![Subpage list parameters](./img/doorbird_parameters_set.jpg)

### Complete Implementation

With this configuration complete, your interface now offers two methods of intercom interaction:

1. **Direct interaction** from the menu - users can view still images and control doors/lights directly from each menu tile
2. **Detailed view interaction** - users can tap on an intercom to navigate to the full video feed page

The completed menu provides an intuitive overview of all available intercoms while maintaining direct access to essential controls.

![Subpage list final view](./img/doorbird_final.jpg)