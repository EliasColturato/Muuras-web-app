import LanguageSelector from '../LanguageSelector/languageSelector';
import { useTranslation } from 'react-i18next';
import { HeaderActions, HeaderLinks, WrapperHeader } from './styleHeader';

export default function Header() {
  const { t } = useTranslation();

  return (
    <WrapperHeader>
      <HeaderLinks>
        <img src="./assets/HeaderLogo.png" alt="" id="Icon" />
        <p>{t('header.home')}</p>
        <p>{t('header.services')}</p>
        <p>{t('header.products')}</p>
        <p>{t('header.about')}</p>
        <p>{t('header.faq')}</p>
      </HeaderLinks>
      <HeaderActions>
        <LanguageSelector />
        <button>
          {t('header.contact')}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <polyline
              points="144 56 216 128 144 200"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
        </button>
      </HeaderActions>
    </WrapperHeader>
  );
}
