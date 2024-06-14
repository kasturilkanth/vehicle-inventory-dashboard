import React from 'react';
import { useSelector } from 'react-redux';

const RecentData = () => {
  const { recentData } = useSelector(state => state.inventory);

  return (
    <div>
      <h2>Recent Data</h2>
      {recentData.map((item, index) => (
        <div key={index}>
          <p>Make: {item.Make}</p>
          <p>Model: {item.Model}</p>
          <p>Type: {item.Type}</p>
          <p>MSRP: ${item.MSRP}</p>
          <p>Date: {item.Date}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentData;
