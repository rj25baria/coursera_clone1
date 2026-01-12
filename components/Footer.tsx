const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Coursera</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">What We Offer</a></li>
              <li><a href="#" className="hover:underline">Leadership</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Catalog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Learners</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Developers</a></li>
              <li><a href="#" className="hover:underline">Beta Testers</a></li>
              <li><a href="#" className="hover:underline">Translators</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">More</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
          <div>
             <h3 className="font-bold text-gray-900 mb-4">App</h3>
             <div className="flex flex-col space-y-2">
                 <button className="bg-black text-white px-4 py-2 rounded flex items-center justify-center w-36">
                     <span className="text-xs">Download on the</span>
                     <span className="font-bold ml-1">App Store</span>
                 </button>
                 <button className="bg-black text-white px-4 py-2 rounded flex items-center justify-center w-36">
                     <span className="text-xs">Get it on</span>
                     <span className="font-bold ml-1">Google Play</span>
                 </button>
             </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500">
          © {new Date().getFullYear()} Coursera Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
