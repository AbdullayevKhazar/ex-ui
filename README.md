![Fork necə edilir - GIF](https://res.cloudinary.com/ddxf5xcj4/image/upload/v1773062832/Gemini_Generated_Image_r4vw3wr4vw3wr4vw_axvbgk.jpg)

# 🚀 EX-UI

**EX-UI** is a customizable and high-performance UI component library built with **React**, **TypeScript**, and **Vite**. **Storybook** is integrated for component development, documentation, and visual testing.

[![npm version](https://img.shields.io/npm/v/@khazarabdulayev/ex-ui.svg?style=flat-square)](https://www.npmjs.com/package/@khazarabdulayev/ex-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

This template provides a minimal but powerful starting point with _Fast Refresh_ in Vite and strict ESLint rules.

---

## 📦 Installation and Setup

Install the library in your project via npm:

```bash
npm i @khazarabdulayev/ex-ui
```

> ⚠️ **WARNING - VERY IMPORTANT:** For the components to render correctly and the styles to work, you MUST import the library's CSS file in your main entry file (e.g., `main.tsx`, `index.tsx`, or `App.tsx`)! Otherwise, the components will appear unstyled.

```tsx
import "@khazarabdulayev/ex-ui/style.css";
```

---

## 📚 Component Usage

You can easily use the components included in the library within your project. Below are usage examples of some core components:

### 1️⃣ Button and Drawer Components

The `Drawer` component is used to create side panels that can slide in from 4 different directions (top, bottom, left, right) of the screen.

```tsx
import { Button, Drawer } from "@khazarabdulayev/ex-ui";

export default function App() {
  return (
    <div className="flex gap-4 p-10">
      {/* Drawer opening from Top */}
      <Drawer
        position="top"
        content={
          <div className="p-5">
            <h2 className="text-xl font-bold">
              Hello! This is my Drawer Content.
            </h2>
            <p>I can build my desired design here.</p>
          </div>
        }
      >
        <Button>Open from Top</Button>
      </Drawer>

      {/* Drawer opening from Bottom */}
      <Drawer
        position="bottom"
        content={
          <div className="p-5 h-[50vh]">
            <h2 className="text-xl font-bold">Bottom Panel</h2>
            <p>Content goes here.</p>
          </div>
        }
      >
        <Button>Open from Bottom</Button>
      </Drawer>

      {/* Drawer opening from Left */}
      <Drawer
        position="left"
        content={
          <div className="p-5 h-full">
            <h2 className="text-xl font-bold">Left Menu</h2>
            <p>Navigation links can go here.</p>
          </div>
        }
      >
        <Button>Open from Left</Button>
      </Drawer>

      {/* Drawer opening from Right */}
      <Drawer
        position="right"
        content={
          <div className="p-5 h-full">
            <h2 className="text-xl font-bold">Right Panel</h2>
            <p>Profile or settings can be added here.</p>
          </div>
        }
      >
        <Button>Open from Right</Button>
      </Drawer>
    </div>
  );
}
```

### 2️⃣ ScrollComponent (Back to Top Button)

This component appears when the user scrolls down the page (after 500px) and smoothly scrolls the page back to the top when clicked.

```tsx
import { ScrollComponent } from "@khazarabdulayev/ex-ui";

export default function App() {
  return (
    <div>
      {/* Your long page content will be here */}
      <div style={{ height: "2000px", padding: "20px" }}>Scroll down... 👇</div>

      {/* ScrollComponent will be placed in the bottom right or left corner of the screen */}
      <ScrollComponent position="right" textSize={24}>
        🔝 Top
      </ScrollComponent>
    </div>
  );
}
```

### 3️⃣ Table

```tsx
import { Table, TableHeader, TableRow, TableHead } from "./Table/Table";

export default function App() {
  return (
    <>
      <Table>
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
    </>
  );
}
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

## 💻 Contributing

We believe in the power of the open-source community! You can find detailed instructions on how to set up the project locally, add new components, test, and open a _Pull Request_ in the **[CONTRIBUTING.md](CONTRIBUTING.md)** file.

We gladly welcome all kinds of contributions! 🤝

---

## 📜 Main Scripts

Core commands for those who want to explore and develop the project locally:

| Command             | Description                                                                                     |
| :------------------ | :---------------------------------------------------------------------------------------------- |
| `npm run dev`       | **Starts the Vite dev server.** Used to see how your components look within a standard web app. |
| `npm run storybook` | **Starts the Storybook interface.** (To view and document components in isolation).             |
| `npm run build`     | **Builds the library for production.**                                                          |
| `npm run lint`      | **Checks code quality.** Finds errors using ESLint.                                             |

---

## ⚙️ Technical Notes

- **React Compiler:** Currently disabled in this template due to its impact on development and _build_ performance. If needed, you can refer to the [Official React Compiler Documentation](https://react.dev/learn/react-compiler).
- **ESLint and Type Safety:** Strict ESLint and TypeScript rules are applied in this project to ensure code cleanliness and reliability.

---

## 📄 License

This project is licensed under the **[MIT](https://opensource.org/licenses/MIT)** license.
