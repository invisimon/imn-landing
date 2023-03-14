import { useLang } from '../contexts/LangContext';
const _ = require('lodash');

export default function TXT(entry) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  NOTICE: [
"Invisimon is a media franchise project that, briefly speaking, mixes features of Pokemon and Stranger Things. Our shared universe consists of two parallel Earths, linked by a dangerous black hole and watched by 8 Ethereal higher life forms. It's a story about the Subjective Realm - where inhabit our emotions, ideas and spirits - and how the invisible things affect our lifes for better and worse.",
"Invisimon is a media franchise project that, briefly speaking, mixes features of Pokemon and Stranger Things. Our shared universe consists of two parallel Earths, linked by a dangerous black hole and watched by 8 Ethereal higher life forms. It's a story about the Subjective Realm - where inhabit our emotions, ideas and spirits - and how the invisible things affect our lifes for better and worse.",
  ]
};
