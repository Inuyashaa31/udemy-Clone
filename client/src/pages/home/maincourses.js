import React, { useState } from 'react';
import { wdcourses } from '../../resources/courses';

function Maincourses() {
  const [visibleCourses, setVisibleCourses] = useState(4); 

  const handleShowMoreCourses = () => {
    setVisibleCourses(prevVisibleCourses => prevVisibleCourses + 4); 
  };

  return (
    <div>
      <div className='flex flex-wrap justify-center space-x-4 p-4 sm:flex-col sm:w-full sm:justify-center sm:px-4'>
        {wdcourses.slice(0, visibleCourses).map((course, index) => (
          <div key={index} className='min-w-[200px] max-w-[300px] flex-shrink-0 mb-4 sm:'>
            <img
              className='w-full h-[200px] object-cover rounded-md shadow-lg'
              src={course.image}
              alt={course.title}
            />
            <div className='bg-white p-4 rounded-md shadow-md'>
              <h2 className='text-lg font-bold'>{course.title}</h2>
              <p className='text-sm'>{course.aurthor}</p> 
              <p className='text-sm'>Rating: {course.rating} ({course.views} reviews)</p> 
              <p className='text-sm font-semibold'> ₹ {course.price}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCourses < wdcourses.length && (
        <div className='flex justify-center mt-4'>
          <button 
            className='px-16 size-1/2 border-2 border-black border-black font-black'
            onClick={handleShowMoreCourses}
          >
            Show more Courses
          </button>
        </div>
      )}
    </div>
  );
}

export default Maincourses;

