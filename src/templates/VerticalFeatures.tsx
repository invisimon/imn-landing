import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Pense... em palcos de conhecimentos 👩‍🎤"
    description='Não somos loucos a ponto de dizer "esqueça a sala de aula!", mas ainda queremos apresentar ao mundo abstrações de aprendizagem e gestão do conhecimento menos centralizadas nas figuras de instrutores e demais autoridades. Por isso, seja bem-vind@ ao nosso festival!'
  >
    <VerticalFeatureRow
      title="Quem sou eu na multidão?"
      description="Investigue seu perfil comportamental através de testes psicológicos. Enxergue suas qualidades ao mapear habilidades, visão de mundo, e tendências do perfil de aprendizagem."
      image="/assets/images/storyset1.png"
      imageAlt="arte criada por STORYSET"
    />
    <VerticalFeatureRow
      title="Que caminhos posso trilhar?"
      description="Encontre os palcos de conhecimento pelos perfis dos autores e suas publicações. Isto é, por especialização (fortalecer o que você já sabe) ou complementaridade (explorar conhecimentos que fogem do seu domínio e merecem mais atenção)."
      image="/assets/images/storyset2.jpg"
      imageAlt="arte criada por STORYSET"
      reverse
    />
    <VerticalFeatureRow
      title="Como posso me destacar?"
      description="Inspire aos outros e torne-se reconhecido profissionalmente. Utilize a Helplit como uma vitrine das suas habilidades para o mundo, e contribua de forma protegida para os palcos de conhecimentos da sua própria instituição empregadora."
      image="/assets/images/storyset3.png"
      imageAlt="arte criada por STORYSET"
    />
  </Section>
);

export { VerticalFeatures };
