import PasswordDisplay from "./Components/PasswordDisplay";
import PasswordOptions from "./Components/PasswordOptions";

function App() {
  return (
    <main className=" font-jetbrains-mono text-almost-white flex flex-col gap-4 font-bold md:w-[540px]">
      <h1 className=" text-grey text-center md:text-2xl">Password Generator</h1>
      <PasswordDisplay />
      <PasswordOptions />
    </main>
  );
}

export default App;
