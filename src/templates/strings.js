import { useLang } from '../contexts/LangContext';
const _ = require('lodash');

export default function TXT(entry) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  BUFF_FOUNDER: [
    '⠀Graduados no Founder Institute 🌱',
    '⠀Founder Institute Graduate 🌱',
  ],
  BUFF_LASALLE: [
    '⠀Incubados no La Salle Tech ⭐',
    '⠀Incubated at La Salle Tech ⭐',
  ],
  BUFF_CATALISA: [
    '⠀Selecionados no Catalisa ICT 🧪',
    '⠀Selected in Catalisa ICT 🧪',
  ],
  HERO_TITLE: [
    'HELPLIT\nExperiências de Aprendizagem Colaboradas',
    'HELPLIT\nCrowdsourced Learning Experiences',
  ],
  HERO_BTN: [
    '💻 veja o protótipo',
    '💻 see our prototype',
  ],
  VF_INTRO_TITLE: [
    'Pense... em um palco de conhecimentos 👩‍🎤',
    'Imagine... a stage of knowledge 👩‍🎤',
  ],
  VF_INTRO_DESC: [
    'Não somos loucos a ponto de dizer "esqueça a sala de aula!". Uma boa aula é como um espetáculo, e queremos fazer os professores se sentirem confiantes sobre suas didáticas. Somos o pessoal dos bastidores. Seja bem-vind@ ao nosso festival!',
    'We\'re not stupid to simply say \'forget the classroom!\'. A good class is like a show, and we want to make teachers feel confident about their teaching. Think of us as the backstage folks. Welcome to our festival!',
  ],
  VF_FIRST_TITLE: [
    'ACENDA 💡',
    'Get LIT 🔥',
  ],
  VF_FIRST_DESC: [
    'Inspire-se com o nosso acervo de práticas pedagógicas e monte suas aulas de forma facilitada. Encontre relatos, ferramentas e percepções úteis e reutilizáveis para o seu plano de ensino.',
    'Explore our collection of pedagogical practices and set up your classes in an easy way. Find useful and reusable stories, tools and insights for your teaching plan.',
  ],
  VF_SECOND_TITLE: [
    'Universo HI-TECH para Professores HI-TOUCH',
    'HI-TECH, HI-TEACH',
  ],
  VF_SECOND_DESC: [
    'Os professores carecem de um espaço coletivo para reutilizar experiências e expor portfólio, e por isso o fazem de formas pouco estruturadas. Viabilizamos gestão do conhecimento e networking de qualidade.',
    'Teachers lack a collective space to reuse experiences and display portfolios, and that\'s why they do it in unstructured ways. We enable knowledge management and quality networking.',
  ],
  VF_THIRD_TITLE: [
    'O espaço é SEU',
    'Make it YOURS',
  ],
  VF_THIRD_DESC: [
    'O plano é causar impacto, e para isso focamos no ensino básico do Brasil. Vemos nos atos de aprender e ensinar processos de uma economia criativa que move a sociedade, e tudo isso começa na figura do educador.',
    'Our plan is to make an impact, and for that we focus on basic education in Brazil. We see in the acts of learning and teaching processes of a creative economy that moves society, and all this begins in the figure of the educator.',
  ],
  BANNER_TITLE: [
    'Sinapses foram ativadas? 🧠',
    'Can you feel the synapses firing up? 🧠',
  ],
  BANNER_SUBTITLE: [
    'Nos mande um email e pergunte o que quiser!',
    'Send us an email and ask us anything!',
  ],
  TEASER: [
    'Sério, nos dá um oi :)',
    'Hey, say hi to us :)',
  ],
};
