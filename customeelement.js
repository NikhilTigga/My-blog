class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <section class="banner">


    </section>
    <section class="fixenav">
        <hr>
        <section class="navbar">
            <div class="topnav">
                <a class="active" href="index.html">Home</a>
                <a class="active" href="contact.html">Contact</a>
                <a class="active" href="about.html">About</a>
                <a class="active" href="#blog">Blog</a>
                <a class="active" href="#community">Community</a>
                <a class="active" href="#store">Store</a>
                <a class="active" href="FAQ.html">FAQ</a>
            </div>



        </section>
        <hr>
    </section>
        
        `
    }
}
class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <div class="logoo">
            <a href="#image"><img src="images/instagram.png" alt="instagram"></a>


            <a href="#facebook"><img src="images/facebook.png" alt="facebook"></a>



            <a href="#twitter"><img src="images/tuitter.png" alt="twitter"></a>


            <a href="#youtube"><img src="images/youtube.png" alt="youtube"></a>


            <a href="#printerest"><img src="images/printerest.png" alt="printerest"></a>
        </div>

        <div class="footer-container">
            <div class="footer-section about">
                <h2>About Us</h2>
                <p>We are dedicated to providing the best content and resources to help you succeed. From productivity
                    hacks to travel guides, our goal is to inspire and inform our readers every day.</p>
            </div>
            <div class="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#store">Store</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h2>Contact Us</h2>
                <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main Street, Anytown, USA</p>
            </div>
            <div class="footer-section follow">
                <h2>Follow Us</h2>
                <ul>
                    <li><a href="http://facebook.com/yourpage">Facebook</a></li>
                    <li><a href="http://twitter.com/yourpage">Twitter</a></li>
                    <li><a href="http://instagram.com/yourpage">Instagram</a></li>
                    <li><a href="http://linkedin.com/yourpage">LinkedIn</a></li>
                </ul>
            </div>
            <div class="footer-section newsletter">
                <h2>Newsletter</h2>
                <p>Stay updated with our latest news and offers. Subscribe to our newsletter by entering your email
                    below.</p>
                <form action="#">
                    <input type="email" placeholder="Enter your email" required>
                    <input type="submit" value="Subscribe">
                </form>
            </div>
        </div>
        <div class="disclaimer">
            <p>All information provided on this website is for informational purposes only. We make no representations
                as to the accuracy, completeness, suitability, or validity of any information on this site and will not
                be liable for any errors, omissions, or delays in this information or any losses, injuries, or damages
                arising from its display or use.</p>
        </div>
        <div class="copyright">
            <p>© 2024 Your Company. All rights reserved.</p>
        </div>

    </footer>

        `
    }
}
customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)
