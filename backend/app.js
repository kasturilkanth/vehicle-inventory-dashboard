const express = require('express');
const inventoryRoutes = require('./routes/inventory');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/api', inventoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
