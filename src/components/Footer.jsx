import Logo from '../assets/logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import { FaRedditSquare } from "react-icons/fa";

const Footer = () => {

    const ArrOne = ["Shopify", "Etsy", "eBay", "Amazon", "TikTok Shop", "PrestaShop", "BigCommerce", "Wix", "WooCommerce", "Squarespace", "Printify API", "Printify Pop-Up Store", "Shutterstock"];
    const ArrTwo = ["Blog", "Guides", "Products", "Etsy print-on-demand", "Shopify print-on-demand", "Woocommerce print-on-demand", "Wix print-on-demand", "Squarespace print-on-demand", "Make Your Own Shirt", "Brands", "Pricing", "Shipping Rates", "Mockup Generator"];
    const ArrThree = ["Print on Demand", "Print Providers", "Experts Program", "Printify Express Delivery", "Become a Partner", "About", "Printify Quality Promise", "Jobs", "Webinars", "Printing Profits Podcast", "Contact Us", "Affiliate", "Contact Sales", "POD Glossary", "Network Fulfillment Status","Merchant Protection","Security","Sitemap"];
    const ArrFour = ["Custom T-shirts", "Custom Hoodies", "Custom Mugs", "Custom Socks", "Custom Backpacks", "Custom Branding", "Sell on Etsy", "Sell on Social Media", "Free T-shirt Designs", "Custom Products", "Custom All-Over-Print Hoodies", "Start a Clothing Line", "Start POD Business", "Bulk Orders","Transferring To Printify"]

    return (
        <div>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-5 md:grid-cols-2 md:gap-4 sm:grid-cols-1 py-5 border-t-2 border-black-300/10'>
                    
                    {/* Brand info and Social Icons - Horizontal Alignment */}
                    <div className='py-8 px-4 lg:col-span-1'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center gap-2 font-bold'>
                                <img src={Logo} alt='logo' className='h-14 w-14' />
                                <h3 className='hidden lg:block font-bold text-3xl text-primary'>Printi<span className='text-primary'>fy</span></h3>
                            </div>
                            {/* Social Media Icons - Positioned below the logo */}
                            <div className='flex items-center gap-4'>
                                <a href='#'><FaFacebookSquare className='text-2xl text-primary' /></a>
                                <a href='#'><AiFillInstagram className='text-2xl text-primary' /></a>
                                <a href='#'><FaSquareXTwitter className='text-2xl text-primary' /></a>
                                <a href='#'><FaLinkedin className='text-2xl text-primary' /></a>
                                <a href='#'><SiYoutube className='text-2xl text-primary' /></a>
                                <a href='#'><AiFillTikTok className='text-2xl text-primary' /></a>
                                <a href='#'><FaRedditSquare className='text-2xl text-primary' /></a>
                            </div>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className='grid grid-cols-2 md:grid-cols-4 md:col-span-4 md:ml-14'>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Integrations</h1>
                            <ul className='flex flex-col gap-3'>
                                {ArrOne.map((value, index) => (
                                    <li key={index}><a href='#'>{value}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Discover</h1>
                            <ul className='flex flex-col gap-3'>
                                {ArrTwo.map((value, index) => (
                                    <li key={index}><a href='#'>{value}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Start Selling</h1>
                            <ul className='flex flex-col gap-3'>
                                {ArrFour.map((value, index) => (
                                    <li key={index}><a href='#'>{value}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Printify</h1>
                            <ul className='flex flex-col gap-3'>
                                {ArrThree.map((value, index) => (
                                    <li key={index}><a href='#'>{value}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='mt-8'>
                    <div className='text-center py-6 border-t-2 border-black-300/10'>
                        <span className='text-sm text-gray-500 opacity-70'>
                            @Vaibhav Puri 2024 All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
