import { Htag } from '../components';
import { ProductsList } from '@/components/ProductsList/ProductsList';

export default function Home() {
  return (
    <main>
      <Htag tag="h1">Каталог курсов</Htag>
      <ProductsList />
    </main>
  );
}
