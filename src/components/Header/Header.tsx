import { Link } from 'react-router-dom';
import { ListItem, Navigation, NavigationList } from './Header.style';

export default function Header() {
  return (
    // <div>
    <Navigation>
      <NavigationList>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About us</Link>
        </ListItem>
        <ListItem>
          <Link to="/shop">Shop</Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">Contact us</Link>
        </ListItem>
      </NavigationList>
    </Navigation>
    // </div>
  );
}
