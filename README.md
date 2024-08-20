# Screenshot

Loading screen:
![Loading Screen](/Images/Screenshot%202024-08-20%20225924.png)

Login page:
![Login Page](/Images/Screenshot%202024-08-20%20225946.png)

Register page:
![Register Page](/Images/Screenshot%202024-08-20%20225957.png)

Main menu (Not completed):
![Main Menu](/Images/Screenshot%202024-08-20%20230023.png)

## About

this project using:
```
+ next.js
+ shadcn-ui
+ tailwind-css
```

## Getting Started

First of all, pnpm must be installed for the project to run.

you can instaled on terminal

For windows (PowerShell) :
```bash
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

For linux:
```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```

After successfully installing pnpm, go to the project directory (you must use it separately for frontend and backend
```bash
pnpm install
```

After you have successfully installed the packages, you need to run the development servers.
```bash
# /backend
# For the backend server to work, you need to build it first.

pnpm tsc

# Before starting the server, create a user.db file in the **/backend/build/api/db/** folder
pnpm run start

# The server is running on port 3000 (if you have enough knowledge, you can change the port in the server.ts file and run the server after building it again. If you do not have enough knowledge, you will have to wait until you add the port changing system)
```

```bash
# /frontend
#The frontend server is running on port 8080. If you want to change it, you can select your port from the section starting with "dev" in the /frontend/package.json file and the section starting with "-p".

pnpm run dev
```

After making sure that everything is working successfully, open it in your browser [http://localhost:8080](http://localhost:8080) and the project will run successfully.

If you encounter any problems please contact me.
