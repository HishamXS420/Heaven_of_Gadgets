
import banners from '../../assets/banner.jpg' 

const Banner = () => {
    return (
        <div className='relative mt-12 flex flex-col justify-center bg-purple-500'>
            <h2 className="text-5xl font-bold bg-purple-500 text-center text-white sm:px-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
            <h2 className="text-lg py-8 bg-purple-500  text-white text-center sm:px-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h2>
            <div className='text-center mb-16'>
            <button className="btn w-40 py-6 text-purple-600 font-bold rounded-2xl mx-auto text-xl">Shop Now</button>
            </div>
            
            <div className='border-3 border-slate-200 p-3 rounded-xl mx-auto'>
                <img className='rounded-xl w-full' src={banners} alt="" />
            </div>
            {/* <img className='border-3 border-slate-200 p-3 rounded-2xl ' src={banners} alt="" /> */}
        </div>
    );
};

export default Banner;