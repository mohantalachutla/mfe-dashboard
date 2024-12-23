import { useDispatch } from 'react-redux';
import Card from './base/Card';
import Text from './base/Text';
import { showModal } from '../reducers/modal';
import { MODAL_TYPES } from '../constants';

const MfeCard = (props) => {
  const dispatch = useDispatch();
  const { name, url, displayName, description, version, status, env } = props;
  const classList = [];
  status === 'active' && classList.push('border-green-500');
  return (
    <Card
      href="#"
      onClick={(e) => {
        e.preventDefault();
        dispatch(showModal({ type: MODAL_TYPES.MFE_CARD_VIEW, data: props }));
      }}
      className={`max-w-sm ${classList.join(' ')}`}
      style={{ width: '300px', minHeight: '100px' }}
    >
      <Text
        variant="h5"
        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {displayName || name}
      </Text>
      <Text
        variant="p"
        className="font-normal text-gray-700 dark:text-gray-400"
      >
        {description}
      </Text>
    </Card>
  );
};

export default MfeCard;
