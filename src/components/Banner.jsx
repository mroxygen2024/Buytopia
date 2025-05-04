import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";
import Banner1 from "../assets/banner_img_01.jpg";
import Banner2 from "../assets/banner_img_02.jpg";
import Banner3 from "../assets/banner_img_03.jpg";

const Banner = () => {
    const products = [
        {
            id: 1,
            title: "Discover the Best Furniture for Your Home",
            subTitle: "Exclusive Collection",
            image: Banner1,
        },
        {
            id: 2,
            title: "Modern Designs for Every Room",
            subTitle: "New Arrivals",
            image: Banner2,
        },
        {
            id: 3,
            title: "Comfort Meets Style",
            subTitle: "Top Picks",
            image: Banner3,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full bg-gray-100">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col lg:flex-row items-center justify-between w-full h-[600px] px-8 lg:px-32">
                        {/* Text Content */}
                        <div className="flex-1 text-left">
                            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                                {product.subTitle}
                            </p>
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800 mb-6">
                                {product.title}
                            </h1>
                            <button className="px-6 py-3 bg-[#029fae] rounded-lg text-white uppercase font-medium flex items-center gap-2 hover:bg-[#027c8a] transition">
                                Shop Now <MoveRight />
                            </button>
                        </div>

                        {/* Image */}
                        <div className="flex-1 flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;