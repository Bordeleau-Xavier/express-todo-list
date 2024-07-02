import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Task, sequelize } from "./src/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    (async () => {
        await sequelize.sync();
        Task.findAll().then((result) => {
            console.log(result)
            res.send(result)
        })
    })();

});

app.post("/create", (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);
    Task.create({ description: body.description, dueDate: new Date(body.due_date), completed: body.completed})

     res.json(body)

});

app.delete("/clear", (req: Request, res: Response) => {
    sequelize.drop();
    res.send("cleared")
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});