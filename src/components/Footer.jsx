// const Footer = () => {
//   return (
//     <div className="bg-purple-50 w-full mt-2 py-10 px-5 md:px-16 lg:h-64 lg:flex lg:justify-between">
//       {/* Section 1: Brand and Apps */}
//       <div className="mb-8 lg:mb-0">
//         <p className="text-2xl lg:text-4xl">Shop Non-Stop on Meesho</p>
//         <p className="text-slate-600 mt-3 lg:mt-5 text-sm lg:text-lg">
//           Trusted by more than 1 Crore Indians
//         </p>
//         <p className="text-slate-600 text-sm lg:text-lg">
//           Cash on Delivery | Free Delivery
//         </p>
//         <div className="flex space-x-5 mt-6 lg:mt-8">
//           <img
//             className="h-10 w-40 lg:h-12 lg:w-48 cursor-pointer"
//             src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
//             alt="Google Play Store"
//           />
//           <img
//             className="h-10 w-40 lg:h-12 lg:w-48 cursor-pointer"
//             src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
//             alt="App Store"
//           />
//         </div>
//       </div>

//       {/* Section 2: Links */}
//       <div className="flex flex-col space-y-5 lg:space-y-6 lg:text-xl text-slate-600 mb-8 lg:mb-0">
//         <div className="cursor-pointer">Careers</div>
//         <div className="cursor-pointer">Become a Supplier</div>
//         <div className="cursor-pointer">Hall of Fame</div>
//         <div className="cursor-pointer">Sitemap</div>
//       </div>

//       {/* Section 3: More Links */}
//       <div className="flex flex-col space-y-5 lg:space-y-6 lg:text-xl text-slate-600 mb-8 lg:mb-0">
//         <div className="cursor-pointer">Legal and Policies</div>
//         <div className="cursor-pointer">Meesho Tech Blog</div>
//         <div className="cursor-pointer">Notices and Returns</div>
//       </div>

//       {/* Section 4: Contact */}
//       <div className="text-sm lg:text-base text-slate-600 max-w-xs">
//         <p className="text-lg lg:text-xl mb-2">Contact Us</p>
//         <p className="text-wrap">
//           Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263, 3rd
//           Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village, Varthur
//           Hobli, Outer Ring Road Bellandur, Bangalore, Karnataka, India, 560103
//         </p>
//         <p className="mt-2">
//           <a href="mailto:query@meesho.com" className="underline">
//             E-mail address: query@meesho.com
//           </a>
//         </p>
//         <small className="block mt-2">© 2015-2024 Meesho.com</small>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center bg-purple-50 w-full mt-2 py-10 px-5 md:px-16 lg:h-auto lg:flex-row lg:text-left lg:justify-between">
      {/* Section 1: Brand and Apps */}
      <div className="mb-8 lg:mb-0">
        <p className="text-2xl lg:text-4xl">Shop Non-Stop on Meesho</p>
        <p className="text-slate-600 mt-3 lg:mt-5 text-sm lg:text-lg">
          Trusted by more than 1 Crore Indians
        </p>
        <p className="text-slate-600 text-sm lg:text-lg">
          Cash on Delivery | Free Delivery
        </p>
        <div className="flex space-x-5 mt-6 lg:mt-8">
          <img
            className="h-10 w-40 lg:h-12 lg:w-48 cursor-pointer"
            src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
            alt="Google Play Store"
          />
          <img
            className="h-10 w-40 lg:h-12 lg:w-48 cursor-pointer"
            src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
            alt="App Store"
          />
        </div>
      </div>

      {/* Section 2: Links */}
      <div className="flex flex-col space-y-5 lg:space-y-6 lg:text-xl text-slate-600 mb-8 lg:mb-0">
        <div className="cursor-pointer">Careers</div>
        <div className="cursor-pointer">Become a Supplier</div>
        <div className="cursor-pointer">Hall of Fame</div>
        <div className="cursor-pointer">Sitemap</div>
      </div>

      {/* Section 3: More Links */}
      <div className="flex flex-col space-y-5 lg:space-y-6 lg:text-xl text-slate-600 mb-8 lg:mb-0">
        <div className="cursor-pointer">Legal and Policies</div>
        <div className="cursor-pointer">Meesho Tech Blog</div>
        <div className="cursor-pointer">Notices and Returns</div>
      </div>

      {/* Section 4: Contact */}
      <div className="text-sm lg:text-base text-slate-600 max-w-xs">
        <p className="text-lg lg:text-xl mb-2">Contact Us</p>
        <p className="text-wrap">
          Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263, 3rd
          Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village, Varthur
          Hobli, Outer Ring Road Bellandur, Bangalore, Karnataka, India, 560103
        </p>
        <p className="mt-2">
          <a href="mailto:query@meesho.com" className="underline">
            E-mail address: query@meesho.com
          </a>
        </p>
        <small className="block mt-2">© 2015-2024 Meesho.com</small>
      </div>
    </div>
  );
};

export default Footer;
