import { Wallpaper } from '../background/Wallpaper';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Wallpaper>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-400" style={{lineHeight: 1.5, display: "inline-block"}}><mark style={{backgroundColor: "#FAA468", color: 'white'}}>conhecer a si para aprender o que quiser.</mark></span>
          </>
        }
        button={
          <a href="https://app.helplit.com.br/" target="_blank">
            <Button xl>🚧 plataforma</Button>
          </a>
        }
      />
    </Section>
  </Wallpaper>
);

export { Hero };
