import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

import TXT from './strings';

const VerticalFeatures = () => (
  <Section
    title={TXT('VF_INTRO_TITLE')}
    description={TXT('VF_INTRO_DESC')}
  >
    <VerticalFeatureRow
      title={TXT('VF_FIRST_TITLE')}
      description={TXT('VF_FIRST_DESC')}
      image="/assets/images/storyset1.png"
      imageAlt="credit:STORYSET"
    />
    <VerticalFeatureRow
      title={TXT('VF_SECOND_TITLE')}
      description={TXT('VF_SECOND_DESC')}
      image="/assets/images/storyset2.jpg"
      imageAlt="credit:STORYSET"
      reverse
    />
    <VerticalFeatureRow
      title={TXT('VF_THIRD_TITLE')}
      description={TXT('VF_THIRD_DESC')}
      image="/assets/images/storyset3.png"
      imageAlt="credit:STORYSET"
    />
  </Section>
);

export { VerticalFeatures };
