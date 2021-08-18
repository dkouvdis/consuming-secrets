const fs = require("fs");

const go = () => {
  const secrets = process.env.SECRETS_CONTEXT;

  if (!secrets) {
    console.log("========== Missing SECRETS_CONTEXT ==========");
    return;
  }

  const parsedSecrets = JSON.parse(secrets);

  const logger = fs.createWriteStream(".env", {
    flags: "a",
  });

  console.log(".env file created");

  for (const [key, value] of Object.entries(parsedSecrets)) {
    console.log(`${key} appending to file`);
    logger.write(`${key}=${value}\n`);
  }

  console.log("Done...");
};

go();
