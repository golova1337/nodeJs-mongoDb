# Import Json, CSV, or TSV files

**Mongoimport** imports content from an Extended JSON, CSV, or TSV export created by mongoexport, or potentially, another third-party export tool.

### 1. Create config file or use my config file

[mongoimport Documentation](https://www.mongodb.com/docs/database-tools/mongoimport/).

### 2. Create json file or use my example file cars.json

### 3. Run the command in the terminal

mongoimport --config ./mongoimport.config.yaml --collection cars --file ./cars.json --type json --jsonArray --authenticationDatabase admin