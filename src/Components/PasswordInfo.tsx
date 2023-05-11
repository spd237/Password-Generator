import Checkbox from "./Checkbox";
import Generate from "./Generate";
import Length from "./Length";
import Strength from "./Strength";
import { OptionsCheckedType } from "../types/index";

const OPTIONS = [
  {
    id: 1,
    name: "uppercaseLetters",
    option: "Uppercase Letters",
  },
  {
    id: 2,
    name: "lowercaseLetters",
    option: "Lowercase Letters",
  },
  {
    id: 3,
    name: "numbers",
    option: "Numbers",
  },
  {
    id: 4,
    name: "symbols",
    option: "Symbols",
  },
];

interface PropsType {
  optionsChecked: OptionsCheckedType;
  setOptionsChecked: React.Dispatch<React.SetStateAction<OptionsCheckedType>>;
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  generatePassword: () => void;
  strength: string;
  handleStrength: () => void;
}

export default function PasswordInfo({
  optionsChecked,
  setOptionsChecked,
  length,
  setLength,
  generatePassword,
  strength,
  handleStrength,
}: PropsType) {
  return (
    <form
      className="bg-dark-grey p-4 md:px-8 pb-8 pt-6"
      onSubmit={(e) => {
        e.preventDefault();
        generatePassword();
        handleStrength();
      }}
    >
      <Length length={length} setLength={setLength} />
      <div className="flex flex-col gap-4 mt-8">
        {OPTIONS.map((option) => {
          return (
            <Checkbox
              key={option.id}
              name={option.name}
              option={option.option}
              optionsChecked={optionsChecked}
              setOptionsChecked={setOptionsChecked}
            />
          );
        })}
      </div>
      <Strength strength={strength} />
      <Generate />
    </form>
  );
}
