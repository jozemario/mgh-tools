# Setup project
```bash
# Install nvm
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# Enable nvm
  nano ~/.zshrc
# Add the following lines to the end of the file
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# Reload the terminal
source ~/.zshrc 

# set node version
  nvm install 20 --lts
  nvm use 20
# Install nx
  npm install -g nx
# Create a new workspace
npx create-nx-workspace --packageManager pnpm    
#  Now using node v20.17.0 (npm v10.8.2)
#  NX   Creating your v19.8.4 workspace.

Where would you like to create your workspace? · mgh-tools
✔ Which stack do you want to use? · none
✔ Package-based monorepo, integrated monorepo, or standalone project? · integrated
✔ Which CI provider would you like to use? · github

 NX   Creating your v19.8.4 workspace.

✔ Installing dependencies with pnpm
✔ Successfully created the workspace: mgh-tools.
✔ Nx Cloud has been set up successfully
✔ CI workflow has been generated successfully

NX   Your CI setup is almost complete.

Finish it by visiting: https://cloud.nx.app/connect/UBePqnilZT

ts-rest
RPC-like client, contract, and server implementation for a pure REST API
# Add ts-rest shared API library for Contracts to the workspace
npx nx list @nx/node
nx add @nx/node
pnpm add @ts-rest/core
nx g @nx/node:library contracts --directory=libs --buildable --publishable --importPath=@mgh-tools/contracts --unitTestRunner=jest
Run "nx show project contracts" to view details about this project.
# https://ts-rest.com/docs/core/

npx nx list @nx/next
nx add @nx/next
pnpm add -D @nx/react
nx g @nx/next:application ts-rest-type-safety-app --directory=apps/ts-rest-type-safety-app

 NX  Generating @nx/next:application

✔ Which E2E test runner would you like to use? · playwright
✔ Would you like to use the App Router (recommended)? (Y/n) · true
✔ Would you like to use `src/` directory? (Y/n) · true
✔ What should be the project name and where should it be generated? · ts-rest-type-safety-app @ apps/ts-rest-type-safety-app

Run "nx show project ts-rest-type-safety-app" to view details about this project.

pnpm add @ts-rest/next
pnpm add @ts-rest/serverless/next



--------------
Prisma
pnpm add -D @nx-tools/nx-prisma
npx nx list @nx-tools/nx-prisma

https://github.com/gperdomor/nx-tools/blob/main/plugins/nx-prisma/README.md

nx g @nx-tools/nx-prisma:configuration ts-rest-type-safety-app
By default, the application will be configured with:

A Prisma schema in the application root.
A set of targets and executors to invoke common prisma commands to manage your application. You can add more executors later.
We can then call generate, deploy, migrate, db pull, db push prisma commands, and even start prisma studio with the following commands:

nx prisma-generate ts-rest-type-safety-app
nx prisma-deploy ts-rest-type-safety-app
nx prisma-migrate ts-rest-type-safety-app
nx prisma-pull ts-rest-type-safety-app
nx prisma-push ts-rest-type-safety-app
nx prisma-studio ts-rest-type-safety-app
nx prisma-validate ts-rest-type-safety-app

Executors
deploy: Apply pending migrations to update the database schema in production/staging.
generate: Generate artifacts (e.g. Prisma Client).
migrate: Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client).
pull: Pull the schema from an existing database, updating the Prisma schema.
push: Push the Prisma schema state to the database.
reset: Reset your database and apply all migrations, all data will be lost.
resolve: Resolve issues with database migrations in deployment databases.
seed: Seed your database.
status: Check the status of your database migrations.
studio: Browse your data with Prisma Studio.
validate: validate your Prisma schema.


```
```bash
docker-compose down
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
docker-compose up
```
```bash
#setup containers
nx prisma-generate ts-rest-type-safety-app
nx prisma-migrate ts-rest-type-safety-app --name=initial_migration
nx prisma-deploy ts-rest-type-safety-app
nx prisma-studio ts-rest-type-safety-app


```
