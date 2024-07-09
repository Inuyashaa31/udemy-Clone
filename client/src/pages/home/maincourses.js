import React, { useState, useEffect } from 'react';
import axios from "axios";


function Maincourses() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/course");
        console.log(res.data); // Add this line to check the response data
        const data = res.data.filter((data) => data.Category === "Development");
        console.log(data);
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);

  const [visibleCourses, setVisibleCourses] = useState(4); 

  const handleShowMoreCourses = () => {
    setVisibleCourses(prevVisibleCourses => prevVisibleCourses + 8); 
  };

  return (
    <div>
      <div className='flex flex-wrap justify-center space-x-4 p-4 sm:flex-col sm:w-full sm:justify-center sm:px-4 cursor-pointer hover:bg-'>
        {course.slice(0, visibleCourses).map((course, index) => (
          <div key={index} className='min-w-[200px] max-w-[300px] flex-shrink-0 mb-4 sm:'>
            <img
              className='w-full h-[200px] object-cover rounded-md shadow-lg'
              src={course.Image}
              alt={course.Subtitle}
            />
            <div className='bg-white p-4 rounded-md shadow-md hover:bg-violet-100'>
              <h2 className='text-lg font-bold'>{course.Subtitle}</h2>
              <p className='text-sm'>{course.Instructor}</p> 
              <p className='text-sm'>{course.Avg_Rate} ({course.Reviews_count} reviews)</p> 
              <p className='text-sm font-semibold'>{course.Price}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCourses < course.length && (
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

