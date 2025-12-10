import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-white">DM</span>
              </div>
              <span>New Deepak Marble</span>
            </div>
            <p className="text-slate-400">
              Your premier destination for luxury tiles and marble. Quality goods and service  since 1995.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>9021005607</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>newdipakmarble@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>Parola road ,opp dhule gas godown near Pankaj hotel </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="mb-4">Business Hours</h3>
            <div className="space-y-2 text-slate-400">
              <div className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span>9AM - 7PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10AM - 2PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 New Deepak Marble. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
