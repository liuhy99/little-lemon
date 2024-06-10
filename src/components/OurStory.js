import ourstoryImg1 from "../components/assets/chefs-mario-and-adrian_a.jpg"
import ourstoryImg2 from "../components/assets/chefs-mario-and-adrian_b.jpg"

import "./OurStory.css"

function OurStory () {
    return (
        <>
            <section className="ourstory">
                <div className="story">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Sed ut
                        perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                    </p>
                </div>
                <div className="ourstory-img">
                    <img className="storyimg1" src={ourstoryImg1} alt=''></img>
                    <img className="storyimg2" src={ourstoryImg2} alt=''></img>

                </div>
            </section>
        </>
    )
}
export default OurStory