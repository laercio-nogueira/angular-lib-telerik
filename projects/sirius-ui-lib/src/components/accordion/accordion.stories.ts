import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  component: AccordionComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ],
  args: {},
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  args: {},
};



