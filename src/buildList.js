const metisAndromeda = require("./protocols/metis-andromeda.json");
const metisGoerli = require("./protocols/metis-goerli.json");

module.exports = function buildList() {
  return {
    name: "Hercules Olympic Circle List",
    timestamp: new Date().toISOString(),
    protocols: [...metisAndromeda, ...metisGoerli]
      // sort them by symbol for easy readability
      .sort((p1, p2) => {
        if (p1.chainId === p2.chainId) {
          return p1.name.toLowerCase() < p2.name.toLowerCase() ? -1 : 1;
        }
        return p1.chainId < p2.chainId ? -1 : 1;
      }),
  };
};
