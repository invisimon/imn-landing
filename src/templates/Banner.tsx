import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

import TXT from './strings';

const Banner = () => (
  <Section>
    <CTABanner
      title="Quer saber como funciona?"
      subtitle="Fale conosco, que entraremos em contato!"
      button={
        <a href='mailto:oi@helplit.com.br' target="_blank">
            <Button >oi@helplit.com.br</Button>
          </a>
      }
    />
  </Section>
);

export { Banner };
