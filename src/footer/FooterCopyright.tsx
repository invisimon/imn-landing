import { AppConfig } from '../utils/AppConfig';

import TXT from '../templates/strings';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.site_name}. <a href='mailto:oi@helplit.com.br' target="_blank"><u>{TXT('TEASER')}</u></a>
    <br/>( template: <strong>creativedesignsguru.com</strong> | arts: <strong>storyset.com</strong> )
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
