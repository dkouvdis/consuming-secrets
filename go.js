const fs = require("fs");

const go = () => {
  const secrets = process.env.SECRETS_CONTEXT;

  console.log(1, secrets);

  if (!secrets) {
    console.log("Missing SECRETS_CONTEXT");
  }

  const logger = fs.createWriteStream(".env", {
    flags: "a",
  });

  for (const [key, value] of Object.entries(secrets)) {
    logger.write(`${key}=${value}\n`);
  }
};
