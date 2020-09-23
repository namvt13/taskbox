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

const longTitleString = "This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!";
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
