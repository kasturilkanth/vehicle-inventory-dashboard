import React from 'react';
import { useSelector } from 'react-redux';

const InventoryCount = () => {
  const { newCount, usedCount, cpoCount } = useSelector(state => state.inventory);

  return (
    <div>
      <h2>Inventory Count</h2>
      <p>NEW: {newCount}</p>
      <p>USED: {usedCount}</p>
      <p>CPO: {cpoCount}</p>
    </div>
  );
};

export default InventoryCount;
