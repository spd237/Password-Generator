import { useState } from "react";
import PasswordDisplay from "./Components/PasswordDisplay";
import PasswordInfo from "./Components/PasswordInfo";
import { OptionsCheckedType, charsType } from "./types/index";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [strength, setStrength] = useState("too weak");
  const [optionsChecked, setOptionsChecked] = useState({
    uppercaseLetters: false,
    lowercaseLetters: false,
    numbers: false,
    symbols: false,
  });

  function generatePassword() {
    if (
      length === 0 ||
      Object.values(optionsChecked).every((value) => value === false)
    ) {
      return "";
    }

    const chars: charsType = {
      uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_-=+{}",
    };

    let newPassword = "";
    const checked = Object.keys(optionsChecked).filter(
      (key) => optionsChecked[key as keyof OptionsCheckedType] === true
    );

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * checked.length);
      const value = checked[randomIndex];
      newPassword += chars[value as keyof charsType].charAt(
        Math.floor(Math.random() * chars[value as keyof charsType].length)
      );
    }
    setPassword(newPassword);
  }

  function handleStrength() {
    const selectedOptions = Object.values(optionsChecked).filter(
      (value) => value === true
    ).length;
    if (length <= 5) setStrength("too weak");
    if (length >= 11) setStrength("strong");
    if (length > 5 && length < 9 && selectedOptions < 3) {
      setStrength("weak");
    } else if (length > 5 && length < 9 && selectedOptions > 2) {
      setStrength("medium");
    }
    if (length > 8 && length < 11 && selectedOptions < 2) {
      setStrength("medium");
    } else if (length > 8 && length < 11 && selectedOptions > 1) {
      setStrength("strong");
    }
  }

  return (
    <main className=" font-jetbrains-mono text-almost-white flex flex-col gap-4 font-bold md:w-[540px]">
      <h1 className=" text-grey text-center md:text-2xl">Password Generator</h1>
      <PasswordDisplay password={password} />
      <PasswordInfo
        optionsChecked={optionsChecked}
        setOptionsChecked={setOptionsChecked}
        length={length}
        setLength={setLength}
        generatePassword={generatePassword}
        strength={strength}
        handleStrength={handleStrength}
      />
    </main>
  );
}

export default App;
