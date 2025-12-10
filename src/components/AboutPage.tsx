import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { getApiUrl } from '../config/api';

export function AboutPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const team = [
    {
      name: 'John Martinez',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1651442897558-47cff0f64bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTUwNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Sarah Chen',
      role: 'Design Consultant',
      image: 'https://images.unsplash.com/photo-1758548157378-46bc8e6dc6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXJibGUlMjB0aWxlc3xlbnwxfHx8fDE3NjA1NTA3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Michael Thompson',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYwNDI5ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">About Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your trusted partner in premium tiles and marble since 1995
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                For over 30 years, New Deepak Marble has been at the forefront of providing exceptional quality natural stones and tiles to discerning clients. What started as a small family business has grown into one of the region's most trusted suppliers of premium flooring and wall materials.
              </p>
              <p>
                Our commitment to excellence extends beyond our products. We pride ourselves on building lasting relationships with our customers, offering expert guidance, and ensuring every project exceeds expectations.
              </p>
              <p>
                We source our materials directly from the world's finest quarries, ensuring authenticity, quality, and competitive pricing. Our team of experienced professionals is dedicated to helping you find the perfect solution for your residential or commercial project.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1651442897558-47cff0f64bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTUwNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our showroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-slate-600">Dedicated professionals committed to your satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-slate-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <form
                  className="space-y-6"
                  onSubmit={async (event) => {
                    event.preventDefault();
                    setSubmitError(null);
                    setSubmitSuccess(false);
                    setIsSubmitting(true);

                    try {
                      const response = await fetch(getApiUrl('api/contact'), {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name, email, phone, message }),
                      });

                      if (!response.ok) {
                        throw new Error('Failed to send message');
                      }

                      setSubmitSuccess(true);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    } catch (error) {
                      console.error(error);
                      setSubmitError('Something went wrong. Please try again.');
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <div>
                    <label className="block mb-2 text-slate-700">Name</label>
                    <Input
                      placeholder="Your name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-slate-700">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-slate-700">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-slate-700">Message</label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                    />
                  </div>
                  {submitError && (
                    <p className="text-sm text-red-500">{submitError}</p>
                  )}
                  {submitSuccess && (
                    <p className="text-sm text-green-600 bg-green-100 p-2 rounded-md font-medium">
                      Thank you! Your message has been sent.
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2">Visit Our Showroom</h3>
                    <p className="text-slate-600">
                    Parola road ,<br />
                    opp dhule gas godown near Pankaj hotel<br />
                    near Pankaj hotel Dhule
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2">Call Us</h3>
                    <p className="text-slate-600">
                      Phone: 9021005607<br />
                      Fax: 9021005607
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2">Email Us</h3>
                    <p className="text-slate-600">
                      General: jainjayesh2111@gmail.com<br />
                      Sales: jainjayesh2111@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
