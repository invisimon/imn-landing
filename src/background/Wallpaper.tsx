import { ReactNode } from 'react';

type IWallpaperProps = {
  children: ReactNode;
};

const Wallpaper = (props: IWallpaperProps) => (
  <div style={{ 
    backgroundImage: `url('/assets/images/orion-cut.jpg')`,
    
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
  }}>{props.children}</div>
);

export { Wallpaper };
