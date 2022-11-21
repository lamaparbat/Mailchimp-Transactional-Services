# mailchimp_transactional_services documentation

## Docs Guide
### 1. Init node project with typescript environment
   `npm init --yes`      [--yes flag lets npm fills the package. json file with the sensible default obtained from the current project folder.]
   `npm i express dotenv nodemon @mailchimp/mailchimp_transactional`
   `npm i -D typescript @types/node @types/express`
   `npx tsc --init`
   `mkdir src`           [contains .tsx extension file]
   `mkdir dist`          [contains .js compiled file]
   `touch index.tsx`     [inside /src directory]
   `touch .env`          [on root dir]

### update the tsconfig.json file
   ```
     "baseUrl": "src/index.tsx", 
     "outDir": "./dist",
   ```

### Create a new api key in Mandril domain 
  1. Register account in Mandrillapp domain
  2. Generate a new api key [domain: https://mandrillapp.com/settings/]
  3. Copy the api key & paste it into .env file 

### Create a new api key in Mailchimp domain 
  1. Register account in Mailchimp domain
  2. Generate a new api key [domain: https://us21.admin.mailchimp.com/account/api/]
  3. Copy the api key & paste it into .env file 
### work on root `index.tsx` file
  1. Setup basic express api structure 
  2. 
  

