import Image from "next/image";

const CardWithButton = ({
    title, 
    description, 
    main,
    height,
    img,
  } : {
    title: string, 
    description: string,
    main?: boolean,
    height?: number,
    img?: string,
  }) => {
  return (
    <div className={`relative w-full ${height ? 'h-[350px] md:h-[450px]' : 'min-h-[50px] lg:min-h-[215px]'} bg-white bg-opacity-80 rounded-3xl shadow-lg p-4 md:p-6 overflow-hidden cursor-pointer flex flex-col items-start justify-start hover:scale-105 duration-300 group`}>
      {/* Card Content */}
      <h3 className={`font-bold mb-2 font-raleway ${main ? 'text-xl lg:text-3xl' : 'text-lg md:text-xl'} z-10`}>{title}</h3>
      <p className="text-gray-600 text-sm md:text-md z-10 hyphens-auto break-words">
        {description}
      </p>

      {/* Card Image */}
      {img && (
        <div className="w-64 h-64 lg:w-full lg:h-full flex items-center justify-center z-0">
          <Image 
            src={img}
            width={300}
            height={300}
            alt="Service image"
            className="object-cover opacity-100 -mt-12"
          />
        </div>
      )}

      {/* Open Link Button */}
      <div
        className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
      >
        <Image 
          src={'/images/arrow-up.png'}
          width={25}
          height={25}
          alt="Arrow up"
          />
      </div>
    </div>
  );
};

export default CardWithButton;