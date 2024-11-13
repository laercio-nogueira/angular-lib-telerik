import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ModeloComponent } from './modelo.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ModeloComponent> = {
  title: 'Components/Modelo',
  component: ModeloComponent,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ModeloComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    // label: 'Modelo',
  },
};

export const Secondary: Story = {
  args: {
    // label: 'Button',
  },
};

export const Large: Story = {
  args: {
    //size: 'large',
    // label: 'Button',
  },
};

export const Small: Story = {
  args: {
    // size: 'small',
    // label: 'Button',
  },
};
