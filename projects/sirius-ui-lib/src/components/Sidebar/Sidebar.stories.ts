import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './Sidebar.component';

const meta: Meta<SidebarComponent> = {
  title: 'Components/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  argTypes: {},
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  args: {},
};

