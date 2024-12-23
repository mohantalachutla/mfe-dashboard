import { useSelector, useDispatch } from 'react-redux';

import Container from 'components/base/Container';
import MfeDeck from 'components/MfeDeck';
import { useEffect } from 'react';
import { fetchMFEAction } from 'actions';

const Home = () => {
  const dispatch = useDispatch();
  const mfeList = useSelector((state) => state.dashboard.mfeList || []);
  useEffect(() => {
    dispatch(fetchMFEAction({ status: '' }));
  }, []);
  return (
    <Container>
      <h1 className="text-3xl text text-center">MFE Dashboard</h1>
      <MfeDeck mfeList={mfeList} />
    </Container>
  );
};

export default Home;
