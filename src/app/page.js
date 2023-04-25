import home from "./styles/home_page.module.css";
import Banner from "./Banner/Banner.js";
import Collections from "./Collections/Collections.js";
export default function Home() {
  return (
    <main className={home.homeStyle}>
      <Banner />
      <Collections />
    </main>
  );
}
