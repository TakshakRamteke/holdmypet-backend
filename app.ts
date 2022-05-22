import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bodyparser from "body-parser";

const app: Express = express();
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyparser.urlencoded({ extended: true }));

// For home page
app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

// To get a list of all the pets in the database
app.get("/pets", async (req: Request, res: Response) => {
  const pets = await prisma.pet.findMany();
  res.render("pets", { pets });
});

app.get("/pets-json", async (req: Request, res: Response) => {
  const pets = await prisma.pet.findMany();
  res.json(pets);
});

//To get a single unique pet out of the whole database
app.get("/pets/:id", async (req: Request, res: Response) => {
  const petId = req.params.id;
  try {
    const pet = await prisma.pet.findUnique({
      where: { id: petId },
    });
    if (!pet) {
      res.status(404);
      res.send("There's no pet with that ID");
      return;
    }
    res.status(200);
    res.json(pet);
    return;
  } catch (error) {
    res.status(500);
    res.send("There's seems to be some issue on the server side");
    return;
  }
});

//To render the create pet form
app.get("/create", (req: Request, res: Response) => {
  res.render("create");
});

//To actually create a pet
app.post("/createPet", async (req: Request, res: Response) => {
  try {
    const { name, details, url, wantCareTaker, isStray } = await req.body;
    const newPet = await prisma.pet.create({
      data: {
        name: name,
        details: details,
        pictureUrl: url,
        wantCareTaker: Boolean(wantCareTaker),
        isStray: Boolean(isStray),
      },
    });
    res.json(newPet);
  } catch (error) {
    res.status(500);
    res.send("There's seems to be some issue on the server side");
    return;
  }
});

app.get("/delete", async (req: Request, res: Response) => {
  res.send("Work under progress");
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
