import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="bg-black text-white p-8">
        <h1 className="text-2xl">Main Content</h1>
      </div>
    </div>
  );
}
