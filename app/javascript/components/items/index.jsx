import React from 'react'
import ItemSummary from 'components/item-summary'

const Items = ({ tracked_items, untracked_items }) => (
  <section>
    {
      tracked_items.map(
        (item) => <ItemSummary key={ item.id } item={ item } />
      )
    }
  </section>
);

export default Items;
