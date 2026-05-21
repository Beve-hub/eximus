'use client';
import Button from '@/component/ui/button/Button';

const LinearContent = () => {
    return (
        <div>
            {/* CTA Section */}
            <div className='flex flex-col items-center justify-center text-center py-20 px-6'>
                <h2 className='text-4xl text-[var(--background)] max-w-lg font-bold tracking-tight mb-3'>
                    Get a Solutions for All Industries
                </h2>
                <p className='text-base text-gray-500 max-w-lg mb-8'>
                    We provide innovative solutions for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market.
                </p>
               <Button 
            title="Contact Us" 
            className="bg-black hover:bg-green-700 text-white"
            onClick={() => alert('Clicked!')} />
            </div>
        </div>
    )
}

export default LinearContent