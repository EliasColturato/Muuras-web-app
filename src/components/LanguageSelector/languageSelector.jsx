import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = value => {
    i18n.changeLanguage(value);
  };

  return (
    <>
      <select
        name="language-selector"
        onChange={e => handleChangeLanguage(e.target.value)}
      >
        <option value="uk">UK</option>
        <option value="hl">HL</option>
      </select>
      <div>
        <p>{}</p>
      </div>
    </>
  );
}
