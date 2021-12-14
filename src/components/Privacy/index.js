import './index.css'
import NavBar from "../NavBar";

function Privacy() {
    return (
        <>
            <NavBar/>
            <br/>
        <div className="body" id="info-card">
            <h1>Privacy Policy</h1>
            <div className="card border-light mb-3" >

                <div className="card-body">
                    <h4 className="card-title">Our Values</h4>
                    <p className="card-text">
                        <p>Jrivia believes in a fun, enjoyable experience without many strings attached.
                            We do not sell your information to anyone else, and it is mainly used to
                            make the site engaging. The only thing we want to do is make sure you are
                            entertained on the site, which is why we do not collect much information
                            about you or your activity. </p>
                        <p>The only sensitive information we collect is your username and password so
                            that you can log in to interact with the trivia questions. Additionally,
                            to make your experience better, we do not host any predatory advertisements
                            or sponsorships on the site.</p>
                    </p>
                    <h4 className="card-title">Sign Up</h4>
                    <p className="card-text">
                        <p>When you create an account on Jrivia, you provide us with some information
                            that can be potentially sensitive. Such information includes your
                            username and password, which are stored on our online database. While
                            we make sure to encrypt your password for more security, due to the
                            nature of how we store your data on our remote API, we urge our users
                            to make sure to create unique usernames with safe and secure passwords. </p>
                    </p>
                    <h4 className="card-title">Information Collected</h4>
                    <p className="card-text">
                        <p>Here at Jrivia, we store your username, password, and trivia statistics
                            in our online database. As for the information other than your
                            personal log-in details, we keep a tally as to how many trivia
                            questions you have gotten right or wrong if you choose to vote on
                            any, and store the questions that you bookmark/favorite. This
                            trivia-related information is available to other users of the site
                            if they navigate to your profile.</p>
                    </p>
                    <h4 className="card-title">How We Use Your Information</h4>
                    <p className="card-text">
                        <p>The information that we collect is necessary for the user’s experience
                            on the site. We only use it to allow people to log in, interact with
                            the trivia questions, and view user profiles. Besides your log-in
                            information, we publicly display almost all of the information we
                            store about our users (trivia statics, liked questions, etc.) on our site. </p>
                    </p>
                    <h4 className="card-title">What Information We Share</h4>
                    <p className="card-text">
                        <p>Currently, Jrivia does not send any of the information we store
                            anywhere outside of the site, and it is merely there for the viewing
                            pleasure of our users. If someone does gain access to our database,
                            that is not because we sold the information. Jrivia is an entertainment
                            site, meant for fun and enjoyment, so we do not sell your information
                            to anyone and we do not host any advertisements. </p>
                    </p>
                </div>
            </div>

        </div>
        </>

    )
}
export default Privacy;