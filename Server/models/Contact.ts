import mongoose, { Schema, Document } from 'mongoose';

// Contact interface
export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  message?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Contact schema
const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
      default: '',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Create indexes for better query performance
ContactSchema.index({ email: 1 });
ContactSchema.index({ createdAt: -1 });

// Export the model
const Contact = mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;

