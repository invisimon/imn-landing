import Image from 'next/image';
import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <Image
      width="148px"
      height="148px"
      src="/assets/images/helpii-mod.png"
    />
    <h1 className="text-4xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <p><br/></p>
    {props.button}
  </header>
);

export { HeroOneButton };
