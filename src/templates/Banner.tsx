import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Quer garantir o teu palco de conhecimento?"
      subtitle="Fale conosco, que daremos um jeito!"
      button={
        <a href='mailto:oi@helplit.com.br' target="_blank">
            <Button >oi@helplit.com.br</Button>
          </a>
      }
    />
  </Section>
);

export { Banner };
