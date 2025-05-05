# Configuracion del proyecto

1. Crea la carpeta del proyecto

`mkdir flight-booking-api ` <br> 
`cd flight-booking-api`

2. Inicializa un proyecto de Node

`npm init -y`

3. Instala TypeScript y sus herramientas base

`npm install --save-dev typescript ts-node @types/node`

4. Crea el archivo de configuración de TypeScript

`npx tsc --init`


Y modifica el archivo tsconfig.json con esta configuración base (enfocada a backend + buenas prácticas):

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

5. Para compilar el proyecto sin ejectuar
`npx ts-node src/index.ts`

# Paso 2: ESLint + Prettier
1. Instalar ESLint y Prettier junto con sus plugins para TypeScript


`npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier \ @typescript-eslint/eslint-plugin @typescript-eslint/parser`

2. Inicializar configuración de ESLint

`npx eslint --init`

Cuando te pregunte, selecciona lo siguiente:

How would you like to use ESLint?

* To check syntax, find problems, and enforce code style

What type of modules does your project use?
* CommonJS

Which framework does your project use?
* None of these (porque usamos Express, no un framework de frontend)

Does your project use TypeScript?

* Yes

Where does your code run?

* Node

How would you like to define a style for your project?

* Use a popular style guide

Which style guide do you want to follow?

* Standard (puedes elegir Airbnb si prefieres más estrictas)

What format do you want your config file to be in?

* JavaScript

Después de eso, ESLint instalará algunas dependencias automáticamente.

 3. Configura .eslintrc.js

Edita el archivo .eslint.config.mjs generado y déjalo así:

```
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

export default [
  // Configuración básica de JS
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: pluginPrettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  // Configuración para Prettier
  {
    files: ['**/*.{ts,js}'],
    rules: {
      ...prettier.rules,
    },
  },
]
```

4. Crea el archivo .prettierrc
```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

Y el .prettierignore:
```
node_modules
dist
```

2. Prueba

Agrega un script en package.json:
```
"scripts": {
  "lint": "eslint . --ext .ts",
  "lint:fix": "eslint . --ext .ts --fix"
}
```

Y corre:

`npm run lint`

# Para correr el proyecto

`npm install --save-dev tsx`

En el package.json

```
"scripts": {
  "dev": "tsx watch src/server.ts"
}
```

Comando para user un script para la base de datos
<br>
`psql -U tu_usuario -d vuelos_db -f sql/init.sql`

Solo para ejemplo de commit
