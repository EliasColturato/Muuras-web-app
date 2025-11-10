import { useTranslation } from 'react-i18next';
import { SelectWrapper } from './styleLanguageSelector';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = value => {
    i18n.changeLanguage(value);
  };

  return (
    <SelectWrapper>
      <select
        name="language-selector"
        onChange={e => handleChangeLanguage(e.target.value)}
      >
        <option value="uk">UK</option>
        <option value="nl">NL</option>
      </select>
      <div></div>
    </SelectWrapper>
  );
}
