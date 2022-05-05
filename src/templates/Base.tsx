import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { LangButton } from './LangButton';
import { VerticalFeatures } from './VerticalFeatures';

import { LangContextProvider } from '../contexts/LangContext';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <LangContextProvider>
    <LangButton/>
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
    </LangContextProvider>
  </div>
);

export { Base };
