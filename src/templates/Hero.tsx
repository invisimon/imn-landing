import { Wallpaper } from '../background/Wallpaper';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

import TXT from './strings';

const Hero = () => (
  <Wallpaper>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-400" style={{lineHeight: 1.5, display: "inline-block"}}><mark style={{backgroundColor: "#F1825B", color: 'white'}}>{TXT('HERO_TITLE')}</mark></span>
          </>
        }
        button={
          <a href="https://marvelapp.com/prototype/6dii4f4/" target="_blank">
            <Button xl>💻 teste o protótipo</Button>
          </a>
        }
      />
    </Section>
  </Wallpaper>
);

export { Hero };
