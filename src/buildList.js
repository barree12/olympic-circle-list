const fs = require("fs");

module.exports = function buildList() {
  const foldername = "src/protocols";

  try {
    return {
      name: "Hercules Olympic Circle List",
      timestamp: new Date().toISOString(),
      protocols: fs
        .readdirSync(foldername)
        .filter((filename) => !filename.includes("example"))
        .flatMap((filename) =>
          JSON.parse(fs.readFileSync(`${foldername}/${filename}`))
        )
        // sort them by symbol for easy readability
        .sort((p1, p2) => {
          if (p1.chainId === p2.chainId) {
            return p1.name.toLowerCase() < p2.name.toLowerCase() ? -1 : 1;
          }
          return p1.chainId < p2.chainId ? -1 : 1;
        }),
    };
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
