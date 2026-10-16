export default function WPHero(){
    return(
        <section className=' flex flex-col min-h-svh text-center pt-20 bg-gray-100'>
            <img src='/hero-left-017.webp' className='max-w-[300px]'/>
            <div className="w-3x1">
            <h1 className='flex flex-col font-medium text-[62px] text-blue-950 font-lora leading-none'><span className='font-light text-sm text-blue-950 font-inter'>Managed Hosting & Beyond</span>Intelligent platforms built for<br/>your digital future</h1>
            <p className='mb-16 text-blue-950'>Powering 5 million websites, WP Engine brings together enterprise-grade software, managed hosting, developer tools, and cutting-edge AI across its ecosystem to help sites get found, gain attention, and convert.</p>
            <a className='bg-blue-600 py-4 px-6 text-white rounded-4xl mr-4'>Plans & Pricing</a><a className='bg-transparent py-4 px-6 text-black rounded-4xl border ml-4'>Get In Touch</a>
            </div>
            <img src='/hero-right-014.webp' className='max-w-[300px]'/>
        </section>
    );
}