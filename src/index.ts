import express, { Application} from 'express';
import userRoutes from "./routes/users";
const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/users", userRoutes);

app.listen(3000);
console.log('Server on port', 3000);