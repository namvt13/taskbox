import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import {WithPinnedTasks} from './TaskList.stories'

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  // Renders the component into the div element
  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args}/>, div);

  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]'); // Get the first child of list-item class element, with the provided value
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div); // Unmount after testing
})