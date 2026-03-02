import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./Table";

const meta: Meta<typeof Table> = {
  title: "Komponentlər/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "striped", "borderless"],
      description: "Cədvəlin vizual stili",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const usersData = [
  {
    id: 1,
    name: "Əli Məmmədov",
    role: "Software Engineer",
    email: "ali@example.com",
  },
  {
    id: 2,
    name: "Aygün Əliyeva",
    role: "Product Manager",
    email: "aygun@example.com",
  },
  {
    id: 3,
    name: "Vəli Həsənov",
    role: "UI/UX Designer",
    email: "veli@example.com",
  },
  {
    id: 4,
    name: "Nərmin Quliyeva",
    role: "QA Tester",
    email: "narmin@example.com",
  },
];

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>İstifadəçi Adı</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Vəzifə</TableHead>
          <TableHead className="text-right">Əməliyyat</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usersData.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium text-gray-900">
              {user.name}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell className="text-right">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                Düzəliş et
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  args: {
    variant: "striped",
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow variant={args.variant}>
          <TableHead>İstifadəçi Adı</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Vəzifə</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody variant={args.variant}>
        {usersData.map((user) => (
          // Striped işləməsi üçün variantı TableRow-a da ötürürük
          <TableRow key={user.id} variant={args.variant}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Small: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          {/* Context olmadığı üçün size="sm" hər bir xanaya verilməlidir */}
          <TableHead size="sm">İstifadəçi Adı</TableHead>
          <TableHead size="sm">Email</TableHead>
          <TableHead size="sm">Vəzifə</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usersData.map((user) => (
          <TableRow key={user.id}>
            <TableCell size="sm" className="font-medium">
              {user.name}
            </TableCell>
            <TableCell size="sm">{user.email}</TableCell>
            <TableCell size="sm">{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const EmptyState: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>İstifadəçi Adı</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Vəzifə</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-32 text-center text-gray-500">
            Məlumat tapılmadı
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
