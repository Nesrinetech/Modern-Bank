import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />


    {/* gradient start */}
        <div className= "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Streamline Your Billing <br className="sm:block hidden" />  and Invoicing Effortlessly
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Simplify your financial operations with our user-friendly system. Efficiently manage billing and invoicing, ensuring a seamless and stress-free experience for your business.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
            <img src={google} alt="google_play" className="w-[144px] h-[43px] object-contain cursor-pointer" />

        </div>
    </div>
  </section>
);

export default Billing;