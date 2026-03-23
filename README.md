# EX-UI

A simple React component library built with TypeScript and Tailwind CSS. Use it to build apps faster with ready-made buttons, inputs, tables, modals, and more.

[![npm version](https://img.shields.io/npm/v/@khazarabdulayev/ex-ui.svg?style=flat-square)](https://www.npmjs.com/package/@khazarabdulayev/ex-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## Install

```bash
npm i @khazarabdulayev/ex-ui
```

Add the CSS file in your app entry (e.g. `main.tsx`):

```tsx
import "@khazarabdulayev/ex-ui/style.css";
```

> **Important:** Without this import, components will not be styled.

---

## Quick Start

```tsx
import { Button } from "@khazarabdulayev/ex-ui";

export default function App() {
  return <Button onClick={() => alert("Hi!")}>Click me</Button>;
}
```

---

## Dark / Light Mode

Wrap your app with `ThemeProvider` and use `ThemeToggle` or `useTheme`:

```tsx
import { ThemeProvider, ThemeToggle } from "@khazarabdulayev/ex-ui";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeToggle />
      {/* Your app */}
    </ThemeProvider>
  );
}
```

**Options:**

- `defaultTheme`: `"light"` | `"dark"` | `"system"`
- `storageKey`: Key for localStorage (default: `"ex-ui-theme"`)

Use the hook to control theme:

```tsx
import { useTheme } from "@khazarabdulayev/ex-ui";

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle</button>;
}
```

---

## Components

### Button

Variants: `primary`, `secondary`, `danger`, `outline`  
Sizes: `sm`, `md`, `lg`

```tsx
import { Button } from "@khazarabdulayev/ex-ui";

<Button variant="primary">Save</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button isLoading>Loading...</Button>
```

### Input

Supports label, error, helper text, icons, password toggle, and search.

```tsx
import { Input } from "@khazarabdulayev/ex-ui";

<Input label="Email" placeholder="you@example.com" />
<Input label="Password" type="password" error="Invalid password" />
<Input variant="filled" inputSize="lg" />
```

### OTP

One-time password input. Auto-focus, paste support, and `onComplete` callback.

```tsx
import { Otp } from "@khazarabdulayev/ex-ui";

<Otp otpLength={6} onComplete={(code) => console.log(code)} />
```

### Modal

Controlled by `isOpen` and `onClose`.

```tsx
import { Modal } from "@khazarabdulayev/ex-ui";

const [open, setOpen] = useState(false);

<Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm">
  <p>Are you sure?</p>
</Modal>
```

### Drawer

Slide-in panel from top, bottom, left, or right. Click `children` to open.

```tsx
import { Drawer } from "@khazarabdulayev/ex-ui";

<Drawer
  position="right"
  content={<div className="p-5">Panel content</div>}
>
  <button>Open drawer</button>
</Drawer>
```

### Table

Composable table parts.

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@khazarabdulayev/ex-ui";

<Table variant="striped" size="md">
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### ProductBox

Product card with image, title, description, price, badge, and action button.

```tsx
import { ProductBox } from "@khazarabdulayev/ex-ui";

<ProductBox
  imageSrc="/product.jpg"
  title="Product Name"
  description="Short description"
  price="29.99 ₼"
  oldPrice="39.99 ₼"
  badge="Sale"
  buttonText="Add to cart"
  onActionClick={() => console.log("Added")}
/>
```

### ScrollComponent

Back-to-top button that shows after scrolling.

```tsx
import { ScrollComponent } from "@khazarabdulayev/ex-ui";

<ScrollComponent position="right">
  ↑ Top
</ScrollComponent>
```

---

## Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `npm run dev`        | Start Vite dev server          |
| `npm run storybook`  | Start Storybook (port 6006)    |
| `npm run build`      | Build the library              |
| `npm run lint`       | Run ESLint                     |
| `npm run test`       | Run tests                      |

---

## License

MIT
