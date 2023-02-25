import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/scroll1.jpg";
import img2 from "../assets/scroll2.jpg";

//importing react icon
import { BiCodeBlock } from "react-icons/bi";
import { BsFillFileCodeFill } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiSearchEyeFill } from "react-icons/ri";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { SiBlockchaindotcom } from "react-icons/si";

export function Service() {
  return (
    <div>
        <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showThumbs={false}
            interval={1000}>

            <div>
                <img src={img1} alt="image1"/>
                <p className="legend">Full Stack Development</p>
            </div>

            
            <div>
                <img src={img2} alt="image2" />
                <p className="legend">Peer-to-Peer Support</p>
            </div>

        </Carousel>

        <section>
      <div class="row">
        <h2 class="section-heading">Our Services</h2>
      </div>
      <div class="row">

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
                <BiCodeBlock/>
            </div>
            <h3>Web App Development</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <BsFillFileCodeFill/>
            </div>
            <h3>Mobile App Development</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <SiMaterialdesignicons/>
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <RiSearchEyeFill/>
            </div>
            <h3>QA & Testing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <BsFillCloudCheckFill/>
            </div>
            <h3>Cloud Services</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <SiBlockchaindotcom/>
            </div>
            <h3>Blockchain Development</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>

      </div>
    </section>

    </div>
  )
}