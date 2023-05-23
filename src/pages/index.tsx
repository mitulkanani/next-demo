import IndexPage from '@/components/index/indexPage';
import Footer from '@/layouts/Footer';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="totel" description="totel" />}>
      <div>
        <IndexPage />
        <Footer />
      </div>
    </Main>
  );
};

export default Index;
