import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInventory } from './features/inventory/inventorySlice';
import RecentData from './components/RecentData';
import InventoryCount from './components/InventoryCount';
import AverageMsrp from './components/AverageMsrp';
import HistoryLog from './components/HistoryLog';
import Filters from './components/Filters';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  return (
    <div>
      <h1>Vehicle Inventory Dashboard</h1>
      <Filters />
      <RecentData />
      <InventoryCount />
      <AverageMsrp />
      <HistoryLog />
    </div>
  );
};

export default App;
