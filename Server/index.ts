import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDatabase, isDatabaseConnected } from "./config/database";
import Contact from "./models/Contact";

dotenv.config();

const app = express();

/* =========================
   CORS CONFIG (FIXED)
========================= */

// const allowedOrigins: string[] = [
//   process.env.FRONTEND_URL ?? "",
//   "https://www.deepak-marble-and-tiles.com",

// ].filter(Boolean);

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true); // mobile / postman
//       if (allowedOrigins.includes(origin)) return callback(null, true);
//       return callback(null, false); // ❌ do NOT throw error
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use(cors({
  origin: [
    "https://www.deepak-marble-and-tiles.com",
    "https://deepak-marble-and-tiles.com"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));
// 🔑 REQUIRED FOR PREFLIGHT
app.options("*", cors());

app.use(express.json());

/* =========================
   DATABASE
========================= */

connectDatabase().catch(() => {
  console.log("❌ MongoDB connection failed");
});

/* =========================
   ROUTES
========================= */

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    if (!isDatabaseConnected()) {
      return res.status(503).json({
        success: false,
        error: "Database not connected",
      });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: "Name, email and phone are required",
      });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      message: message || "",
    });

    const savedContact = await newContact.save();

    return res.status(200).json({
      success: true,
      message: "Contact saved successfully",
      contactId: savedContact._id,
    });
  } catch (error) {
    console.error("❌ Contact save error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// Get all contacts
app.get("/api/contacts", async (req, res) => {
  try {
    if (!isDatabaseConnected()) {
      return res.status(503).json({
        success: false,
        error: "Database not connected",
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("❌ Fetch contacts error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch contacts",
    });
  }
});

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📨 POST /api/contact`);
});
