import Tippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classname.bind(styles);

function Menu({ children, data = [] }) {
  const renderItem = () => {
    return data.map((item, key) => <MenuItem key={key} data={item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0, 600]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
