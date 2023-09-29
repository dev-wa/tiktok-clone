//

import { useEffect, useState } from 'react';
import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '@/assets/images';
import {
  faTimesCircle,
  faSpinner,
  faEllipsisVertical,
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
  faUser,
  faCog,
  faDonate,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper, Menu } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import { SearchIcon, UploadIcon } from '@/components/Icons';
import Image from '@/components/Image';

const cx = classname.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Languege',
      data: [
        {
          type: 'languege',
          code: 'en',
          title: 'English',
        },
        {
          type: 'languege',
          code: 'vi',
          title: 'Tiếng việt',
        },
        {
          type: 'languege',
          code: 'ja',
          title: 'Japan',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });
  // Handle
  const handleMenuChange = (menu) => {
    switch (menu.type) {
      case 'languege':
        console.log(menu);
        break;

      default:
        console.log('default');
        break;
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '@vana',
    },
    {
      icon: <FontAwesomeIcon icon={faDonate} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faCog} />,
      title: 'Settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TópTóp" />
        </div>
        <HeadLessTippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and videos" spellCheck={false} />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <SearchIcon />
            </button>
          </div>
        </HeadLessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon className={cx('action-upload')} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu data={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://avatars.githubusercontent.com/u/21592?s=64&v=4"
                className={cx('user-avatar')}
                alt="Nguyen"
                fallback="https://tinypng.com/images/example-orig.png"
              />
            ) : (
              <button className={cx('more-icon')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
