import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
//import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../components/assets/restaurant-food.jpg"
import headerImg2 from "../components/assets/food2.jpg"
import headerImg3 from "../components/assets/food3.jpg"
import headerImg4 from "../components/assets/food4.jpg"
import headerImg5 from "../components/assets/food5.jpg"


import "./Banner.css"

function Banner () {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsdeleting] = useState(false)
    const toRotate = ["Little Lemon", "Little Lemon", "Little Lemon"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() & 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsdeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsdeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            {/* <span className="tagline">Welcome to Little Lemon</span> */}
                            <h2>{`Hi! This is `}<span className="wrap">{text}</span></h2>
                            <h3>Chicago</h3>
                            <p>We are a family owned Mediterranean restaurant, <br />focused on traditional recipes served with a modern twist.</p>
                            <button onClick={() => console.log("Reserve a Table")}>Reserve a table</button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <div id="wrap">
                                <div class="img-list">
                                    <img src={headerImg} alt="Header Img" />

                                </div>


                            </div>





                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Banner