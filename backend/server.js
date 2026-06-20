const appReady = require("./app");

appReady.then((app) => {
  const port = process.env.PORT || 4040;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
