const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const userRoute = require('./users/routes');
const taskRoute  = require('./tasks/routes');

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
