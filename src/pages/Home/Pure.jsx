import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchMFEAction } from 'actions';

import Container from 'components/base/Container';
import MfePanel from 'components/MfePanel';

const Home = () => {
  const dispatch = useDispatch();
  const mfeList = useSelector((state) => state.dashboard.mfeList || []);
  useEffect(() => {
    dispatch(fetchMFEAction({ status: '' }));
  }, []);
  return (
    <Container fluid={true}>
      <h1 className="text-3xl text text-center">MFE Dashboard</h1>
      <MfePanel mfeList={mfeList} />
    </Container>
  );
};

export default Home;
