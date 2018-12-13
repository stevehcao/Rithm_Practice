Performance Demo
================

This is a demonstration of how to make a React app perform better.

It is a simple todo app, with different versions adding increasing
sophistication to performance:

v1
  version of app w/no performance tweaks:

  - lots of needless re-rendering
  - no hints for reconciling
  - filtering of todos happens on every keystroke

v2
  version that splits out the add form + query form

  - no longer renders on every keystroke to add form
  - query form has local state, but filter still changes too often

v3
  version that debounces filtering

- now only refilters every 1sec

v4
  version with pure components:

  - queryinput
  - addform
  - todo

v5
  no longer create bespoke function in todo on each render

v6
  put key on todo list, so reconciliation works!