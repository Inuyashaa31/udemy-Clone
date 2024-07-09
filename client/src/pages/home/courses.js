import React from 'react';
import { wdcourses } from '../../resources/courses';

function Courses() {
    const [selectedItemIndex, setSelectedIndex] = React.useState(0);

    return (
        <div className='gap-9 flex flex-col sm:w-full'>
            <div className='flex flex-col px-16 gap-3 sm:px-2 sm:py-10 '>
            <p className='font-container text-4xl font-bold sm:text-xl'>All the skills you need in one place</p>
            <p className='text-gray-600 text-xl sm:text-sm'>From critical skills to technical topics, Udemy supports your professional development.</p>

            </div>
            <div className='px-16 flex gap-20 sm:px-2'>
                <div className='flex flex-row gap-10 border-b-2 sm:flex-col'>
                    {wdcourses.map((course, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-lg font-semibold px-5 ${selectedItemIndex === index ? 'text-black border-b-4 -ml-[2px]' : 'text-gray-500 '}`}>
                                {course.main}
                            </h1>

                
                        </div>

                        
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default Courses;
