import fruitImage from "../fruit.png";

const NoResults = () => {
  return (
    <div className="relative flex justify-center" >
      <img src={fruitImage} alt="no results image" className="w-full" />
      <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 absolute top-10 w-2/5">
        <p className="w-full text-2xl text-center m-auto">
          Unfortunately you have searched for something that doesn't exist. We'd
          appreciate it if you could make a better search next time, as
          repeatedly warning you is getting tiring.
        </p>
      </div>
    </div>
  );
};

export default NoResults;
