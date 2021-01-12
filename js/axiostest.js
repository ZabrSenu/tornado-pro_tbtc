const axios = require("axios");

const relayerURL = "http://142.44.219.44:8000";
const App = async () => {
  const relayerStatus = await axios.get(relayerURL + "/status");
  console.log(relayerStatus);
};

App();
