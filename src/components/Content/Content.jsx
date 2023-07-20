import {FaUser} from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
const Content=()=>{
    const customer =useSpring({customers: 12045, from:{customers:0}})
    const numberss =useSpring({numbers: 12045, from:{numbers:0}})
    return(
        <section className="md:flex-row md:flex ">
            <div className="ml-[70px] mr-[54px] text-bold  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[20%]">
                <div className="mt-16 flex items-start gap-8 light:text-purple-700">
                    <FaUser size={"22px"} className="mt-[12px]"/>
                    <p className="text-26">
                        <animated.div>
                            {customer.customers.to((val)=>Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold mb-[36px] md:text-16">
                            customers
                        </p>
                    </p>
                </div>
                <div className="flex items-start mb-16 gap-8 light:text-purple-700">
                <BsFillCreditCardFill size={"22px"} className="mt-[12px]"/>
                <p className="text-26">
                   <animated.div>
                    {numberss.numbers.to((val)=>Math.floor(val))}
                   </animated.div>
                    <p className="text-13 font-semibold md:text-16">Cards Issued</p>
                </p>
            </div>
            </div>
            <div className="text-13 flex flex-col w-[100%] mt-[90px]  font-semibold md:mt-0 md:w-[30%] md:text-16 md:ml-[20%]">
                <div className="check-content md:mx-0 light:text-purple-700">
                    <img src={checkIconMobile} alt="" />
                    <p className="">card reports send to your phone every weeks</p>
                </div>
                <div className="check-content md:mx-0 light:text-purple-700">
                    <img src={checkIconMobile} alt="" />
                    <p className="">No extenal fees</p>
                </div>
                <div className="check-content md:mx-0 light:text-purple-700">
                    <img src={checkIconMobile} alt="" />
                    <p className="">set spending  linits and restrictions</p>
                </div>
            </div>
        </section>
    );
}
export default Content