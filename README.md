
# Consuming Github Secrets into .env file

I wrote a simple node file that consumes single env variable. This env variable consists a stringified JSON of GitHub secrets.

After parsing the JSON, the node file will create a new .env file and then generate a write stream and parse each JSON property to a new line.

## TODO
- Create actions and publish it to Github actions marketplace
