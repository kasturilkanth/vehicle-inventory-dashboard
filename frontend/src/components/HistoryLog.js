import React from 'react';
import { useSelector } from 'react-redux';

const HistoryLog = () => {
  const { newInventory, usedInventory, cpoInventory } = useSelector(state => state.inventory);

  return (
    <div>
      <h2>History Log</h2>
      <div>
        <h3>New Inventory</h3>
        <p>Count: {newInventory.count}</p>
        <p>Total MSRP: ${newInventory.totalMsrp}</p>
        <p>Avg MSRP: ${newInventory.avgMsrp}</p>
      </div>
      <div>
        <h3>Used Inventory</h3>
        <p>Count: {usedInventory.count}</p>
        <p>Total MSRP: ${usedInventory.totalMsrp}</p>
        <p>Avg MSRP: ${usedInventory.avgMsrp}</p>
      </div>
      <div>
        <h3>CPO Inventory</h3>
        <p>Count: {cpoInventory.count}</p>
        <p>Total MSRP: ${cpoInventory.totalMsrp}</p>
        <p>Avg MSRP: ${cpoInventory.avgMsrp}</p>
      </div>
    </div>
  );
};

export default HistoryLog;
