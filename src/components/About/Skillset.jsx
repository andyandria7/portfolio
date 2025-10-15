import { Col, Row } from "react-bootstrap";
import { DiGit, DiJava, DiJavascript1, DiPython, DiReact } from "react-icons/di";
import { FaBootstrap, FaLaravel,FaReact,FaFire, FaSass, FaSymfony, FaVuejs  } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiCsharp } from "react-icons/si";
import { Flat } from '@alptugidin/react-circular-progress-bar';
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

function Skillset() {
    const [laravel, setLaravel] = useState(0);
    const [CodeIgniter, setCodeIgniter] = useState(0);
    const [react, setReact] = useState(0);
    const [vuejs, setVuejs] = useState(0);
    const [symfony, setSymfony] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [tailwindcss, setTailwindcss] = useState(0);
    const [sass, setSass] = useState(0);
    const [php, setPhp] = useState(0);
    const [js, setJs] = useState(0);
    const [git, setGit] = useState(0);
    const [python, setPyton] = useState(0);
    const [java, setJava] = useState(0);
    const [csharpe, setCsharpe] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        if (!isFlipped) {
            setIsFlipped(true);
            setTimeout(() => {
                setLaravel(70);
                setReact(55);
                setCodeIgniter(50)
                setVuejs(55);
                setSymfony(40);
                setBootstrap(60);
                setTailwindcss(80);
                setSass(55);
                setPhp(40);
                setJs(40);
                setGit(40);
                setPyton(15);
                setJava(40);
                setCsharpe(20);
            }, 500);
        }
    };

    const handleMouseLeave = () => {
        if (isFlipped) {
            setIsFlipped(false);

            // setLaravel(0);
            // setReact(0);
            // setSymfony(0);
            // setBootstrap(0);
            // setTailwindcss(0);
            // setSass(0);
            // setPhp(0);
            // setJs(0);
            // setLaragon(0);
            // setMysql(0);
            // setGit(0);
            // setPyton(0);
            // setJava(0);
            // setCsharpe(0);

        }
    };


    return (
        <Row style={{ justifyContent: "center" }}>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>
                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <FaLaravel />
                    </div>
                    <div className="card " style={{ height: '6.5rem' }} >
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={laravel}
                                text='Laravel'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff',
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>
                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <FaReact />
                    </div>
                    <div className="card " style={{ height: '6.5rem' }} >
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={react}
                                text='ReactJs'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff',
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <FaVuejs />
                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={vuejs}
                                text='VueJs'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <FaFire />
                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={CodeIgniter}
                                text='VueJs'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <DiJava />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }} >
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={java}
                                text='Java'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <FaSymfony />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={symfony}
                                text='symfony'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <FaBootstrap />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={bootstrap}
                                text='bootstrap'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <SiTailwindcss />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={tailwindcss}
                                text='Tailwindcss'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <FaSass />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={sass}
                                text='Sass'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <SiPostgresql />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={php}
                                text='php'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <DiJavascript1 />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={js}
                                text='js'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <DiGit />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={git}
                                text='Git'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <DiPython />

                    </div>
                    <div className="card " style={{ height: '6.5rem' }} >
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={python}
                                text='python'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }}>
                        <DiReact />
                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={react}
                                text='ReactJs'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
            
            <Col xs={4} md={2} className="tech-icons pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isFlipped={isFlipped}>

                {/* flip */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="card bg-transparent  text-white d-flex justify-content-center align-items-center text-center " style={{ height: '104px' }} >
                        <SiCsharp />
                    </div>
                    <div className="card " style={{ height: '6.5rem' }}>
                        <div className="circle" style={{
                            width: '6rem',
                            marginTop: '-9px',
                            marginLeft: '34px'
                        }}>
                            <Flat
                                progress={csharpe}
                                text='c#'
                                sx={{
                                    strokeColor: '#700c86',
                                    barWidth: 5,
                                    height: '5rem',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    color: '#fff', // Change text color to white
                                }}
                            />
                        </div>
                    </div>

                </ReactCardFlip>
            </Col>
        </Row>
    )
}

export default Skillset