Para iniciar el proyecto es necesario:

npm init -Y 
npm install typescript nodemon --save-dev
npx tsc --init
npm install ts-node

// 1. Vamos al tsconfig.json
    "module": "NodeNext",                                /* Specify what module code is generated. */
    "rootDir": "./src", 
    "outDir": "./dist", 
final de objeto
    ,
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]

// 2. Crear archivo nodemon.json
    {
    "watch":["src"],
    "ext": "ts",
    "exec": "ts-node src/index.ts",
    "ignore": ["dist"]
    }

// 3. Package.json vamos a configurar
            {
      "name": "workshop_3",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon src/index.ts",
        "build": "tsc"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/express": "^4.17.21",
        "nodemon": "^3.1.4",
        "typescript": "^5.5.4"
      },
      "dependencies": {
        "express": "^4.19.2",
        "ts-node": "^10.9.2"
      }
    }
