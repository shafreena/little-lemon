const navLinks = [
  {anchor: '/', name: 'Home'},
  {anchor: '/about', name: 'About'},
  {anchor: '/menu', name: 'Menu'},
  {anchor: '/reservations', name: 'Reservations'},
  {anchor: '/order', name: 'Order Online'},
  {anchor: '/login', name: 'Login'},
];

function Nav() {
  return (
    <nav>
      <ul>
        {navLinks.map((navLink, index) => 
          <li key={index}>
            <a href={navLink.anchor}>
              {navLink.name}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;