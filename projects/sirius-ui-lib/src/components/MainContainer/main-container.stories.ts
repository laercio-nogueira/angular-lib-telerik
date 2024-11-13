import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MainContainerComponent } from './main-container.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<MainContainerComponent> = {
  title: 'Components/MainContainer',
  tags: ['autodocs'],
  component: MainContainerComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [MainContainerComponent],
      imports: [LayoutModule, CommonModule, BrowserModule, BrowserAnimationsModule,],
    })
  ],
  args: {},
};

export default meta;
type Story = StoryObj<MainContainerComponent>;

export const Default: Story = {
  args: {},
};
