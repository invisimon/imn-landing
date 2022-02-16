import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Pense... em palcos de conhecimentos 👩‍🎤"
    description='Não somos loucos a ponto de dizer "esqueça a sala de aula!", mas ainda queremos apresentar ao mundo abstrações de aprendizagem e gestão do conhecimento menos centralizadas nas figuras de instrutores e demais autoridades. Por isso, seja bem-vind@ ao nosso festival!'
  >
    <VerticalFeatureRow
      title="Quem sou eu na multidão?"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/storyset1.png"
      imageAlt="arte criada por STORYSET"
    />
    <VerticalFeatureRow
      title="Que caminhos posso trilhar?"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/storyset2.jpg"
      imageAlt="arte criada por STORYSET"
      reverse
    />
    <VerticalFeatureRow
      title="Como posso me destacar?"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/storyset3.png"
      imageAlt="arte criada por STORYSET"
    />
  </Section>
);

export { VerticalFeatures };
