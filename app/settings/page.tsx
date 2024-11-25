'use client'
import React, { useState } from 'react';
import { Camera, Lock, Bell, Globe, Shield, LogOut, Leaf } from 'lucide-react';
import Image from 'next/image';

// import { Alert, AlertDescription } from '@/components/ui/alert';

const ProfileSettings = () => {
  const [saved, setSaved] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([
    'community-and-advocacy',
    'green-transportation'
  ]);


  const sustainabilityInterests = [
    { id: 'eco-friendly-living', emoji: '🌱', label: 'Eco-Friendly Living' },
    { id: 'recycling-upcycling', emoji: '♻️', label: 'Recycling & Upcycling' },
    { id: 'climate-action', emoji: '🌍', label: 'Climate Action' },
    { id: 'green-transportation', emoji: '🚴', label: 'Green Transportation' },
    { id: 'reforestation', emoji: '🌳', label: 'Reforestation' },
    { id: 'renewable-energy', emoji: '🌞', label: 'Renewable Energy' },
    { id: 'sustainable-fashion', emoji: '🛍️', label: 'Sustainable Fashion' },
    { id: 'plastic-free-living', emoji: '🍃', label: 'Plastic-Free Living' },
    { id: 'community-and-advocacy', emoji:'👫', label:'Community and Advocacy'},
    { id: 'sustainable-development-goals-(SDGs)', emoji:'🌟', label:'Sustainable Development Goals (SDGs)'},
  ];
  
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const toggleInterest = (interestId:string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-50 p-6 border-b border-green-100">
        <h1 className="text-2xl font-semibold text-gray-800">Profile Settings</h1>
        <p className="text-gray-600">Manage your EcoSync account settings and preferences</p>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* {saved && (
        //   <Alert className="mb-6 bg-green-50 border-green-200">
        //     <AlertDescription>Settings saved successfully!</AlertDescription>
        //   </Alert>
        )} */}

        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex items-center gap-6">
            <div className="relative">

              <Image
                src="/user-round.svg"
                width={100}
                height={100}
                alt="Profile"
                className="rounded-full object-cover border-2 border-black"
              />
              
              <button className="absolute bottom-0 right-0 p-2 bg-green-500 rounded-full text-white hover:bg-green-600">
                <Camera size={16} />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Tim Cooper</h2>
              <p className="text-gray-600">@ecowarrior</p>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Personal Information */}
          <section className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  defaultValue="Tim Cooper"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  defaultValue="Tim@ecosync.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  rows={3}
                  defaultValue="🌿 Advocating sustainability, sharing eco ideas, and driving change 🌍 | Let's make a greener world together! ♻️✨"
                />
              </div>
            </div>
          </section>

           {/* Sustainability Interests Section */}
           <section className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-green-600" size={24} />
              <h3 className="text-lg font-medium">Sustainability Interests</h3>
            </div>
            <p className="text-gray-600 mb-4">Select your areas of interest in sustainability</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sustainabilityInterests.map((interest) => (
                <div
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  className={`p-3 border rounded-lg cursor-pointer transition-all flex items-center gap-2 ${
                    selectedInterests.includes(interest.id)
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <span className="text-xl">{interest.emoji}</span>
                  <span className="font-medium">{interest.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy Settings */}
          <section className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="text-gray-600" size={20} />
                  <div>
                    <p className="font-medium">Profile Visibility</p>
                    <p className="text-sm text-gray-600">Control who can see your profile</p>
                  </div>
                </div>
                <select className="p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                  <option>Public</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="text-gray-600" size={20} />
                  <div>
                    <p className="font-medium">Notifications</p>
                    <p className="text-sm text-gray-600">Manage your notification preferences</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Security Settings */}
          <section className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Security</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock className="text-gray-600" size={20} />
                  <div>
                    <p className="font-medium">Change Password</p>
                    <p className="text-sm text-gray-600">Update your password regularly</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-md">
                  Update
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="text-gray-600" size={20} />
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-md">
                  Enable
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-between">
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Save Changes
          </button>
          <button className="px-6 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-md flex items-center gap-2 right-6">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;