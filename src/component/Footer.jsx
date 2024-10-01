import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Reduced gap */}
          {/* First Column: Integrations */}
          <div className="pl-12"> {/* Increased padding-left */}
            <h4 className="text-lg font-semibold mb-4">Integrations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Shopify</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Etsy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">eBay</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Amazon</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">TikTok Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">PrestaShop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">BigCommerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Wix</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">WooCommerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Squarespace</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Printify API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Printify Pop-Up Store</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shutterstock</a></li>
            </ul>
          </div>

          {/* Second Column: Discover */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Etsy Print-on-Demand</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shopify Print-on-Demand</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Woocommerce Print-on-Demand</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Wix Print-on-Demand</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Squarespace Print-on-Demand</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Make Your Own Shirt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Brands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Rates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mockup Generator</a></li>
            </ul>
          </div>

          {/* Third Column: Start Selling */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Start Selling</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Custom T-shirts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Hoodies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Mugs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Socks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Backpacks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sell on Etsy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sell on Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Free T-shirt Designs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom All-Over-Print Hoodies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Start a Clothing Line</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Start POD Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Transferring to PrintCraft</a></li>
            </ul>
          </div>

          {/* Fourth Column: PrintCraft */}
          <div>
            <h4 className="text-lg font-semibold mb-4">PrintCraft</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Print on Demand</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Print Providers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Experts Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Printify Express Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Become a Partner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Printify Quality Promise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Printing Profits Podcast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Affiliate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">POD Glossary</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Network Fulfillment Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Merchant Protection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2024 Printify, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
