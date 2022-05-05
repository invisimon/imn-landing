import { useLang } from '../contexts/LangContext';
const _ = require('lodash');

export default function TXT(entry) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  HERO_TITLE: [
    'Viemos para iluminar caminhos!',
    "We're here to lighten paths!",
  ]
};
