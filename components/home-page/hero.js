import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
       
        <Image
          src="/images/site/goktug.jpeg"
          alt="An image showing Goktug"
          width={100}
          height={100}
        />
      </div>
      <h1> Hi I'm Goktug</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
}

export default Hero;
