import i18n from 'i18next';

function LanguageSwitcher() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <button onClick={() => changeLanguage('en')} style={{ marginRight: '10px' }}>
        English
      </button>
      <button onClick={() => changeLanguage('tr')}>
        Türkçe
      </button>
    </div>
  );
}

export default LanguageSwitcher;
