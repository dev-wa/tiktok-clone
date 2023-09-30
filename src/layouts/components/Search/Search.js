import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';

import { faTimesCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '@/components/Popper';

import { SearchIcon } from '@/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '@/hooks';
import * as api from '@/apis/searchApi';
import SearchResult from './SearchResult';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const refValue = useRef();

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debouncedValue) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await api.searchApi(debouncedValue);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debouncedValue]);

  const handleClearValue = () => {
    setSearchValue('');
    setSearchResult([]);
    refValue.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleSubmit = () => {
    console.log('handleSubmit');
  };
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadLessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              <SearchResult data={searchResult} />
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={refValue}
            value={searchValue}
            placeholder="Search account and videos"
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value.trimStart())}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClearValue}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onClick={handleSubmit} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon className={cx('search-icon')} />
          </button>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default Search;
