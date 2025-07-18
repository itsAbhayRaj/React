
const Card = ({name,imgSrc,title='not given'}) => {
    
    console.log(name,title);

  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-3">
        <img
          src={imgSrc}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2> {/*{title || "visite me "}*/ /*readability issue*/}
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
  )
}

export default Card;