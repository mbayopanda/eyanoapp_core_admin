require('dotenv').config();

const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.info(`Administration App: listening on port ${PORT}`);
});
