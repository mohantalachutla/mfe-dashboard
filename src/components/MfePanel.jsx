import Container from './base/Container';
import Accordion from './base/Accordion';
import MfeDeck from './MfeDeck';
import MfeEmpty from './MfeEmpty';

// eslint-disable-next-line @eslint-react/no-unstable-default-props
const MfePanel = ({ mfeList = [] }) => {
  const environments = Array.from(new Set(mfeList.map((mfe) => mfe.env)));
  return (
    <Container size={'lg'} flex={false} className="relative" fluid={true}>
      {mfeList.length === 0 ? (
        <MfeEmpty />
      ) : (
        <Accordion alwaysOpen>
          {environments.map((env) => (
            <Accordion.Panel key={env}>
              <Accordion.Title>{env}</Accordion.Title>
              <Accordion.Content>
                <MfeDeck mfeList={mfeList.filter((mfe) => mfe.env === env)} />
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      )}
    </Container>
  );
};

export default MfePanel;
