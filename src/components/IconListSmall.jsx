const IconListSmall = ({ icons }) => {
  return (
    <ul className="flex flex-wrap lg:justify-center gap-4 text-[25px]">
      {icons.map((element, index) => (
        <li
          key={index}
          className="w-[50px] h-[50px] rounded-full bg-custom-grey border border-custom-white border-opacity-10 flex items-center justify-center"
        >
          {element}
        </li>
      ))}
    </ul>
  );
};

export default IconListSmall;
