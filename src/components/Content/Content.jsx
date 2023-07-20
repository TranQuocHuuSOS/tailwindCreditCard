import {FaUser} from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
const Content=()=>{
    return(
        <section className="flex-col">
            <div className="ml-[70px] mr-[54px] text-bold  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent">
                <div className="mt-16 flex items-start gap-8">
                    <FaUser size={"22px"} className="mt-[12px]"/>
                    <p className="text-26">
                        10245
                        <p className="text-13 font-semibold mb-[36px]">
                            customers
                        </p>
                    </p>
                </div>
                <div className="flex items-start mb-16 gap-8">
                <BsFillCreditCardFill size={"22px"} className="mt-[12px]"/>
                <p className="text-26">
                    12045
                    <p className="text-13 font-semibold ">Cards Issued</p>
                </p>
            </div>
            </div>
            <div className="text-13 flex flex-col w-[100%] mt-[90px]  font-semibold">
                <p className="check-content ">
                    <img src={checkIconMobile} alt="" />
                    <p className="">card reports send to your phone every weeks</p>
                </p>
                <p className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p className="">No extenal fees</p>
                </p>
                <p className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p className="">set spending  linits and restrictions</p>
                </p>
            </div>
        </section>
    );
}
export default Content