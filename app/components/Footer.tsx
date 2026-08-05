const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface px-6 py-8 text-center text-sm text-muted">
      <p>&copy; {currentYear} Faith Over Fear Coaching. All rights reserved.</p>
    </footer>
  );
};

export default Footer;