import express from 'express';
import { connectDatabase, isDatabaseConnected } from './config/database';
import Contact from './models/Contact';

// Load environment variables
// Load environment variables
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// ALWAYS a string array – TS friendly
const allowedOrigins: string[] = [
  process.env.FRONTEND_URL ?? "",
  "https://your-production-domain.com",
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow mobile apps / postman
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);










app.use(express.json());

// Connect to MongoDB (non-blocking)
connectDatabase().catch(() => {
  // Connection failed, but server will still start
  // Database operations will check connection status
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Check if database is connected
    if (!isDatabaseConnected()) {
      return res.status(503).json({ 
        success: false, 
        error: 'Database not connected. Please check MongoDB connection.' 
      });
    }

    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name, email, and phone are required' 
      });
    }

    // Create new contact using MongoDB
    const newContact = new Contact({
      name,
      email,
      phone,
      message: message || '',
    });

    // Save to database
    const savedContact = await newContact.save();

    console.log('✅ Contact saved to MongoDB:', savedContact._id);
    
    res.status(200).json({ 
      success: true, 
      message: 'Contact information received successfully',
      contactId: savedContact._id
    });
  } catch (error: any) {
    console.error('❌ Error saving contact:', error);
    
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({ 
        success: false, 
        error: errors.join(', ') 
      });
    }

    res.status(500).json({ 
      success: false, 
      error: 'Failed to save contact information' 
    });
  }
});

// Get all contacts (for admin/viewing purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    // Check if database is connected
    if (!isDatabaseConnected()) {
      return res.status(503).json({ 
        success: false, 
        error: 'Database not connected. Please check MongoDB connection.' 
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ 
      success: true, 
      contacts,
      count: contacts.length 
    });
  } catch (error) {
    console.error('❌ Error reading contacts:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to read contacts' 
    });
  }
});

// Get contact by ID
app.get('/api/contacts/:id', async (req, res) => {
  try {
    // Check if database is connected
    if (!isDatabaseConnected()) {
      return res.status(503).json({ 
        success: false, 
        error: 'Database not connected. Please check MongoDB connection.' 
      });
    }

    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ 
        success: false, 
        error: 'Contact not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      contact 
    });
  } catch (error) {
    console.error('❌ Error reading contact:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to read contact' 
    });
  }
});

// Delete contact by ID
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    // Check if database is connected
    if (!isDatabaseConnected()) {
      return res.status(503).json({ 
        success: false, 
        error: 'Database not connected. Please check MongoDB connection.' 
      });
    }

    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ 
        success: false, 
        error: 'Contact not found' 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Contact deleted successfully' 
    });
  } catch (error) {
    console.error('❌ Error deleting contact:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to delete contact' 
    });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
  console.log(`📝 Contact form endpoint: http://localhost:${PORT}/api/contact`);
  
  // Show database status
  if (!isDatabaseConnected()) {
    console.log('\n⚠️  WARNING: MongoDB is not connected!');
    console.log('   API endpoints will return 503 errors until MongoDB is connected.\n');
  }
});