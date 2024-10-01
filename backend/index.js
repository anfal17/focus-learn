const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//routes
const userRoutes = require("./routes/user.routes");
const journeyRoutes = require("./routes/journey.routes");
const chapterRoutes = require("./routes/chapter.routes");
const noteRoutes = require("./routes/note.routes");

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1', journeyRoutes);
app.use('/api/v1/journeys', chapterRoutes);
app.use('/api/v1', noteRoutes); 


//testing route
app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
