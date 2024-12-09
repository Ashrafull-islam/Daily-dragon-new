import React from 'react'
import { motion } from "framer-motion";
import { Award, Users, Globe, Shield, Newspaper, TrendingUp } from "lucide-react";
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../../Shared/Header/Header';
import BreakingNews from '../../Shared/BreakingNews';


const About = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About The Dragon News</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Journalism Without Fear or Favour - Delivering accurate, unbiased news coverage since 2020
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At The Dragon News, we believe in the power of truthful, unbiased journalism to inform, 
                  educate, and empower our readers. Our commitment to journalistic integrity drives us to 
                  deliver news that matters, without fear or favor.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We strive to be the most trusted source of news and information, maintaining the highest 
                  standards of journalism while embracing innovation in digital media.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, label: 'Global Coverage', value: '150+ Countries' },
                  { icon: Users, label: 'Monthly Readers', value: '10M+' },
                  { icon: Newspaper, label: 'Articles Published', value: '50K+' },
                  { icon: Award, label: 'Awards Won', value: '25+' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl text-center"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Truth & Accuracy',
              description: 'We verify facts thoroughly and present news with unwavering accuracy.',
              icon: Shield
            },
            {
              title: 'Independence',
              description: 'Our reporting remains free from external influences and biases.',
              icon: Award
            },
            {
              title: 'Innovation',
              description: 'We embrace digital transformation while maintaining journalistic excellence.',
              icon: TrendingUp
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <value.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Editorial Standards */}
      <div className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Editorial Standards</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Our editorial process is built on rigorous fact-checking, multiple source verification, 
                  and a commitment to balanced reporting. Every story goes through a comprehensive review 
                  process before publication.
                </p>
                <p className="text-gray-300">
                  We maintain strict guidelines for our journalists, ensuring:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Thorough fact verification from multiple sources</li>
                  <li>Clear distinction between news and opinion content</li>
                  <li>Transparent correction policies</li>
                  <li>Ethical reporting practices</li>
                  <li>Protection of source confidentiality</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Fact Checkers', value: '50+' },
                { label: 'Editorial Staff', value: '200+' },
                { label: 'Years of Excellence', value: '4+' },
                { label: 'Daily Updates', value: '100+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl text-center"
                >
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Editor-in-Chief',
              image: '/placeholder.svg?height=400&width=400'
            },
            {
              name: 'Michael Chen',
              role: 'Managing Editor',
              image: '/placeholder.svg?height=400&width=400'
            },
            {
              name: 'Emma Williams',
              role: 'Digital Director',
              image: '/placeholder.svg?height=400&width=400'
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions about our editorial process or want to provide feedback? 
            We'd love to hear from you.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About

