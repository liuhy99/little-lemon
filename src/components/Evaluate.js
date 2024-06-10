import customer1 from "../components/assets/customer1.jpg"
import customer2 from "../components/assets/customer2.jpg"
import customer3 from "../components/assets/customer3.jpg"
import customer4 from "../components/assets/customer4.jpg"

import "./Evaluate.css"

function Evaluate () {
    return (
        <>
            <section className="evaluate">
                <h3>What people say about us!</h3>
                <section className="personal-evaluate">
                    <article className="evaluate1">
                        <img src={customer1} alt=''></img>
                        <h5>Maria Sanchez</h5>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </article>
                    <article className="evaluate2">
                        <img src={customer2} alt=''></img>
                        <h5>Antony Clifton</h5>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </article>
                    <article className="evaluate3">
                        <img src={customer3} alt=''></img>
                        <h5>Tamika Jackson</h5>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </article>
                    <article className="evaluate4">
                        <img src={customer4} alt=''></img>
                        <h5>Brandon Ming</h5>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </article>

                </section>


            </section>
        </>
    )
}

export default Evaluate