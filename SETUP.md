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



```
