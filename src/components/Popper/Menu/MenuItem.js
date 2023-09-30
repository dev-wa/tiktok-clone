import classname from 'classnames/bind';
import PropTypes from 'prop-types';

import 'tippy.js/dist/tippy.css';
import styles from './Menu.module.scss';

import Button from '@/components/Button/Button';

const cx = classname.bind(styles);
function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
