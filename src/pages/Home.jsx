import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import SnakesBox from "../components/SnakesBox";

function Home() {

  return (
    
          <div className=" p-6 max-w-6xl mx-auto font-ubuntu "> 
          
               <div className=" grid grid-cols-2 gap-1 py-[104px] "> 
               
                   {/* header */}
                   <div className=" space-y-8">

                       <h1 className=" text-white font-bold text-2xl"> မြွေများ 
                          <span className=" text-lg font-light text-sec "> - 
                          <span className=" text-lg text-sec font-semibold"> Snakes </span> </span> 
                       </h1>

                       <SnakesBox />

                       {/* social_link */}
                       <div className=" flex justify-start items-center gap-4">

                           <a href="" className=""> 
                             <FontAwesomeIcon icon={ faFacebook } className=" text-white text-2xl hover:text-sec" />
                           </a>

                           <a href="https://my.wikipedia.org/wiki/%E1%80%99%E1%80%BC%E1%80%BD%E1%80%B1" 
                              className="" target="_blank">
                             <FontAwesomeIcon icon={ faWikipediaW } className=" text-white text-2xl hover:text-sec" />
                           </a>

                       </div>

                   </div>

                   {/* text_section */}
                   <div className=" relative bg-bg p-8 py-12 rounded-md opacity-85 space-y-6">

                       <p className=" text-black leading-8 font-bold mb-10 opacity-100">မြွေသည် ရက်ပတီလီယာ မျိုးပေါင်းတွင် စကွာမေတာမျိုးစဉ် ဆာပင်တီး မျိုးစဉ်ခွဲ၌ ပါဝင်၏။ မြွေကို ကိုင်ကြည့်လျှင် အေးခြင်းမှာ ယင်းသည် သွေးအေး သတ္တဝါဖြစ်ခြင်းကြောင့် ဖြစ်သည်။ လူတို့သည် မြွေကို များသောအားဖြင့် ကြောက်၏။ ထိုအချက်ကြောင့်ပင် မြွေကို ကြောက်စိတ်မရှိသူများအဖို့နှင့် ကြောက်စိတ်ကို ကျော်လွန်နိုင်သူများအဖို့ မြွေသည် ပို၍ စိတ်ဝင်စားဖွယ် ကောင်းလာလေသည်။ မြွေကို လူသည် မွေးကတည်းက ကြောက်မလာချေ။ ကလေးသည် မြွေကို ကြောက်စိတ်နှင့် ကြည့်သည့်ထက် စိတ်ဝင်စားစွာ ကြည့်သည်က များသည်။</p>

                       <Link to='/detail' className=" absolute right-6 bottom-6 "> 
                      
                            <button className=" p-1 px-3 text-base font-normal bg-sec rounded mt-4 opacity-100 hover:tracking-widest "> ReadMore </button>
                       
                       </Link>

                   </div>

               </div>
          
          </div>

  )
}

export default Home;
