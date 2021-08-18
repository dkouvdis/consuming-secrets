const fs = require("fs");

const go = () => {
  const secrets = process.env.SECRETS_CONTEXT;

  if (!secrets) {
    console.log("Missing SECRETS_CONTEXT");
  }

  const parsedSecrets = JSON.parse(secrets);

  const logger = fs.createWriteStream(".env", {
    flags: "a",
  });

  for (const [key, value] of Object.entries(parsedSecrets)) {
    logger.write(`${key}=${value}\n`);
  }
};

go();
