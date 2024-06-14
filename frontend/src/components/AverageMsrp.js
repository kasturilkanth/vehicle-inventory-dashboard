import React from 'react';
import { useSelector } from 'react-redux';

const AverageMsrp = () => {
  const { newMsrp, usedMsrp, cpoMsrp } = useSelector(state => state.inventory);

  return (
    <div>
      <h2>Average MSRP</h2>
      <p>NEW: ${newMsrp}</p>
      <p>USED: ${usedMsrp}</p>
      <p>CPO: ${cpoMsrp}</p>
    </div>
  );
};

export default AverageMsrp;
