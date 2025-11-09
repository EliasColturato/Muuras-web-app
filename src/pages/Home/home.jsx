import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import {
  HeroContainer,
  HeroContentWrapper,
  HeroTextContent,
  HeroCardWrapper,
  HeroCard,
  CardTitle,
  ResiliciencyContainer,
  ResiliciencyCardWrapper,
  ResiliciencyText,
} from './styleHome';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroContainer>
        <Header />
        <HeroContentWrapper>
          <HeroTextContent>
            <img src="./assets/HeroLogo.svg" alt="" />
            <h1>{t('heroSection.title')}</h1>
            <p>{t('heroSection.subtitle')}</p>
          </HeroTextContent>
          <HeroCardWrapper>
            <HeroCard>
              <CardTitle>
                <h4>{t('heroSection.cardTitle')}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <line
                    x1="64"
                    y1="192"
                    x2="192"
                    y2="64"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <polyline
                    points="88 64 192 64 192 168"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
              </CardTitle>
              <p>{t('heroSection.cardText')}</p>
            </HeroCard>
          </HeroCardWrapper>
        </HeroContentWrapper>
      </HeroContainer>
      <ResiliciencyContainer>
        <ResiliciencyCardWrapper>
          <img src="/assets/ResilienceImage.png" alt="Resilience Image" />
          <ResiliciencyText>
            <h2>{t('resilienceSection.title')}</h2>
            <p>{t('resilienceSection.text')}</p>
            <span>{t('resilienceSection.button')}</span>
          </ResiliciencyText>
        </ResiliciencyCardWrapper>
      </ResiliciencyContainer>
    </>
  );
}
