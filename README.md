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
    ![basic](https://user-images.githubusercontent.com/64581460/202970700-aad2a1c6-da38-4693-87e7-1d8adc1be5d1.png)
  2. Utilize @mailchimp package
    a). Check if api connection is done successfully or not
       ![Screen Shot 2022-11-21 at 11 02 23](https://user-images.githubusercontent.com/64581460/202971141-8c2935b1-0c03-4beb-97fb-6786e6324540.png)


  

