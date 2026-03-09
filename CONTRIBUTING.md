# 🌟 EX-UI-ya qoşulmaq (Contributing)

**EX-UI** layihəsinə göstərdiyiniz marağa və töhfə vermək istəyinizə görə təşəkkür edirik! 💖

İcmamızdan gələn hər bir töhfəni məmnuniyyətlə qəbul edirik. İstər bir xətanı (bug) düzəldin, istər sənədləşdirməni (documentation) inkişaf etdirin, istərsə də yeni komponentlər əlavə edin — köməyiniz bizim üçün çox dəyərlidir. ✨

Bu dokumentasiya, layihəyə necə töhfə verə biləcəyinizi addım-addım izah edir.

---

## 🔄 Töhfə Vermə Prosesi (Workflow)

Tipik töhfə vermə prosesi qısaca bu şəkildədir:

**Fork** ➡️ **Clone** ➡️ **Branch Yarat** ➡️ **Kodu Yaz** ➡️ **Commit** ➡️ **Push** ➡️ **Pull Request (PR)**

---

## 1️⃣ Repozitoriyanı Fork edin

1. GitHub repozitoriyasına daxil olun:  
   🔗 https://github.com/AbdullayevKhazar/ex-ui
2. Səhifənin yuxarı sağ küncündəki **Fork** düyməsinə klikləyin.

> **Qeyd:** Bu addım repozitoriyanın tam bir nüsxəsini sizin şəxsi GitHub hesabınızda yaradacaq.

- **Orijinal repozitoriya:** `github.com/AbdullayevKhazar/ex-ui`
- **Sizin forkunuz:** `github.com/SİZİN-İSTİFADƏÇİ-ADINIZ/ex-ui`

[![Fork necə edilir - GIF](https://img.youtube.com/vi/WVxD6SgxU2w/0.jpg)](https://www.youtube.com/watch?v=WVxD6SgxU2w)

---

## 2️⃣ Forkunuzu Clone edin

Fork etdiyiniz repozitoriyanı öz kompüterinizə (local) yükləyin:

```bash
git clone https://github.com/SİZİN-İSTİFADƏÇİ-ADINIZ/ex-ui.git
```

Layihə qovluğuna daxil olun:

```bash
cd ex-ui
```

---

## 3️⃣ Asılılıqları (Dependencies) quraşdırın

Layihənin işləməsi üçün lazımi paketləri yükləyin:

```bash
npm install
```

---

## 4️⃣ Yeni Branch yaradın

Əlavə edəcəyiniz funksionallıq üçün mütləq yeni bir branch yaradın:

```bash
git checkout -b feature/komponent-adi
```

**Branch adlarına dair nümunələr:**

- `feature/modal` _(Yeni xüsusiyyət əlavə edərkən)_
- `feature/tabs`
- `fix/button-bug` _(Xəta və ya bug düzəldərkən)_
- `docs/update-readme` _(Sənədləşdirmə işləri üçün)_

---

## 5️⃣ Funksionallığı (Feature) tətbiq edin

Layihəyə öz kodlarınızı əlavə edin və ya yeniləyin. Məsələn, yeni bir komponent yaradarkən struktur bu şəkildə olmalıdır:

```text
src/components/Modal/
├── Modal.tsx
└── Modal.stories.tsx
```

⚠️ **Kodu yazarkən diqqət yetirməli olduğunuz məqamlar:**

- ✅ Komponent düzgün və xətasız işləməlidir.
- ✅ **TypeScript** tipləri (types) dəqiq təyin edilməlidir.
- ✅ Sənədləşdirmə və test üçün bir **Storybook** hekayəsi (story) əlavə edilməlidir.
- ✅ Komponent layihənin ümumi struktur qaydalarına uyğun olmalıdır.

---

## 6️⃣ Dəyişiklikləri Yadda Saxlayın (Commit)

Yazdığınız kodları `stage` mərhələsinə keçirin və mənalı bir mesajla commit edin:

```bash
git add .
git commit -m "feat: Modal komponenti əlavə edildi"
```

---

## 7️⃣ Şaxənizi Göndərin (Push)

Dəyişikliklərinizi öz GitHub forkunuza göndərin:

```bash
git push origin feature/komponent-adi
```

---

## 8️⃣ Pull Request (PR) Açın

1. GitHub-da öz fork etdiyiniz repozitoriyaya daxil olun.
2. **Compare & Pull Request** düyməsinə klikləyin.
3. Dəyişikliklərinizin aydın bir təsvirini yazın.

**Təsvir üçün Nümunə:**

> Modal komponenti əlavə edildi.
>
> **Xüsusiyyətlər:**
>
> - Açma/Bağlama (open/close) vəziyyəti
> - Klaviatura əlçatanlığı (keyboard accessibility)
> - Storybook sənədləşdirməsi

4. **Create Pull Request** düyməsinə klikləyin.

## Aşağıdakı video sizə ətraflı PR-ın necə yaradılacağını öyrədir

[![Pull Request yaratmaq - GIF](https://img.youtube.com/vi/nCKdihvneS0/0.jpg)](https://www.youtube.com/watch?v=nCKdihvneS0)
