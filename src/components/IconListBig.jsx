const IconListBig = ({ icons }) => {
  return (
    <ul className="flex flex-wrap lg:justify-center gap-4 text-[50px] lg:text-[38px] md:text-[25px]">
      {icons.map((element, index) => (
        <li
          key={index}
          className="w-[100px] h-[100px] lg:w-[75px] lg:h-[75px] md:w-[50px] md:h-[50px] rounded-full bg-custom-grey border border-custom-white border-opacity-10 flex items-center justify-center"
        >
          {element}
        </li>
      ))}
    </ul>
  );
};

export default IconListBig;
