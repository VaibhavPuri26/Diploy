import { testimonialsData } from '../mockData/data';
import Slider from 'react-slick/lib/slider';

const Testimonial = () => {

    const setting = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-24 mb-24 bg-gray-50'>
            <div className="container mx-auto">

                {/* header section */}
                <div className='flex flex-col text-center mb-10 max-w-full space-y-2 mr-auto gap-4'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800
                    '>Trusted by over 8M sellers around the world</h1>
                    <p className='text-sm text-gray-600'>Whether you are just getting started or run an enterprise-level e-commerce business, <br /> we do everything we can to ensure a positive merchant experience.</p>
                </div>

                {/* Testimonials Cards */}
                <div>
                    <Slider {...setting}>
                        {
                            testimonialsData.map((data) => (
                                <div key={data.id} className='my-6'>
                                    <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 bg-white'>
                                        {/* upper section */}
                                        <div className='flex justify-start items-center gap-5'>
                                            <img src={data.img} alt='' className='rounded-full w-16 h-16' />
                                            <div>
                                                <p className='text-xl font-bold text-slate-900'>{data.name}</p>
                                                <p>{data.name}</p>
                                            </div>
                                        </div>

                                        {/* lower section */}
                                        <div className='py-6 space-y-4'>
                                            <p className='text-sm text-gray-500'>{data.review}</p>
                                            <p>⭐⭐⭐⭐⭐</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default Testimonial