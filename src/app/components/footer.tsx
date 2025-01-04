import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Be the First to Know</h2>
          <p>Sign up for updates from appscrip.</p>
          <div className="email-signup">
            <input
              type="email"
              placeholder="Enter your email..."
              className="footer-input"
            />
            <button className="footer-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>
            <strong>Phone:</strong>  +919818......
            <br />
            <strong>Email:</strong> appscrip@gmail.com
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Connect with us on:</p>
          <ul className="social-links">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Metta Muse. All rights reserved.</p>
      </div>
    </footer>
  );
}
