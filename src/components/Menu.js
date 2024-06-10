import mealcardImg1 from "../components/assets/bruschetta.jpg"
import mealcardImg2 from "../components/assets/greek-salad.jpg"
import mealcardImg3 from "../components/assets/lemon-dessert.jpg"

import "./Menu.css"

function Menu () {

    return (
        <>
            <section className="menu" id="menu">
                <div className="menu-banner">
                    <h3>This week specials!</h3>
                    <button className="menu-button" onClick={() => console.log("online menu")}>Online Menu</button>
                </div>
                <section className="meals">
                    <article className="section1">
                        <img src={mealcardImg1} alt="meal1"></img>
                        <div className="mealheader1">
                            <h3>Greek Salad</h3>
                            <span>$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button>order a delivery</button>
                    </article>
                    <article className="section2">
                        <img src={mealcardImg2} alt="meal2"></img>
                        <div className="mealheader2">
                            <h3>Greek Salad</h3>
                            <span>$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button>order a delivery</button>
                    </article>
                    <article className="section3">
                        <img src={mealcardImg3} alt="meal3"></img>
                        <div className="mealheader3">
                            <h3>Greek Salad</h3>
                            <span>$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button>order a delivery</button>
                    </article>

                </section>


            </section>

        </>
    )
}

export default Menu