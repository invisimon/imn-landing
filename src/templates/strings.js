import { useLang } from '../contexts/LangContext';
const _ = require('lodash');

export default function TXT(entry) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  NOTICE: [
"Em breve",
"Soon",
  ]
};
