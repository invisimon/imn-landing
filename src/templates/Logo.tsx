import Image from 'next/image';
import { AppConfig } from '../utils/AppConfig';

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
        height='40px'
        width='40px'
        src={'/assets/images/helpii-mod.png'}
      />

      {'⠀' + AppConfig.site_name}
    </span>
  );
};

export { Logo };
