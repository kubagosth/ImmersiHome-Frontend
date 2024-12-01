
# ImmersiHome-Frontend

## Prerequisites

Ensure you have the following installed:

1. **Install `nvm-windows` (Node Version Manager for Windows)**:
   - Download the installer from the [nvm-windows releases page](https://github.com/coreybutler/nvm-windows/releases).
   - Run the installer and follow the prompts.

2. Verify `nvm-windows` installation:
   Open a new Command Prompt or PowerShell window and run:

   ```cmd
   nvm version
   ```

3. Use `nvm` to install Node.js version 23.1.0:

   ```cmd
   nvm install 23.1.0
   nvm use 23.1.0
   node -v
   ```

   The output should display `v23.1.0`.

4. Install Vue CLI globally:

   ```cmd
   npm install -g @vue/cli
   vue --version
   ```


## Development

Start the development server:

```cmd
npm run serve
```
From the `immersihome` folder.

The app will be available at `http://localhost:8080/ImmersiHome-Frontend/` or `http://192.168.0.156:8080/ImmersiHome-Frontend/`.
