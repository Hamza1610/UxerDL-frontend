import { Link } from "react-router-dom";


const Footer = () => {
    return (
    <footer>
        <div className="footer-contact-div">
            <h2>Contact Me</h2>
            <div className="contact-contents">
                <Link to='' ><p>Email <img className="icon" src='' alt=""/></p></Link>
                <Link to='' ><p>LinkedIn <img className="icon" src='' alt=""/></p></Link>
                <Link to='' ><p>Twitter <img className="icon" src='' alt=""/></p></Link>
                <Link to='' ><p>Facebook <img className="icon" src='' alt=""/></p></Link>
            </div>
        </div>
        <div className="footer-about-div">
            <h2>About Me</h2>
            <div className="about-contents">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatem dolorem quos veniam, maxime quis, recusandae 
                    quas repellat ex ea obcaecati exercitationem illo numquam 
                    porro, eos magni facilis tempora saepe accusantium!
                </p>
                <p>&copy; MHN Company</p>
            </div>
        </div>
        <div className="footer-navigation-div">
            <h2>Navigation</h2>
            <nav className="navigation-contents">
                <p><Link to='/'>Home <img className="icon" src='' alt=""/></Link></p>
                <p><Link to='/api/'>Books <img className="icon" src='' alt=""/></Link></p>
                <p><Link to='/api/search'>Search <img className="icon" src="" alt=""/></Link></p>
                <p><Link to='/api/upload'>Upload <img className="icon" src='' alt=""/></Link></p>
            </nav>
        </div>
        <div className="">

        </div>
    </footer>
    )
}
export default Footer;