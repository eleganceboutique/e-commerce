import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.svg';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <p>© 2022 Elegance Boutique</p>
      <div>
        <img src={visa} alt="bandeira visa" />
        <img src={mastercard} alt="bandeira mastercard" />
      </div>
    </Container>
  );
}
