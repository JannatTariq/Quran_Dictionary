const appReady = require("../backend/app");

module.exports = async (req, res) => {
  const app = await appReady;
  return app(req, res);
};
