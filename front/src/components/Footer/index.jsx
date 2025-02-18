import React from 'react';
import "./index.scss"
import { FaStarOfLife } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>


                <div className='logo' style={{ display: "flex" }}>
                    <FaStarOfLife className='logo-icon' />
                    <div>
                        <h2>Ulvi</h2>
                    </div>
                </div>


                <div className='social-media'>

                    <div>

                        <a href="https://github.com/ulvieyvazov" target='_blank'>
                            <img src="https://researchcomputing.princeton.edu/sites/g/files/toruqf7036/files/styles/freeform_750w/public/2021-02/Github.png?h=0adafebd&itok=ifc6IOIP" alt="" />
                        </a>
                    </div>

                    <div>

                        <a href="https://www.linkedin.com/in/%C3%BClvi-eyvazov-752a73260/" target='_blank'>
                            <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png" alt="" />
                        </a>
                    </div>


                    <div>

                        <a href="https://www.instagram.com/__ulvi_eyvazov__/" target='_blank'>
                            <img src="https://www.omnicoreagency.com/wp-content/uploads/2018/09/Instagram-Logo-PNG-2018.png.webp" alt="" />
                        </a>
                    </div>


                    <div>

                        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fulvieyvazov" target='_blank'>
                            <img src="https://pbs.twimg.com/profile_images/1683366300054069248/67v23AEj_400x400.jpg" alt="" />
                        </a>
                    </div>

                </div>


                <div className='adress'>
                    <div>
                        <FaLocationDot style={{ color: "#cbff22", paddingRight: "7px" }} />
                        Baku, Absheron
                    </div>

                    <div style={{ margin: "40px 0" }}>
                        <IoMail style={{ color: "#cbff22", paddingRight: "7px" }} />
                        eyvazovulvi010101@gmail.com
                    </div>

                    <div>
                        <FaPhone style={{ color: "#cbff22", paddingRight: "7px" }} />
                        +944702736737
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
