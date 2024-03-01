import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}> 
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
    Discover Optimal  <br className="sm:block hidden" />  Card Offers
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Effortlessly navigate to superior card deals with just a few simple steps. Arcu tortor, purus in mattis at, sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, amet. Uncover the best card deals tailored to your needs.
    </p>

    <Button styles="mt-10" />
  </div>
  

  <div className={layout.sectionImg}>
    <img src={card} alt="card" className="w-[100%] h-[100%]" />
  </div>
  </section>
);

export default CardDeal;