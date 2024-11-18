import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/Sidebar.component';
import { PageComponent } from '../page/page.component';
import { MainContainerComponent } from './main-container.component';

const meta: Meta<MainContainerComponent> = {
  title: 'Components/MainContainer',
  tags: ['autodocs'],
  component: MainContainerComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [MainContainerComponent],
      imports: [
        LayoutModule, CommonModule, BrowserModule, PageComponent,
        BrowserAnimationsModule, HeaderComponent, SidebarComponent
      ],
    })
  ],
  args: {},
};

export default meta;
type Story = StoryObj<MainContainerComponent>;

export const Default: Story = {
  args: {
    items: [
      { 
        title: "Pessoas",
        icon: 'user',
        options: [
          { label: 'Pessoa Fisica', icon: 'user', path: '/' },
          { label: 'Pessoa Juridica', icon: 'home', path: '/' }
        ] 
      },
      { 
        title: "Cadastros",
        icon: 'clipboard-text',
        options: [
          { label: 'Tipo Documento', icon: 'user', path: '/' },
          { label: 'Tipo Sexo', icon: 'home', path: '/' },
          { label: 'Tipo Endereço', icon: 'user', path: '/' },
          { label: 'Tipo Contato', icon: 'home', path: '/' },
          { label: 'Tipo Telefone', icon: 'user', path: '/' },
          { label: 'Tipo Estado Civil', icon: 'home', path: '/' }
        ] 
      },
      { title: "Sair", icon: "logout", option: { label: 'Home', icon: 'home', path: '/' } },
    ]
  },
};
