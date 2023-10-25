import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Grid from '../../components/Grid';
import Header from '../../components/Header';
import releasesJson from '../../releases.json';
import { Container, Hero, Releases } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero>
        <h1>Moda feminina</h1>
        <h1 className="male">e masculina</h1>
        <Button
          text="Comprar agora"
          backgroundColor="transparent"
          textColor="#fff"
          borderColor="#fff"
          borderWidth="5px"
          borderStyle="solid"
          fontSize="1.3rem"
        />
      </Hero>
      <Releases>
        <h1>
          Lançamentos
        </h1>
        <p>Adicionados recentemente</p>
        <Grid>
          <ul>
            {releasesJson.products.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>
                  Preço: R$
                  {' '}
                  {product.price}
                </p>
                <p>
                  Tamanhos disponíveis:
                  {' '}
                  {product.sizes.join(', ')}
                </p>
                <p>
                  Cores disponíveis:
                  {' '}
                  {product.colors.join(', ')}
                </p>
                <p>
                  Estoque:
                  {' '}
                  {product.stock}
                  {' '}
                  unidades
                </p>
                <img src={product.image_url} alt={product.name} width="280" height="280" />
              </li>
            ))}
          </ul>
        </Grid>
      </Releases>
      <Footer />
    </Container>
  );
}
