import MenuBar from "./components/MenuBar/MenuBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <MenuBar />
      <div>
        <p>homepage</p>
      </div>
    </main>
  );
}
