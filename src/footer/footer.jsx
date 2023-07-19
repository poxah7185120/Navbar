import React from "react";
import './footer.css';
import fb from '../simages/fb.png'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                <h3>For Business</h3>
                <a href="/employer">
                    <p>Employer</p>
                </a>
                <a href="/healthplan">
                    <p>Health Plan</p>
                </a>
                <a href="/individual">
                    <p>Individual</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
                <h3>Resources
                </h3>
                <a href="/resource">
                    <p>Resource center</p>
                </a>
                <a href="/resource">
                    <p>Testimonials</p>
                    </a>
                <a href="/resource">
                    <p>STV</p>
                </a>    
                </div>
                <div className="sb_footer-links_div">
                    <h3>Partners</h3>
                    <a href="/employer">
                        <p>Swing Tech</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h3>Company</h3>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h3>Coming Soon on</h3>
                    <div className="socialmedia">
                         {/* <p><img src={fb} alt=""/></p>
                        {/* <p><img src={twitter} alt=""/></p>
                        <p><img src={linkedin} alt=""/></p>
                        <p><img src={insta} alt=""/></p>  */} 
                        {/* <a class="footer_linkedin__kbjVi" href="https://in.linkedin.com" target="_blank" rel="noreferrer"><i aria-hidden="true" class="icon linkedin"></i></a> */}
                        <a class="footer_instagram__kNg1g" href="https://www.instagram.com/geeks_for_geeks/" target="_blank" rel="noreferrer"><i aria-hidden="true" class="icon instagram"></i></a>
                    </div>
                </div>
        </div>
           <hr></hr> 
        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                   @{new Date().getFullYear()} CodeInn. All right reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>
        </div></div>
    )

}
export default Footer;