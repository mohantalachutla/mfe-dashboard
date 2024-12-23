import Container from './base/Container';
import MfeCard from './MfeCard';
import MfeEmpty from './MfeEmpty';

// eslint-disable-next-line @eslint-react/no-unstable-default-props
const MfeDeck = ({ mfeList = [] }) => {
  return (
    <Container size={'lg'} flex="row">
      {mfeList.map((mfe) => (
        <MfeCard key={mfe.name} {...mfe} />
      ))}
      {mfeList.length === 0 && <MfeEmpty />}
    </Container>
  );
};

export default MfeDeck;
