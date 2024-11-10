import Image from "next/image";
import { ecoCreators, features } from "./utils/data";
import NavButton from "./utils/NavButton";

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-lg mx-4 my-6 overflow-hidden">
        <Image
          src="/defaultPage/dashboard.png"
          alt="Dash background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-5xl font-bold mb-4">Share your sustainable journey</h1>
          <p className="text-lg mb-8 text-center max-w-2xl">
            Post photos and videos of your eco-friendly lifestyle, from zero-waste living to plant-based meals - and inspire others to join you!
          </p>
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search for eco-friendly tips and products"
              className="w-full px-6 py-3 rounded-full text-black dark:text-white outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#04c052] text-black px-6 py-2 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Eco Creators Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Join the eco-creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecoCreators.map((creator, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src={creator.image}
                  alt={creator.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{creator.title}</h3>
                <p className="text-gray-600 dark:text-gray-500 mt-2">{creator.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12">How Eco Sync works</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border  hover:border-green-500 dark:border-gray-600 hover:shadow-lg hover:shadow-green-500/30  transition-all duration-300">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-8">Ready to join the eco-movement?</h2>
        <NavButton name='Sign up' className='bg-[#04c052] hover:bg-[#04c052]-500 font-semibold dark:text-white text-black px-6 py-1 rounded-full text-md hover:bg-opacity-90' route='/Login' />
      </div>
    </div>
  );
}
