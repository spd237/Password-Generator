import Generate from "./Generate";
import Options from "./Options";
import Length from "./Length";
import Strength from "./Strength";

export default function PasswordInfo() {
  return (
    <form className="bg-dark-grey p-4 md:px-8 pb-8 pt-6">
      <Length />
      <Options />
      <Strength />
      <Generate />
    </form>
  );
}
