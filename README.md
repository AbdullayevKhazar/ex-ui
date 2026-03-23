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

## 4️⃣ OTP Input Component

The `Otp` component is used to capture one-time passwords (OTP) with multiple input fields. It supports auto-focus, backspace navigation, and paste handling.

```tsx
import { Otp } from "@khazarabdulayev/ex-ui";

export default function App() {
  const handleComplete = (otp: string) => {
    console.log("OTP entered:", otp);
  };

  return (
    <div className="p-10">
      <Otp otpLength={6} onComplete={handleComplete} />
    </div>
  );
}
```

---

## 5️⃣ Modal Component

The `Modal` component is used to display content in a centered overlay with smooth animations and backdrop blur. It supports closing via backdrop click or `ESC` key.

```tsx
import { useState } from "react";
import { Button, Modal } from "@khazarabdulayev/ex-ui";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Example Modal"
      >
        <p>This is modal content. You can place anything here.</p>
      </Modal>
    </div>
  );
}
```

---

---

## 7️⃣ ProductBox (E-commerce Card)

The `ProductBox` component is designed for e-commerce use cases. It provides a clean and modern product card with image, pricing, discount badge, and action button.

```tsx
import { ProductBox } from "@khazarabdulayev/ex-ui";

export default function App() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductBox
        imageSrc="https://via.placeholder.com/300x400"
        title="Wireless Headphones"
        description="High quality wireless headphones with noise cancellation."
        price="$99"
        oldPrice="$149"
        badge="SALE"
        onActionClick={() => console.log("Added to cart")}
      />

      <ProductBox
        imageSrc="https://via.placeholder.com/300x400"
        title="Smart Watch"
        description="Track your fitness and stay connected on the go."
        price="$199"
        badge="NEW"
        onActionClick={() => console.log("Added to cart")}
      />
    </div>
  );
}
```

---

### 🔧 Props

| Prop            | Type                          | Description |
|-----------------|-------------------------------|-------------|
| `imageSrc`      | `string`                      | Product image URL |
| `imageAlt`      | `string`                      | Alt text for image |
| `title`         | `string`                      | Product title |
| `description`   | `string`                      | Short description |
| `price`         | `string \| number`            | Current price |
| `oldPrice`      | `string \| number`            | Old price (for discount display) |
| `badge`         | `string`                      | Badge label (e.g., SALE, NEW) |
| `buttonText`    | `string`                      | Button text (default: "Səbətə at") |
| `onActionClick` | `() => void`                  | Action button click handler |
| `as`            | `React.ElementType`           | Custom root element (default: `article`) |

---

### 💡 Features

- 🛒 E-commerce ready design  
- 🎯 Supports discount pricing (old vs new price)  
- 🏷️ Badge support (SALE, NEW, etc.)  
- 🌙 Dark mode compatible  
- ✨ Smooth hover animations  
- 🔘 Optional action button  

---

---

## Documentation

View all components live:

```bash
npm run storybook
```

Opens at `http://localhost:6006`. Use it as your docs site or deploy it.

### Deploy Storybook

1. Build: `npm run build-storybook`
2. Upload the `storybook-static` folder to:
   - **Netlify** – drag & drop or connect your repo, set build command: `npm run build-storybook`, publish dir: `storybook-static`
   - **Vercel** – `npx vercel` and set output dir to `storybook-static`
   - **GitHub Pages** – push `storybook-static` to a `gh-pages` branch or use a GitHub Action

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
