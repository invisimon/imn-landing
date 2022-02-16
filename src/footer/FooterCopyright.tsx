import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.site_name}. <a href="https://short-serpent-e22.notion.site/Conhe-a-a-Helplit-21ab2daff9514bfc8472b21ef13f9fd5" target="_blank"><u>Ah! Também precisamos da sua ajuda!</u></a>
    <br/>( template de <strong>creativedesignsguru.com</strong> e artes de <strong>storyset.com</strong> )
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
