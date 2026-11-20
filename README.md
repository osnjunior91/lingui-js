# React Internationalization with LinguiJS 🌍

A small **React internationalization (i18n) proof of concept** demonstrating how to switch languages at runtime using **LinguiJS**, React Hooks, and Material-UI.

The application starts in **Brazilian Portuguese** and lets users switch between **English, Spanish, and Portuguese** without reloading the page. Translation catalogs are loaded dynamically when a language is selected.

> **Project scope:** An educational React demo focused on internationalization and localization—not a production-ready translation platform.

## ✨ Highlights

- **Multilingual React UI:** Brazilian Portuguese (`pt-br`), English (`en`), and Spanish (`es`).
- **Runtime language switching:** Change the active locale directly from a Material-UI dropdown.
- **Lazy-loaded translation catalogs:** Uses dynamic `import()` to load locale messages when needed.
- **LinguiJS integration:** `@lingui/react` with `I18nProvider`, `@lingui/core` for locale management, and `@lingui/macro` for translatable text.
- **Component-based organization:** The root `App` manages locale state while `Home` renders the language selector and translated content.
- **Translation workflow:** Scripts are configured for message extraction and compilation with Lingui CLI.

## 🛠️ Tech Stack

| Technology | Role |
| --- | --- |
| React 17 | UI components and state management |
| JavaScript (ES6+) | Application logic, async functions, dynamic imports |
| LinguiJS 3.10 | i18n, locale catalogs, translation messages |
| Material-UI 4 | Dropdown, layout, and styling |
| Create React App / react-scripts 4 | Development, build, and test tooling |
| Babel macros | Processing `<Trans>` translation macros |

## 🔄 How It Works

1. `src/App.js` loads the Brazilian Portuguese catalog and activates `pt-br` as the default language.
2. `App` stores the selected locale using `useState` and provides the Lingui `i18n` instance through `I18nProvider`.
3. `src/Home.js` displays a Material-UI `Select` with Portuguese, English, and Spanish options.
4. When the selection changes, `handleLanguageChange` dynamically imports the matching messages module, then invokes `i18n.load()` and `i18n.activate()`.
5. The content marked with Lingui's `<Trans>` macro is rendered in the active language.

```text
Language dropdown (Home)
        |
        v
onLanguageChange(locale)
        |
        v
React state + dynamic import
        |
        v
Lingui i18n.load(locale, messages)
        |
        v
Lingui i18n.activate(locale)
        |
        v
I18nProvider -> translated UI
```

### Example from the application

The demo's translated heading changes according to the selected language:

| Locale | Displayed heading |
| --- | --- |
| Portuguese (`pt-br`) | Olá… Eu quero jogar um jogo... |
| English (`en`) | Hello… I Want to play a game... |
| Spanish (`es`) | Hola… quiero jugar un juego... |

The screen also embeds an external Giphy animation as a visual element.

## 📁 Project Structure

```text
lingui-js/
├── .babelrc                       # Babel macro plugin
├── .linguirc                       # Locales and catalog paths
├── package.json                    # React, LinguiJS, Material-UI, scripts
├── public/
└── src/
    ├── App.js                      # i18n setup and language state
    ├── Home.js                     # Language selector and translated heading
    ├── App.test.js                 # Existing CRA starter test
    ├── index.js                    # React entry point
    └── locales/
        ├── pt-br/
        │   ├── messages.json
        │   └── messages.js
        ├── en/
        │   ├── messages.json
        │   └── messages.js
        └── es/
            ├── messages.json
            └── messages.js
```

## 🚀 Getting Started

This repository uses an older React and tooling stack. Install a compatible Node.js environment before running it.

```bash
git clone https://github.com/osnjunior91/lingui-js.git
cd lingui-js
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000), choose a language from the dropdown, and watch the heading change.

Available package scripts:

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Build the React application |
| `npm test` | Run the test runner |
| `npm run extract` | Extract translatable messages with Lingui CLI |
| `npm run compile` | Compile translation catalogs with Lingui CLI |

Both `package-lock.json` and `yarn.lock` are committed. Prefer one package manager consistently when reinstalling or updating dependencies.

**Note:** The commands above are documented from `package.json`; they were not executed as part of this README update. The existing `App.test.js` is an unmodified Create React App starter test and is not a meaningful test of the current multilingual UI.

## 🎯 What This Demonstrates

This repository is a practical example of how to:

- Integrate an internationalization library into an existing React component tree.
- Separate translation resources from UI components.
- Switch locales at runtime while keeping the application mounted.
- Load locale-specific messages asynchronously.
- Organize a simple translation extraction and compilation workflow.

These techniques are useful when building multilingual frontend applications for users across different countries and regions.

## 🔎 Current Scope & Future Improvements

The current implementation translates the main demonstration heading. Other interface strings—such as the dropdown label and language names—are written directly in Portuguese in `Home.js` and are not translated by Lingui. There is no persisted language preference, locale-aware date/number formatting, or end-to-end test coverage.

Potential improvements include translating all UI labels, storing the selected language, adding tests for locale changes, improving loading/error handling around dynamic imports, and upgrading the older dependencies.

---

**Maintainer:** [osnjunior91](https://github.com/osnjunior91)  
**Purpose:** Frontend i18n/localization proof of concept using React and LinguiJS.  
**Documentation note:** This README describes the source code as inspected; no new application features were added.
