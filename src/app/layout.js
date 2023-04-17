import "./globals.css";
import Logo from "./components/Logo.js";
import HeaderIcons from "./components/HeaderIcons.js";
import layoutStyle from "./homeStyle/layoutStyle.module.css";
import colorText from "./colorText.module.css";

export const metadata = {
  title: {
    default: "NickName",
    template: "%s | NickName",
  },
  description: "Descrição do meu site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header className={layoutStyle.header}>
          <div className={layoutStyle.advise_bar}>
            <div className={layoutStyle.advise_content}>
              <h1>
                Brand new collection out here. Called <span className={colorText.color_text}>Brutal#01</span>
              </h1>
              <h4>
                Check right now<span className={colorText.color_text}>barbarian</span>collection →
              </h4>
            </div>
          </div>
          <aside>
            <div className={layoutStyle.aside_content}>
              <div>
                <Logo />
                <div>
                  {/* Trocar tudo por LINK */}
                  <h4>Coleções</h4>
                  <h4>Brutal</h4>
                  <h4>Minimal</h4>
                  <h4>Novidades</h4>
                  <h4>Promo</h4>
                  <h4>Contate</h4>
                </div>
              </div>
              <HeaderIcons />
            </div>
          </aside>
        </header>
        {children}
      </body>
    </html>
  );
}
