"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AssignmentBoard({ courses, assignments }: any) {
  const [currentCourse, setCurrentCourse] = useState<string>(courses[0]?.id);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (courses.length === 0) {
    alert("No courses enrolled!");
    return;
  }
  
  if (!isMounted) {
    return;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        {courses?.map((course: any) => {
          return (
            <button
              onClick={() => setCurrentCourse(course.id)}
              className={`rounded p-2 w-20 sm:w-auto ${
                currentCourse === course.id && "border"
              }`}
              key={course.id}
            >
               <h1 className="truncate max-w-xs text-sm font-medium">{course.title}</h1>
            </button>
          );
        })}
      </div>
      {assignments.map((couse: any) => {
        if (couse.id !== currentCourse) return null;
        return couse.classes.map((cls: any) => {
          return cls.attachments.map((assignment: any) => {
            return (
              <div key={assignment.id} className="border p-1 md:p-4">
                <div className="flex items-center p-2 md:p-0 md:px-4 justify-around md:justify-between">
                  <div className="flex flex-col md:flex-row gap-4  items-center justify-between w-full">
                    <div className="flex gap-10 items-center text-sm">
                      <h2 className="font-medium">{assignment.title}</h2>
                      <button
                        onClick={() =>
                          router.push(`/assignments/${assignment.id}`)
                        }
                        className="p-2 px-4 bg-primary-500 rounded"
                      >
                        View
                      </button>
                    </div>
                    <div className="flex gap-4 items-center text-sm font-medium">
                      {assignment.dueDate && (
                          <h1 className="rounded-full p-2 px-3 bg-secondary-600">{assignment.dueDate?.toISOString().split("T")[0]}</h1>
                        )}
                      <h1 className="rounded-full p-2 px-3 bg-secondary-600">
                        {assignment.submissions.length === 0
                          ? "not submitted"
                          : "submitted"}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
        });
      })}
    </div>
  );
}
