import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '@/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from '../AccountItem';
import * as api from '@/apis/suggestedApi';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await api.suggestedApi();
      setAccountList([...result]);
    };
    fetchApi();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {accountList.map((item, key) => (
        <div key={key}>
          <Tippy
            offset={[-20, 0]}
            interactive
            placement="bottom"
            render={(attrs) => (
              <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <div className={cx('arrow')} data-popper-arrow="" />
                <PopperWrapper className={cx('preview-popper')}>
                  <AccountPreview item={item} />
                </PopperWrapper>
              </div>
            )}
            delay={[800, 0]}
          >
            <AccountItem data={item} isSuggest className={cx('list-item')} />
          </Tippy>
        </div>
      ))}
      <p className={cx('see-more')}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
