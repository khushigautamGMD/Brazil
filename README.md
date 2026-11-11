# Responsible Gaming Landing Page 🛡️

A modern, mobile-responsive **Elementor HTML/CSS landing page** designed with high-conversion dark-mode aesthetics inspired by the **Brazilian color harmony** (Deep Obsidian Black, Vibrant Emerald Green, and Radiant Canary Gold).

Engineered to be lightweight, zero-dependency, and fully compatible with **WordPress Elementor** (via the custom HTML Code Widget or Elementor Canvas) as well as standalone hosting environments (Vercel, Netlify, GitHub Pages, Apache, Nginx).

---

## 📁 Repository Structure

| File | Description |
| :--- | :--- |
| `index.html` | Complete standalone landing page (HTML5 + CSS3 + Vanilla JS inline). Open directly in any browser or deploy immediately to any static web host. |
| `elementor-widget-code.html` | Scoped and isolated code block (`#br-lp-wrapper`) optimized to copy and paste directly into the Elementor **HTML Code Widget** with zero styling collisions. |
| `styles.css` | Modular external stylesheet with clean CSS variables and responsive rules. |
| `script.js` | Modular JavaScript handling accessible native `<details>` accordion controls and modal dialogs. |
| `server.js` | Built-in zero-dependency Node.js HTTP server for instant local preview. |

---

## 🚀 How to Use in WordPress with Elementor

### Method 1: Copy & Paste into Elementor (Recommended)
1. In your WordPress dashboard, create or edit a page with **Elementor**.
2. In the page settings (gear icon at the bottom-left), set the **Page Layout** to **Elementor Canvas** (for a full-page clean aesthetic) or **Elementor Full Width**.
3. Insert a single full-width section/container with `0px` padding.
4. Drag and drop Elementor's native **HTML** widget into the section.
5. Open `elementor-widget-code.html`, copy all contents, and paste into the HTML widget.
6. Click **Publish** or **Update**.

### Method 2: Standalone Web Hosting
- Upload `index.html` directly to your root web folder on any hosting provider.
- Loads with sub-second performance and zero external framework overhead.

---

## 🎨 Color Palette & Design System

- **Primary Background:** `#070a0c` & `#0e1417` (Deep Obsidian / Carbon)
- **Card Surfaces:** `#131b1f` (with subtle glow hover `#182328`)
- **Emerald Green Accent:** `#00c853` (vibrant) & `#009c3b` (deep flag green)
- **Canary Gold / Yellow Accent:** `#ffd000` & `#ffb703`
- **Typography:** `Plus Jakarta Sans` (Google Fonts with standard system fallbacks)

---

## 📄 Sections Included

1. **Hero Section:** High-impact headline (*Information, Transparency and Responsible Gaming*), 18+ alert badge, primary/secondary CTAs, and trust metrics.
2. **About Section:** Mission statement and 4 core values (Transparency, Security, Awareness, Responsibility).
3. **Information Section:** 5 essential player guidance points (Data security, Transparent information, Risk awareness, Personal limits, and Nature of games of chance).
4. **Responsible Gaming Section:** Crucial financial & wellbeing advisory, golden rules, and support hotlines.
5. **Safety Section:** Practical 3-pillar safety audit checklist (Data shielding, Terms review, Legality and licensing).
6. **FAQ Section:** Modern animated accordion answering the 4 core questions with full keyboard accessibility.
7. **Footer & Legal Disclaimer:** Quick links (Privacy Policy, Terms, Contact) and the mandatory official notice:
   > *"Notice: Informational content. Does not constitute a recommendation to participate in games of chance."*
