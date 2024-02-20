import React from 'react'
import "./index.scss"
import myfoto from "../../../../assets/myfoto.png"

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

                            <h2>Professional <span style={{color: ""}}>Problem Solutions</span> For Digital Products</h2>
                        </div>


                        <div className='about-right'>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Home
