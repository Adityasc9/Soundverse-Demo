const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { demoData, createActiveUsersReport } = require("./demoData");

const app = express();
const port = Number(process.env.PORT || 8080);

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const items = demoData.users
      .map((user) => ({
        _id: user._id,
        name: user.name,
        stripeCheckoutSession: user.stripeCheckoutSession,
        email: user.email,
        desc: user.desc,
        createdAt: user.createdAt,
      }))
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/audioTypes", async (req, res) => {
  try {
    const items = demoData.audioTypes.map((item) => ({
      _id: item._id,
      stemType: item.stemType,
      audioType: item.audioType,
    }));
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/prompts", async (req, res) => {
  try {
    const items = demoData.prompts
      .map((prompt) => ({
        _id: prompt._id,
        prompt: prompt.prompt,
        createdAt: prompt.createdAt,
      }))
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/userA", async (req, res) => {
  try {
    const items = demoData.activities
      .map((activity) => ({
        _id: activity._id,
        userId: activity.userId,
        activity: activity.activity,
        createdAt: activity.createdAt,
      }))
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/total", async (req, res) => {
  try {
    res.json(demoData.totalDuration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/audios", async (req, res) => {
  try {
    const items = demoData.audios
      .map((audio) => ({
        _id: audio._id,
        duration: audio.duration,
        createdAt: audio.createdAt,
        audioType: audio.audioType,
      }))
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/engagementRows", async (req, res) => {
  try {
    res.json(demoData.engagementRows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/ga/active-users", async (req, res) => {
  try {
    const now = new Date();
    const defaultEnd = now.toISOString().split("T")[0];
    const defaultStart = new Date(now.getTime() - 29 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const startDate = req.query.startDate || defaultStart;
    const endDate = req.query.endDate || defaultEnd;

    res.json(createActiveUsersReport(startDate, endDate));
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

if (process.env.VERCEL !== "1") {
  app.listen(port, () => console.log("Server running on port ", port));
}

module.exports = app;
