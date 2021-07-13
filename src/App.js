
import React, { useState } from 'react';
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import './App.css';
import Home from './Home'
import { messages } from './locales/pt-br/messages.js'



i18n.load('pt-br', messages)
i18n.activate('pt-br')

function App() {
  
  const [language, setLanguage] = useState('pt-br');

  async function handleLanguageChange(language) {
    setLanguage(language)
    const { messages }  = await import(`./locales/${language}/messages.js`)
    i18n.load(language, messages)
    i18n.activate(language)
  }

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <Home
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>
    </I18nProvider>

  );
}

export default App;
