# Mailchimp Transactional Services Documentation

# Nodmailer vs Mandril

<img width="854" alt="Screen Shot 2022-11-22 at 16 57 48" src="https://user-images.githubusercontent.com/64581460/203300284-329b0e4d-971e-40e2-b702-50e6353b789b.png">



## Docs Guide
### 1. Init node project with typescript environment
   `npm init --yes`      [--yes flag lets npm fills the package. json file with the sensible default obtained from the current project folder.]
   
   `npm i express dotenv nodemon @mailchimp/mailchimp_transactional sequelize sequelize-cli pg pg-hstore`
   
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
  
### Work on root `index.tsx` file

  1. Setup basic express api structure 
     
     ![basic](https://user-images.githubusercontent.com/64581460/202972519-10e091e0-5a19-431f-96b2-731c5a1def66.png)

    
  2. Utilize @mailchimp package
  
     a). Check if api connection is done successfully or not
     
       ![Screen Shot 2022-11-21 at 11 02 23](https://user-images.githubusercontent.com/64581460/202971141-8c2935b1-0c03-4beb-97fb-6786e6324540.png)
     
     b). Successfull Response be like:
     
       <img width="471" alt="Screen Shot 2022-11-21 at 11 09 34" src="https://user-images.githubusercontent.com/64581460/202972021-7490a79b-f8a5-44eb-9671-939cf88b69c2.png">
       
  3. Setup timescale db
  
     a). <img width="652" alt="Screen Shot 2022-11-24 at 19 46 28" src="https://user-images.githubusercontent.com/64581460/203802659-08ba4c31-3855-46fb-96f7-7a76a00c32e4.png">
   
     b). <img width="809" alt="Screen Shot 2022-11-24 at 19 47 06" src="https://user-images.githubusercontent.com/64581460/203802827-a7f05465-d9e7-4821-a128-6f597a4a15cc.png">
     
     c). Setup timescale db connection
     
        <img width="579" alt="Screen Shot 2022-11-24 at 20 04 30" src="https://user-images.githubusercontent.com/64581460/203806444-eb25d415-7604-4a3f-a392-f5079eb956e1.png">


  

