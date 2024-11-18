import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './Sidebar.component';

const meta: Meta<SidebarComponent> = {
  title: 'Components/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  argTypes: {
    items: [
      { label: 'Home', icon: 'home', path: '/' },
      { label: 'About', icon: 'info', path: '/about' },
      { label: 'Contact', icon: 'phone', path: '/contact' },
    ]
  },
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  args: {
    isOpen: true,
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

