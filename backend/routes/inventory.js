const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const { parseISO, isAfter, subMonths, startOfMonth, subYears, startOfYear } = require('date-fns');

// Load sample data
const csvFilePath = path.join(__dirname, '../data/sample-data.csv');
let inventoryData = [];
csv().fromFile(csvFilePath).then((jsonObj) => {
  inventoryData = jsonObj;
});

router.get('/inventory', (req, res) => {
  let { make, duration } = req.query;
  let filteredData = inventoryData;

  // Filter by make
  if (make) {
    filteredData = filteredData.filter(item => item.Make === make);
  }

  // Filter by duration
  if (duration) {
    const today = new Date();
    let startDate;

    switch (duration) {
      case 'Last month':
        startDate = subMonths(today, 1);
        break;
      case 'This month':
        startDate = startOfMonth(today);
        break;
      case 'Last 3 months':
        startDate = subMonths(today, 3);
        break;
      case 'Last 6 months':
        startDate = subMonths(today, 6);
        break;
      case 'This year':
        startDate = startOfYear(today);
        break;
      case 'Last year':
        startDate = subYears(today, 1);
        break;
      default:
        startDate = null;
    }

    if (startDate) {
      filteredData = filteredData.filter(item => isAfter(parseISO(item.Date), startDate));
    }
  }

  res.json(filteredData);
});

module.exports = router;
