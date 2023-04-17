import "./globals.css";
import layoutStyle from "./layoutStyle.module.css";
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
              <h1>Fake Avatar</h1>
              <h4>
                Check right now<span className={colorText.color_text}>barbarian</span>collection →
              </h4>
            </div>
          </div>
          <aside>
            <div className={layoutStyle.aside_content}>
              <div>
                <h1>LOGO</h1>
                <div>
                  <h4>menu</h4>
                  <h4>menu</h4>
                  <h4>menu</h4>
                  <h4>menu</h4>
                </div>
              </div>
              <div>
                <h4>icon</h4>
                <h4>icon</h4>
                <h4>icon</h4>
                <h4>icon</h4>
              </div>
            </div>
          </aside>
        </header>
        {children}
      </body>
    </html>
  );
}
