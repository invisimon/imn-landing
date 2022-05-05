import Image from 'next/image';

import TXT from './strings';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image
        height='50px'
        width='50px'
        src={'/assets/images/helpii-mod.png'}
      />
      <div className='buffs'>
        <a href='https://fi.co' target="_blank">
          {TXT('BUFF_FOUNDER')}
        </a>
        <a href='https://www.unilasalle.edu.br/canoas/servicos/la-salle-tech' target="_blank">
          {TXT('BUFF_LASALLE')}
        </a>
      </div>
    </span>
  );
};

export { Logo };
