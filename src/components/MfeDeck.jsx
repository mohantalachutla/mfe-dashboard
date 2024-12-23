import Container from './base/Container';
import MfeCard from './MfeCard';

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

const MfeEmpty = () => {
  return (
    <Container size="lg">
      <h1>No MFEs found</h1>
    </Container>
  );
};

export default MfeDeck;
