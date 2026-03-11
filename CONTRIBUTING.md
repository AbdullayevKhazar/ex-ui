# 🌟 Contributing to EX-UI

Thank you for your interest in contributing to **EX-UI**! 💖

We truly appreciate every contribution from the community. Whether you fix a bug, improve the documentation, or add new components — your help is highly valuable to us. ✨

This guide explains **step by step** how you can contribute to the project.

---

## 🔄 Contribution Workflow

The typical contribution process looks like this:

**Fork** ➡️ **Clone** ➡️ **Create Branch** ➡️ **Implement Feature** ➡️ **Commit** ➡️ **Push** ➡️ **Pull Request (PR)**

---

## 1️⃣ Fork the Repository

1. Go to the GitHub repository:  
   🔗 https://github.com/AbdullayevKhazar/ex-ui

2. Click the **Fork** button in the top-right corner of the page.

> **Note:** This step will create a complete copy of the repository under your personal GitHub account.

- **Original repository:** `github.com/AbdullayevKhazar/ex-ui`
- **Your fork:** `github.com/YOUR-USERNAME/ex-ui`

[![How to Fork - GIF](https://img.youtube.com/vi/WVxD6SgxU2w/0.jpg)](https://www.youtube.com/watch?v=WVxD6SgxU2w)

---

## 2️⃣ Clone Your Fork

Clone the repository you forked to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/ex-ui.git
```

Navigate into the project folder:

```bash
cd ex-ui
```

---

## 3️⃣ Install Dependencies

Install the required packages for the project to run:

```bash
npm install
```

---

## 4️⃣ Create a New Branch

Always create a new branch for the feature or fix you are working on:

```bash
git checkout -b feature/component-name
```

**Branch name examples:**

- `feature/modal` _(when adding a new feature)_
- `feature/tabs`
- `fix/button-bug` _(when fixing a bug)_
- `docs/update-readme` _(for documentation changes)_

---

## 5️⃣ Implement the Feature

Add or update your code in the project. For example, when creating a new component, the structure should look like this:

```text
src/components/Modal/
├── Modal.tsx
└── Modal.stories.tsx
```

⚠️ **Things to keep in mind while writing code:**

- ✅ The component must work correctly without errors.
- ✅ **TypeScript types** should be clearly defined.
- ✅ A **Storybook story** should be added for documentation and testing.
- ✅ The component should follow the project’s general structure and coding standards.

---

## 6️⃣ Commit Your Changes

Stage your changes and create a meaningful commit message:

```bash
git add .
git commit -m "feat: add Modal component"
```

---

## 7️⃣ Push Your Branch

Push your changes to your forked repository on GitHub:

```bash
git push origin feature/component-name
```

---

## 8️⃣ Create a Pull Request (PR)

1. Go to your forked repository on GitHub.
2. Click the **Compare & Pull Request** button.
3. Write a clear description of your changes.

**Example description:**

> Added a Modal component.
>
> **Features:**
>
> - Open/Close state management  
> - Keyboard accessibility  
> - Storybook documentation

4. Click **Create Pull Request**.

---

## The video below explains in detail how to create a Pull Request

[![Create Pull Request - GIF](https://img.youtube.com/vi/nCKdihvneS0/0.jpg)](https://www.youtube.com/watch?v=nCKdihvneS0)
