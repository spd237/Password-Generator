export default function Generate() {
  return (
    <button
      className="group bg-neon-green text-dark-grey uppercase flex w-full items-center  justify-center gap-4 p-4 mt-4 relative border-2  border-neon-green hover:before:scale-x-[99.9%]  hover:text-neon-green transition-colors duration-300 ease-in-out z-10
     before:absolute before:top-0 before:left-0 before:right-[0] before:bottom-0 before:z-[-1] before:bg-dark-grey before:transition-transform before:duration-300 before:ease-in-out  before:transform before:scale-x-0 before:origin-left md:text-lg"
    >
      generate
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          className=" group-hover:fill-neon-green"
          fill="#24232C"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  );
}
