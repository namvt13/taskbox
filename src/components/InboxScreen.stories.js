import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { PureInboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';

// Mock store, which is just a module object with a getState method,
// which will return the state object, return 0 to indicate no subscription available,
// return a mock dispatch action
const store = {
  getState: () => ({
    tasks: TaskListStories.Default.args.tasks,
  }),
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

// Although we return store to the PureInboxScreen to flow to TaskList (Which needs a store to operate properly)
export default {
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: 'InboxScreen',
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};
