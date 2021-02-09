import React from 'react';
import ListItem from '../listitems/ListItem';
import PropTypes from 'prop-types';

export default function ListPage({ characters }) {
  const characterList = characters.map((item) => (
    <li key={item.id + Date.now()}>
      <ListItem item={item} />
    </li>
  ));

  return <ul data-testid="items">{characterList}</ul>;
}
ListPage.propTypes = {
  characters: PropTypes.array,
};
