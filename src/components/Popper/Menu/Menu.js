import { useState } from 'react';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '@/components/Popper';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, data = [], onChange = defaultFn, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data }]);
  const current = history[history.length - 1];
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
  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <div className={cx('arrow')} data-popper-arrow="" />
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
        <div className={cx('menu-body')}>{renderItem()}</div>
      </PopperWrapper>
    </div>
  );
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 600]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHidden={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};
export default Menu;
