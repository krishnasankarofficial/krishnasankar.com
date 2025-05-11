import Image from "next/image";

const CardWithButton = ({
    title, 
    description, 
    main,
    img,
  } : {
    title: string, 
    description: string,
    main?: boolean,
    img?: string,
  }) => {
  return (
    <div 
      className={`relative w-full ${main ? 'h-[350px] md:h-[450px]' : 'min-h-[50px] lg:min-h-[215px]'} bg-gradient-to-t from-black 
      to-gray-900 bg-opacity-80 hover:from-cyan-500 hover:to-green-500 hover:text-black rounded-3xl shadow-lg xl:p-6 p-4 
      overflow-hidden cursor-pointer flex flex-col items-start justify-end group`}>
      {/* Card Image */}
      {img && (
        <div className="flex items-start justify-start z-0">
          <Image 
            src={img}
            width={main?'350':'100'}
            height={300}
            alt="Service image"
            className="object-contain opacity-100 grayscale -mt-12"
          />
        </div>
      )}
      {/* Card Content */}
      <h3 className={`font-bold mb-2 font-raleway ${main ? 'text-xl lg:text-3xl' : 'text-lg md:text-xl'} z-10`}>{title}</h3>
      <p className="text-gray-300 group-hover:text-gray-900 text-sm md:text-md z-10 hyphens-auto break-words pr-4">
        {description}
      </p>


      {/* Open Link Button */}
      <div
        className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-cyan-500 to-green-500 rounded-full p-2 
        shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2
        group-hover:-translate-x-2 z-40"
      >
        <Image 
          src={'/images/black-arrow-up.png'}
          width={25}
          height={25}
          alt="Arrow up"
          />
      </div>
    </div>
  );
};

export default CardWithButton;