// eslint-disable-next-line import/no-extraneous-dependencies
import { ShoppingCart, User } from '@phosphor-icons/react';
import { Container, Elipse, Icons } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>
        Elegance boutique
      </h1>
      <Icons>
        <User
          size={32}
          cursor="pointer"
        />
        <div>
          <ShoppingCart
            style={{ position: 'relative' }}
            size={32}
            cursor="pointer"
          />
          <Elipse>
            5
          </Elipse>
        </div>
      </Icons>
    </Container>
  );
}
