# Mailchimp Transactional Services Documentation

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

    ![basic](https://user-images.githubusercontent.com/64581460/202972330-d4b5a808-6e44-457f-a35e-2dab9e110572.png)
    
  2. Utilize @mailchimp package
  
     a). Check if api connection is done successfully or not
     
       ![Screen Shot 2022-11-21 at 11 02 23](https://user-images.githubusercontent.com/64581460/202971141-8c2935b1-0c03-4beb-97fb-6786e6324540.png)
     
     b). Successfull Response be like:
     
       <img width="471" alt="Screen Shot 2022-11-21 at 11 09 34" src="https://user-images.githubusercontent.com/64581460/202972021-7490a79b-f8a5-44eb-9671-939cf88b69c2.png">



  

