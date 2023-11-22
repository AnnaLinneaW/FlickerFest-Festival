const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="container mx-auto flex justify-between">
        {/* Adress */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Adress</h3>
          <p>123 Main Street</p>
          <p>Cityville, ST 12345</p>
        </div>

        {/* Number */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Telefon</h3>
          <p>(123) 456-7890</p>
        </div>

        {/* Email */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">E-post</h3>
          <p>info@example.com</p>
        </div>

        {/* Location */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Plats</h3>
          <p>Evenemangsplatsen, Cityville</p>
        </div>
      </div>

      <div className="container mx-auto mt-4 text-center">
        <p>
          <strong>Event Booking</strong> by Anna Wiklund
        </p>
      </div>
    </footer>
  );
};

export default Footer;
