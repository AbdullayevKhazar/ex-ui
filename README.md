<div align="center">

<img src="bura_loqo_linkini_yazin.png" alt="EX-UI Logo" width="150" />

# 🚀 EX-UI

**EX-UI**, <span style="color:#61DAFB;">**React**</span>, <span style="color:#3178C6;">**TypeScript**</span> və <span style="color:#646CFF;">**Vite**</span> əsasında qurulmuş, fərdiləşdirilə bilən və yüksək performanslı UI komponentləri kitabxanasıdır. Komponentlərin inkişafı, sənədləşdirilməsi və vizual testi üçün **Storybook** inteqrasiya edilmişdir. 🎨

[![npm version](https://img.shields.io/npm/v/@khazarabdulayev/ex-ui.svg?style=flat-square)](https://www.npmjs.com/package/@khazarabdulayev/ex-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)](bura_storybook_linki_yazin)

</div>

Bu şablon Vite daxilində _Fast Refresh_ və sərt ESLint qaydaları ilə minimal, lakin güclü bir başlanğıc təqdim edir.

---

## 📦 Quraşdırma və İstifadə

Kitabxananı öz layihənizdə istifadə etmək üçün npm vasitəsilə quraşdırın:

```bash
npm i @khazarabdulayev/ex-ui
```

Sonra komponentləri layihənizdə bu şəkildə istifadə edə bilərsiniz:

```tsx
import { Button } from "@khazarabdulayev/ex-ui";

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

---

## 💻 Töhfə Vermək (Contributing)

Biz açıq mənbə (open-source) icmasının gücünə inanırıq! Layihəni lokal maşınınızda qurmaq, yeni komponentlər əlavə etmək, test etmək və _Pull Request_ açmaq üçün ətraflı təlimatları **[CONTRIBUTING.md](CONTRIBUTING.md)** faylında tapa bilərsiniz.

Hər cür töhfənizi məmnuniyyətlə qəbul edirik! 🤝

---

## 📜 Əsas Skriptlər (Scripts)

Layihə ilə lokalda tanış olmaq istəyənlər üçün əsas komandalar:

| Komanda             | Təsvir                                                                                       |
| :------------------ | :------------------------------------------------------------------------------------------- |
| `npm run dev`       | **Vite test mühitini işə salır.**                                                            |
| `npm run storybook` | **Storybook interfeysini işə salır.** (Komponentləri izolyasiya olunmuş şəkildə görmək üçün) |
| `npm run build`     | **İstehsalat (production) üçün hazırlayır.**                                                 |
| `npm run lint`      | **Kod keyfiyyətini yoxlayır.** ESLint vasitəsilə xətaları tapır.                             |

---

## ⚙️ Texniki Qeydlər

- **React Compiler:** Hazırda inkişaf və _build_ performansına təsirinə görə bu şablonda aktivləşdirilməyib. Ehtiyac olarsa, [Rəsmi React Compiler Sənədləşdirməsinə](https://react.dev/learn/react-compiler) baxa bilərsiniz.
- **ESLint və Tip Təhlükəsizliyi:** Layihədə kodun təmizliyini təmin etmək üçün sərt (strict) ESLint və TypeScript qaydaları tətbiq edilmişdir.

---

## 📄 Lisenziya (License)

Bu layihə **[MIT](https://opensource.org/licenses/MIT)** lisenziyası altında yayımlanır.
