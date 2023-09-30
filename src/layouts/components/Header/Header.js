//

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '@/assets/images';
// config
import config from '@/config';

import {
  faEllipsisVertical,
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
  faUser,
  faCog,
  faDonate,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@/components/Popper';
import Button from '@/components/Button/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '@/components/Icons';
import Image from '@/components/Image/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng việt',
        },
        {
          type: 'language',
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
  const currentUser = true;

  // Handle
  const handleMenuChange = (menu) => {
    switch (menu.type) {
      case 'language':
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
      to: '/profile/@vana',
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
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={images.logo} alt="TópTóp" />
          </Link>
        </div>
        {/* Search */}
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon className={cx('action-icon')} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon className={cx('action-icon')} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon className={cx('action-icon')} />
                  <span className={cx('badge')}>20</span>
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
