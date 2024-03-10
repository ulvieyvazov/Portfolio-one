import React from 'react'
import "./index.scss"
import myfoto from "../../../../assets/myfoto.png"
import { FaCheck } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Home = () => {
    return (
        <div id='home-container'>
            <div className='home-parent'>
                <section id='section1'>
                    <div className='section1-parent'>
                        <div className='home-left'>
                            <div className='home-left-text'>
                                <span>
                                    Hello, i’m
                                </span>

                                <h1 style={{ color: "#c9f31d", fontSize: "45px" }}>
                                    Eyvazov Ulvi
                                    <br />
                                </h1>
                                <h1 style={{ fontSize: "35px" }}>Web Developer</h1>

                                <p>
                                    We denounce with righteous indignation dislike demoralized by the charms of pleasure
                                </p>

                                <form action="">
                                    <button style={{ padding: "12px 28px", fontSize: "17px", borderRadius: "14px", backgroundColor: "#cbff22", border: "0", cursor: "pointer" }}>
                                        Hire Me
                                    </button>

                                    <button style={{ padding: "12px 25px", fontSize: "17px", backgroundColor: "transparent", color: "white", border: "0", cursor: "pointer" }}>
                                        Donwload Resume
                                    </button>
                                </form>

                            </div>


                            <div className='home-left-image'>
                                {/* <div className='circle'></div> */}
                                <img src={myfoto} alt="" />
                            </div>
                        </div>

                        <div className='home-right'>
                            <div className='home-right-parent'>
                                <div>
                                    <p style={{ fontSize: "28px", color: "#cbff22", padding: "5px 0", fontWeight: "600" }}>2+</p>
                                    <p style={{ fontSize: "15px", color: "gray" }}>Years Of Experience</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: "28px", color: "#cbff22", padding: "5px 0", fontWeight: "600" }}>7+</p>
                                    <p style={{ fontSize: "15px", color: "gray" }}>Project Complete</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: "28px", color: "#cbff22", padding: "5px 0", fontWeight: "600" }}>100%</p>
                                    <p style={{ fontSize: "15px", color: "gray" }}>Client Satisfactions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id='about'>
                    <div className='about-parent'>
                        <div className='about-left'>
                            <h3>About Me</h3>

                            <h2>Professional <span style={{ color: "#cbff22" }}>Problem Solutions</span> For Digital Products</h2>

                            <p>At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum</p>

                            <ul>
                                <div>
                                    <li><FaCheck style={{ color: "#cbff22", fontSize: "16px", marginRight: "8px" }} />
                                        Branding & Design</li>
                                    <li><FaCheck style={{ color: "#cbff22", fontSize: "16px", marginRight: "8px" }} />
                                        Digital Marketing</li>
                                </div>
                                <div>
                                    <li><FaCheck style={{ color: "#cbff22", fontSize: "16px", marginRight: "8px" }} />
                                        Web Development</li>
                                    <li><FaCheck style={{ color: "#cbff22", fontSize: "16px", marginRight: "8px" }} />
                                        Product Design</li>
                                </div>
                            </ul>

                            <div className='about-info-box'>

                                <div className='about-info-left'>

                                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#cbff22", position: "relative", marginRight: "15px" }}>
                                        <MdOutlineMail style={{ position: "absolute", fontSize: "20px", top: "10px", left: "10px" }} />
                                    </div>

                                    <div>
                                        <span>Email Us</span> <br />
                                        <a href="eyvazovulvi010101@gmail.com">eyvazovulvi010101@gmail.com</a>
                                    </div>
                                </div>




                                <div className='about-info-right'>
                                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#cbff22", position: "relative", marginRight: "15px" }}>
                                        <FaPhone style={{ position: "absolute", fontSize: "20px", top: "10px", left: "10px" }} />
                                    </div>


                                    <div>
                                        <span>Make A Call</span> <br />
                                        <a href="+994 (70) 273 6737">+994 (70) 273 6737</a>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className='about-right'>
                            <div className='about-right-parent'>
                                <img src={myfoto} alt="" />                                
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Home
