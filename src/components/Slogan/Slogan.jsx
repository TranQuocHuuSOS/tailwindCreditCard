import Cards from "../../assets/desktop/isocard.svg";
const Slogan=()=>{
    return(
        <section className="text-36 my-14 ">
            <div className="text-center">
                <p className="my-4 font-extrabold">
                    Earn<span className="text-purple-300"> More</span> 
                </p>
                <p className="my-4 font-extrabold">
                    Pay Less
                </p>
                <button className="my-4 text-20 px-6 py-[6px] font-bold mt-[24px] bg-purple-500  hover:bg-pink-500 transition-all duration-300 cursor-pointer">
                    Start
                </button>
            </div>
            <div className="mt-[69px]">
                <img src={Cards} alt="credit card" />
            </div>
        </section>
    );
}
export default Slogan