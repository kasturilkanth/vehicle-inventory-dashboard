import React from 'react';
import { useDispatch } from 'react-redux';
import { setMake, setDuration, fetchInventory } from '../features/inventory/inventorySlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleMakeChange = (e) => {
    dispatch(setMake(e.target.value));
    dispatch(fetchInventory());
  };

  const handleDurationChange = (e) => {
    dispatch(setDuration(e.target.value));
    dispatch(fetchInventory());
  };

  return (
    <div>
      <label htmlFor="make">Vehicle Make:</label>
      <select id="make" onChange={handleMakeChange}>
        <option value="">All</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Ford">Ford</option>
        <option value="Chevrolet">Chevrolet</option>
      </select>
      <label htmlFor="duration">Duration:</label>
      <select id="duration" onChange={handleDurationChange}>
        <option value="This month">This month</option>
        <option value="Last month">Last month</option>
        <option value="Last 3 months">Last 3 months</option>
        <option value="Last 6 months">Last 6 months</option>
        <option value="This year">This year</option>
        <option value="Last year">Last year</option>
      </select>
    </div>
  );
};

export default Filters;
