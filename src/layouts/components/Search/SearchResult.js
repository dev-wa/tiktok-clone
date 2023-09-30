import { memo } from 'react';
import PropTypes from 'prop-types';
import AccountItem from '@/components/AccountItem';

function SearchResult({ data }) {
  return (
    <>
      {data.map((item, key) => (
        <AccountItem key={key} data={item} />
      ))}
    </>
  );
}
SearchResult.propTypes = {
  data: PropTypes.array.isRequired,
};
export default memo(SearchResult);
