# Backend Server for New Deepak Marble

This is the backend API server for handling contact form submissions.

## Setup

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

The server will start on `http://localhost:4000`

### Production Mode:
```bash
npm run build
npm start
```

## API Endpoints

### POST `/api/contact`
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "I'm interested in your products"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact information received successfully"
}
```

### GET `/api/contacts` (Optional)
Get all submitted contacts (for viewing/admin purposes).

## Data Storage

Contact submissions are saved to `contacts.json` file in the Server directory.

## Features

- ✅ Contact form validation
- ✅ Email format validation
- ✅ Saves contacts to JSON file
- ✅ Timestamp tracking
- ✅ CORS enabled for frontend integration

