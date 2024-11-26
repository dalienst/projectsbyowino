import { projects } from "@/data/projects";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-3xl bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="py-8">
          {/* Card Header */}
          <div className="border-b border-gray-200 pb-4 px-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Projects By Owino
            </h2>
          </div>

          <div>
            {projects?.map((project) => (
              <div
                key={project.id}
                className="mb-4 border-b border-gray-200 py-2 flex flex-col items-start"
              >
                <div className="px-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project?.techStack?.map((stack, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-semibold text-gray-800 bg-orange-100 rounded-full"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
