import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '@/components/Popper';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classname.bind(styles);
const defaultFn = () => {};
function Menu({ children, data = [], onChange = defaultFn, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data }]);
  const current = history[history.length - 1];
  // console.log(current);
  const renderItem = () => {
    return current.data.map((item, key) => {
      const isParrent = !!item.children;
      return (
        <MenuItem
          key={key}
          data={item}
          onClick={() => {
            if (isParrent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 600]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      onHidden={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
