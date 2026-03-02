import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { User, Search, Mail } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Komponentlər/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "borderless"],
      description: "Input-un vizual stili",
    },
    inputSize: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Input-un ölçüsü",
    },
    onAsyncSearch: {
      description:
        "Yazı yazdıqdan sonra avtomatik işə düşən asinxron API funksiyası",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Axtarış",
    placeholder: "Mətn daxil edin...",
    leftIcon: <Search size={18} />,
  },
};

export const Password: Story = {
  args: {
    label: "Şifrə",
    placeholder: "••••••••",
    type: "password",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    placeholder: "nümune@mail.com",
    leftIcon: <Mail size={18} />,
  },
};

// 2. Məlumatlandırıcı Vəziyyətlər
export const WithHelperText: Story = {
  args: {
    label: "İstifadəçi Adı",
    placeholder: "ad_soyad",
    helperText: "Yalnız kiçik hərflərdən istifadə edin.",
    leftIcon: <User size={18} />,
  },
};

export const WithError: Story = {
  args: {
    label: "İstifadəçi Adı",
    defaultValue: "abdullah",
    error: "Bu istifadəçi adı artıq götürülüb!",
    leftIcon: <User size={18} />,
  },
};

// 3. Dizayn Variantları
export const FilledVariant: Story = {
  args: {
    variant: "filled",
    placeholder: "Arxa fonu boz olan input...",
    label: "Filled Stil",
  },
};

export const BorderlessVariant: Story = {
  args: {
    variant: "borderless",
    placeholder: "Yalnız alt xətti olan input...",
    label: "Borderless Stil",
  },
};

// 4. Funksional Vəziyyətlər (PRO Səviyyə)
export const Disabled: Story = {
  args: {
    label: "Deaktiv Input",
    placeholder: "Bura yazı yazmaq olmur",
    disabled: true,
  },
};

export const SearchInput: Story = {
  render: (args) => {
    const [results, setResults] = useState<string[]>([]);
    const handleSearch = async (value: string) => {
      console.log("Axtarılır:", value);
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (value.trim() !== "") {
        setResults([
          `${value} - Nəticə 1`,
          `${value} - Nəticə 2`,
          `${value} - Nəticə 3`,
        ]);
      } else {
        setResults([]);
      }
    };

    return (
      <div style={{ minHeight: "250px", minWidth: "300px" }}>
        <Input
          {...args}
          onAsyncSearch={handleSearch}
          searchResults={results}
          onResultSelect={(secilen) => alert(`Bunu seçdiniz: ${secilen}`)}
        />
      </div>
    );
  },
  args: {
    label: "Ağıllı Axtarış (Dropdown ilə)",
    placeholder: "Nəsə yazın və gözləyin...", 
    leftIcon: <Search size={18} />,
    isSearchInput: true,
    debounceMs: 500,
  },
};
