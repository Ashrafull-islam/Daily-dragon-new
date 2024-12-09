import React from 'react';
import { Newspaper, Camera, Video, Globe, BarChart, BookOpen } from 'lucide-react';
import BreakingNews from '../../Shared/BreakingNews';
import Navbar from '../../Shared/Navbar/Navbar';

export default function CarrerPage() {
  return (
    <div>
    <BreakingNews></BreakingNews>
    <Navbar></Navbar>
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Careers at The Dragon News</h1>
        <p className="text-xl text-gray-600">Journalism Without Fear or Favour</p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At The Dragon News, we're dedicated to delivering accurate, unbiased journalism that informs and empowers our readers. 
          We're looking for passionate individuals who share our commitment to truthful reporting and innovative storytelling.
        </p>
      </div>

      {/* Career Paths */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Journalism Career Paths</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "News Reporter",
              icon: <Newspaper className="w-8 h-8 text-blue-600" />,
              description: "Cover breaking news, investigate stories, and conduct interviews. Ideal for those who love being at the heart of events.",
              skills: ["Writing", "Investigation", "Time Management", "Communication"]
            },
            {
              title: "Photojournalist",
              icon: <Camera className="w-8 h-8 text-blue-600" />,
              description: "Tell stories through compelling images. Document events, people, and places that shape our world.",
              skills: ["Photography", "Visual Storytelling", "Quick Thinking", "Technical Skills"]
            },
            {
              title: "Video Journalist",
              icon: <Video className="w-8 h-8 text-blue-600" />,
              description: "Create engaging video content for digital platforms. Combine storytelling with visual expertise.",
              skills: ["Video Production", "Editing", "Storytelling", "Technical Knowledge"]
            },
            {
              title: "Digital Editor",
              icon: <Globe className="w-8 h-8 text-blue-600" />,
              description: "Manage online content and social media presence. Shape stories for digital audiences.",
              skills: ["Digital Strategy", "SEO", "Social Media", "Content Management"]
            },
            {
              title: "Data Journalist",
              icon: <BarChart className="w-8 h-8 text-blue-600" />,
              description: "Analyze data to uncover stories. Transform complex information into compelling narratives.",
              skills: ["Data Analysis", "Visualization", "Research", "Statistical Knowledge"]
            },
            {
              title: "Feature Writer",
              icon: <BookOpen className="w-8 h-8 text-blue-600" />,
              description: "Craft in-depth stories and long-form articles. Explore topics with depth and nuance.",
              skills: ["Long-form Writing", "Research", "Interviewing", "Storytelling"]
            }
          ].map((career, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {career.icon}
                <h3 className="text-xl font-bold ml-3">{career.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{career.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Key Skills:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {career.skills.map((skill, idx) => (
                    <li key={idx} className="mb-1">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training & Development */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6">Training & Development</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            We invest in our journalists' growth through:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mentorship programs with experienced journalists</li>
            <li>Regular workshops and training sessions</li>
            <li>Conference attendance opportunities</li>
            <li>Digital skills development</li>
            <li>Leadership development programs</li>
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Competitive salary",
            "Health insurance",
            "Professional development budget",
            "Flexible working hours",
            "Remote work options",
            "Equipment allowance"
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="text-gray-600 mb-6">
          Start your journey in journalism with The Dragon News
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          View Open Positions
        </button>
      </div>
    </div>
    </div>
  );
}