import classname from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import styles from './Menu.module.scss';

import Button from '@/components/Button';

const cx = classname.bind(styles);
function MenuItem({ data }) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
