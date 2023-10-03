const express = require('express');
const app = express();
const PORT = 3000;

const userRoute = require('./users/routes');
const taskRoute  = require('./tasks/routes');

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
