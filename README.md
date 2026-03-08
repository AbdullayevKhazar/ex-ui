# EX-UI

EX-UI, **React**, **TypeScript** və **Vite** əsasında qurulmuş, fərdiləşdirilə bilən və yüksək performanslı UI komponentləri kitabxanasıdır. Komponentlərin inkişafı, sənədləşdirilməsi və vizual testi üçün **Storybook** inteqrasiya edilmişdir.

Bu şablon Vite daxilində Fast Refresh və sərt ESLint qaydaları ilə minimal, lakin güclü bir başlanğıc təqdim edir.

---

## İstifadəçilər Üçün Quraşdırma

Kitabxananı öz layihənizdə istifadə etmək üçün npm vasitəsilə quraşdırın:

```bash
npm install ex-ui
```

Sonra komponentləri belə istifadə edə bilərsiniz:

```tsx
import { Button } from "ex-ui";

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

---

# Tərtibatçılar Üçün Təlimat

Kitabxana üzərində işləmək, yeni komponentlər əlavə etmək və ya mövcud olanları dəyişdirmək istəyən tərtibatçılar üçün aşağıdakı addımlar nəzərdə tutulub.

---

## Layihənin Kopyalanması və İşə Salınması

Repozitoriyanı lokal maşınınıza kopyalayın:

```bash
git clone https://github.com/AbdullayevKhazar/ex-ui.git
cd ex-ui
```

Asılılıqları quraşdırın:

```bash
npm install
```

---

# Əsas Skriptlər

Layihəni inkişaf etdirmək üçün əsas mühitlər:

### Development

```bash
npm run dev
```

Vite test mühitini işə salır. Bu, komponentlərinizi standart veb tətbiqi daxilində necə göründüyünü yoxlamaq üçündür.

### Storybook

```bash
npm run storybook
```

Storybook interfeysini işə salır. Yeni komponentlər yazarkən onların fərqli vəziyyətlərini (states) izolyasiya olunmuş formada görmək və sənədləşdirmək üçün istifadə edilir.

### Build

```bash
npm run build
```

Kitabxananı istehsalat (production) üçün paketləyir.

### Lint

```bash
npm run lint
```

ESLint vasitəsilə kod keyfiyyətini yoxlayır.

---

# Yeni Komponentin Yaradılması və Storybook

Hər bir yeni komponent öz qovluğunda yerləşməli və daxilində məntiq (komponent faylı), stillər və Storybook sənədləşdirməsi olmalıdır.

## Komponentin Fayl Strukturu

```
src/
  components/
    Button/
      Button.tsx
      Button.stories.tsx
```

---

# Nümunə: Button.stories.tsx

Yeni yazılan komponentin Storybook-da sənədləşdirilməsi üçün Component Story Format (CSF) istifadə edilir:

```ts
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Davam et',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Ləğv et',
  },
};
```

---

# React Compiler

Hazırda React Compiler inkişaf və build performansına təsirinə görə bu şablonda aktivləşdirilməyib. Onu əlavə etmək istəsəniz, rəsmi React Compiler sənədləşdirməsinə baxa bilərsiniz.

---

# ESLint və Tip Təhlükəsizliyi

Bu layihədə kodun təmizliyini təmin etmək üçün sərt (strict) ESLint qaydaları tətbiq edilmişdir. İstehsalat səviyyəli tətbiqlər üçün type-aware lint qaydalarının aktivləşdirilməsi tövsiyə olunur.

### eslint.config.js

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

---

# License

MIT
