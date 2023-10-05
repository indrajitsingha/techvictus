import React from "react";

const CourseCard = ({course}) => {
  const startdate = new Date(parseInt(course.startdate ) * 1000);
  const enddate = new Date(parseInt(course.enddate ) * 1000);
  return (
    <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 my-1  hover:-translate-y-4 hover:scale-105 ">
      <div className="flex h-60 flex-col justify-between overflow-hidden">
        <img src={course && course.mdl_course_custom_featured_image} className="  h-[100%] object-cover" />
      </div>
      <div className="flex-1 overflow-hidden bg-white px-6 py-8">
        <h5 className="group-hover:text-indigo-600 mb-4 text-xl font-bold">
          {course && course.fullname}
        </h5>
        <p className="mb-8 text-gray-600">
          {course && course.summary.slice(0,200)}
        </p>
        <div className="flex justify-between">
          <a
            href="#"
            className="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
          >
            <span>▷</span>
            <span className="underline">{course && course.shortname}</span>
          </a>
          <div className="max-w-full flex-none lg:px-4">
            <h5 className="text-sm font-bold"> Start Date :{course && startdate.toLocaleDateString()}</h5>
            <h5 className="text-sm font-bold"> End Date : {course && enddate.toLocaleDateString()}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
