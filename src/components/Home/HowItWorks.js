import React from 'react';

const HowItWorks = () => {
    return (
        <section className="my-20 ">
    <div className="w-11/12 mx-auto px-5 text-center rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">How It Works</h2>
        <p className="text-gray-600 text-sm md:text-lg mb-10 max-w-xl mx-auto">Get your favorite books delivered to your hands in four simple steps.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-base-100 p-4 rounded-3xl shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">01</div>
                <h3 className="text-xl font-bold mb-3">Browse Collection</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Search through our extensive library of various genres and authors.</p>
            </div>
            
            <div className="bg-base-100 p-4 rounded-3xl shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">02</div>
                <h3 className="text-xl font-bold mb-3">Select Your Book</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Check for availability and select the book you want to read.</p>
            </div>

            <div className="bg-base-100 p-4 rounded-3xl shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">03</div>
                <h3 className="text-xl font-bold mb-3">Borrow Instantly</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Request the book with a single click and wait for quick approval.</p>
            </div>

            <div className="bg-base-100 p-4 rounded-3xl shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">04</div>
                <h3 className="text-xl font-bold mb-3">Read & Enjoy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Dive into your book and return it once you have finished reading.</p>
            </div>
        </div>
    </div>
</section>
    );
};

export default HowItWorks;