## Setting up the Backend

To configure the backend, follow these steps:

1. Open the `config/config.json` file.
2. Update the credentials in the `config.json` file for development.
3. Create a new database and change the database name.

Once the configuration is done, proceed with the following commands to set up and run the backend:

Run these commands:

```bash
npm install
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm start
```

## Setting up the Frontend

Run these commands:

```bash
npm install
npm run dev
```



