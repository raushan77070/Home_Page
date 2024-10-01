import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">PrintCraft</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-green-600">Products</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600">Features</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600">Resources</Link>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
              Log In
            </Button>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Get Started
            </Button>
          </div>
          <Button variant="ghost" className="md:hidden text-gray-600" aria-label="Menu">
            <Menu size={24} />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Create and Sell Custom Products Online</h1>
              <p className="text-xl mb-6">Start your print-on-demand business today with PrintCraft</p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Designing Now
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Custom Products" width={600} height={400} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Why Choose PrintCraft?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy to Use",
                  description: "Our intuitive design tools make it simple to create custom products.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "High-Quality Printing",
                  description: "We use state-of-the-art printing technology for vibrant, long-lasting results.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Global Shipping",
                  description: "We ship to customers worldwide, expanding your reach.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="text-green-600 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">What Our Customers Say</h2>
            <Card className="bg-green-50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Image src="/placeholder.svg" alt="Customer" width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-green-800">Sarah Johnson</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "PrintCraft has revolutionized my online business. The quality of their products and the ease of use of their platform is unmatched. I've seen a significant increase in sales since switching to PrintCraft!"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">PrintCraft</h3>
              <p className="text-green-200">Create and sell custom products with ease.</p>
            </div>
            {[
              {
                title: "Products",
                links: ["T-Shirts", "Mugs", "Phone Cases", "Posters"]
              },
              {
                title: "Resources",
                links: ["Blog", "Help Center", "API Documentation", "Partner Program"]
              },
              {
                title: "Connect",
                links: ["Twitter", "Facebook", "Instagram", "LinkedIn"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-green-200 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
            <p>&copy; 2023 PrintCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
