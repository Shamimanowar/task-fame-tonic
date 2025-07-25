import Banner from "../components/Banner";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <section className="bg-black m-auto text-center">
        <NavBar />
      </section>
    </div>
  );
}
