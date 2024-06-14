# Vehicle Inventory Dashboard

## Description
A full-stack web application to display vehicle inventory data, including recent data, inventory count, average MSRP, and history log. The application allows filtering by vehicle make and duration.

## Technologies Used
- Backend: Node.js, Express
- Frontend: React, Redux Toolkit
- Data: CSV file

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    npm start
    ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```

## API Endpoint

### `/api/inventory`
- **Method**: GET
- **Query Parameters**:
  - `make` (optional): Filter by vehicle make (e.g., Toyota, Honda).
  - `duration` (optional): Filter by duration (e.g., 'Last month', 'This month', 'Last 3 months', 'Last 6 months', 'This year', 'Last year').

## Filtering Options
- **Vehicle Make**: Dropdown to select a vehicle make.
- **Duration**: Dropdown to select a time duration.

## Components
- **RecentData**: Displays the most recently gathered data.
- **InventoryCount**: Shows counts of NEW, USED, and CPO vehicles.
- **AverageMsrp**: Displays the average MSRP for NEW, USED, and CPO vehicles.
- **HistoryLog**: Shows historical data for NEW, USED, and CPO vehicles.

## Deployment
1. Deploy the backend to a cloud service (e.g., Heroku).
2. Deploy the frontend to a static site hosting provider (e.g., Netlify).

## Author
- kasturi l

