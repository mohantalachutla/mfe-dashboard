import Container from './base/Container';
import Hr from './base/Hr';
import Text from './base/Text';
const MfeCardView = (props) => {
  return (
    <Container size="lg" style={{ width: '100%' }}>
      <Section title="Basic Details">
        <View label="Name:" value={props.displayName || props.name} />
        <View label="Description:" value={props.description} />
        <View label="Version:" value={props.version} />
        <View
          label="Local URL:"
          element={
            <a href={props.url} className="text-blue-300 hover:text-blue-500">
              {props.url}
            </a>
          }
        />
        <View label="Status:" value={props.status} />
        <View label="Environment:" value={props.env} />
        <View
          label="Homepage:"
          element={
            <a
              href={props.homepage}
              className="text-blue-300 hover:text-blue-500"
            >
              {props.homepage}
            </a>
          }
        />
        <View
          label={props.repository?.type || 'Repository:'}
          element={
            <a
              href={props.repository?.url}
              className="text-blue-300 hover:text-blue-500"
            >
              {props.repository?.url}
            </a>
          }
        />
      </Section>
      <Section title="MFE Details">
        <BlockView
          label="Modules Exposed:"
          value={props.modules?.join(', ') || 'NA'}
        />
        <BlockView
          label="Consumes Events:"
          element={
            <Text variant="ul">
              {Object.keys(props.events?.host || {}).map((event) => (
                <li key={event}>{event}</li>
              ))}
            </Text>
          }
        />
        <BlockView
          label="Produces Events:"
          element={
            <Text variant="ul">
              {Object.keys(props.events?.mfe || {}).map((event) => (
                <li key={event}>{event}</li>
              ))}
            </Text>
          }
        />
      </Section>
      <Section title="Other Details">
        <BlockView label="License:" value={props.license || 'NA'} />
        <BlockView
          label="Engines:"
          element={
            <Text variant="ul">
              {Object.entries(props.engines || {}).map(([engine, version]) => (
                <li key={engine}>{`${engine}: ${version}`}</li>
              ))}
            </Text>
          }
        />
        <BlockView
          label="Browserslist:"
          element={
            <Text variant="ul">
              {props.browserslist?.map((browser) => (
                <li key={browser}>{browser}</li>
              ))}
            </Text>
          }
        />
      </Section>
    </Container>
  );
};

const View = ({ label, value, element }) => {
  return (
    <Text className="flex w-full flex-row items-center justify-between gap-4">
      <Text variant="h5">{label}</Text>
      <Text>{element ? element : value}</Text>
    </Text>
  );
};

const BlockView = ({ label, value, element }) => {
  return (
    <Text className="flex w-full flex-col items-start justify-center gap-1 py-1">
      <Text variant="h5">{label}</Text>
      <Text className="p-0">{element ? element : value}</Text>
    </Text>
  );
};

const Section = ({ title, children }) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Text
        variant="h4"
        className="block w-full text-start text-2xl tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </Text>
      {children}
    </section>
  );
};

MfeCardView.Header = ({ name, displayName }) => {
  return <div>{displayName || name}</div>;
};

export default MfeCardView;
