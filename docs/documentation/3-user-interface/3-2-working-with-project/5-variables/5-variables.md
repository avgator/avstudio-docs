---
title: "Variables"
sidebar_label: "Variables"
---

#  Variables 


![Variables](./img/variables1.png)

Variables are mutable values that can be used in configuring pages and
elements of your project. Variables can be of different types: string,
number and boolean. They can be modified through actions specified in
various elements and pages and their values can also change upon
receiving feedback signals from the processor.

Variables can store and reuse various types of information, such as the
text color of an element, the size of an element, a link to a media file
and much more. Variables allow you to transfer some of the logic from
the processor to your GUI.

## Create new variable

![Variables add new](./img/variables_add_new.png)

To create a new variable, you need to specify its name, the type of data
it will store, the initial default value, and optionally, you can
provide the name of the feedback signal that will change the variable's
value.

The selected data type for your variable affects the allowable type of
feedback signal that can be used to update this variable.

All variables take default starting values upon the initial load or
after a GUI reload. The values stored in variables are not saved
permanently.
