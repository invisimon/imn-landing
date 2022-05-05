import { useLang } from '../../contexts/LangContext';
//import { SphereButton } from '@/components/gears';

export function LangButton() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      className='langButton'
      onClick={toggleLang}
      style={{
        background:
          lang.iso === 'PT'
            ? `url('/misc/flag-us.png')`
            : `url('/misc/flag-br.png')`,
      }}
    />
  );
};