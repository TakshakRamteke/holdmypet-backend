# Hold My pet 🐾 - backend

### 🤷 what is it ?
In a nuteshell, Hold My pet is a service that help's you find a Care Taker for your pet's while you're away from them

### 🍒 Steps to run it
1. Clone the repo [?](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
2. cd holdmypet-backend
3. yarn install
4. yarn dev

### ⚠️ Thing's to look out for

1. Make sure you have yarn installed
2. The DataBase used is sqlite so to use it make a file with .db extension at the root of your project (e.g : dev.db)
3. Make sure you enter the connection string in .env file as 'file:../<yourFileName>.db'
4. Make sure to run database migration's befor you start using the app (run ```yarn prisma migrate dev```)
  
### 📜 Licence

The project is licenced under [MIT](/licence) licence
