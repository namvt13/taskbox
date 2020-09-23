import React from 'react';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

// Create a Task template which receive different arguments and return the component
// Each components created from the template will be a property of the exported obejct
const Template = (args) => <Task {...args} />;

export const Default = Template.bind({}); // Remove this object, add new args
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({}); // Standard way to clone a function,
// Remove all properties from it (Like arguments and added properties), but the
// underlying implementation is kept
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
