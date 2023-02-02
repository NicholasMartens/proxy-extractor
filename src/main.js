import fs from "fs";

const proxies = [];

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data.split(/\r?\n/).forEach((line) => {
    const proxy = line.split(":");
    const ip = proxy[0];
    const port = parseInt(proxy[1]);

    if (ip && port) {
      proxies.push({
        ip,
        port,
      });
    }
  });

  write();
});

const write = () => {
  fs.writeFile("output.txt", JSON.stringify(proxies), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
};
