import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'EM MANUTENÇÃO :)\n'}
            <span className="text-primary-500">nossa landing page ficará aqui</span>
          </>
        }
        description="em caso de dúvidas, fale comigo (João, CKO): 51 994 321 079"
        button={
          <a href="https://app.helplit.com.br/" target="_blank">
            <Button xl>a plataforma</Button>
          </a>
        }
      />
    </Section>
  </Background>
);

export { Hero };
