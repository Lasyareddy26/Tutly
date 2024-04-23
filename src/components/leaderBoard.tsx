'use client'
import Image from "next/image";
<<<<<<< HEAD
import { useState } from "react";
import img from '/public/assets/nodata.jpg'

export default function Leaderboard({ submissions, courses }: any) {
  const [currentCourse, setCurrentCourse] = useState<string>(courses[0].id);

  const filteredSubmissions = submissions.filter(
    (x: any) => x.assignment.class.course.id === currentCourse
  );
=======
import { useEffect, useState } from "react";

export default function Leaderboard({ submissions, courses } : any) {
  const [currentCourse, setCurrentCourse] = useState<string>("");

  useEffect(()=>{
    if(courses.length==0){
      setCurrentCourse(courses[0].id);
    }
  },[])
>>>>>>> 0ce47afb46ddf32b019f8c4d2ac4c58cf34c5451

  return (
    <div className="mx-2 md:mx-14 mt-4 flex flex-col gap-4">
      <h1 className="border text-center p-2 font-semibold text-lg">Leaderboard</h1>
      <div className="flex gap-3">
        {courses?.map((course: any) => (
          <button
            onClick={() => setCurrentCourse(course.id)}
            className={`rounded p-2 w-20 sm:w-auto ${
              currentCourse === course.id && "border"
            }`}
            key={course.id}
          >
            <h1 className="truncate max-w-xs text-sm font-medium">{course.title}</h1>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {filteredSubmissions.length === 0 ? (
          <div className="p-4 border rounded text-center">
            No submissions available for this course
          </div>
        ) : (
          filteredSubmissions.map((x: any, index: any) => (
            <div
              className="flex justify-between items-center p-2 px-4 border rounded hover:bg-primary-900"
              key={index}
            >
              <div className="flex gap-3 md:gap-10 items-center">
                <h1>{index + 1}</h1>
                <Image
                  src={x.enrolledUser.user.image}
                  alt={x.enrolledUser.user.name}
                  width={35}
                  height={35}
                  className="w-10 h-10 rounded-full"
                />
                <div className="py-2">
                  <h1 className="text-sm font-mediun">{x.enrolledUser.user.name}</h1>
                  <h1 className="text-xs">@{x.enrolledUser.user.username}</h1>
                </div>
              </div>
              <h1 className="font-medium text-xs md:text-sm">{x.totalPoints} points</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
