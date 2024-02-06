#!/bin/bash

npm run build

npm run typeorm -- -d dist/src/ormconfig.js migration:run