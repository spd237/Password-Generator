import { OptionsCheckedType } from "../types/index";

interface PropsType {
  name: string;
  option: string;
  optionsChecked: OptionsCheckedType;
  setOptionsChecked: React.Dispatch<React.SetStateAction<OptionsCheckedType>>;
}

export default function Checkbox({
  name,
  option,
  optionsChecked,
  setOptionsChecked,
}: PropsType) {
  return (
    <div className="flex items-center gap-5 relative">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={optionsChecked[name as keyof OptionsCheckedType]}
        onChange={() =>
          setOptionsChecked({
            ...optionsChecked,
            [name]: !optionsChecked[name as keyof OptionsCheckedType],
          })
        }
        className={`appearance-none  
           cursor-pointer w-5 h-5 after:w-5 after:h-5 after:absolute after:border-2 after:border-almost-white checked:after:border-neon-green
           checked:after:bg-checkmark
           checked:after:bg-neon-green
           after:bg-no-repeat after:bg-center
           `}
      />
      <label htmlFor={name} className="cursor-pointer md:text-lg">
        Include {option}
      </label>
    </div>
  );
}
