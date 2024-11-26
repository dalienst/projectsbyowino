import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-3xl bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="py-6">
          {" "}
          {/* Reduced padding from py-8 to py-6 */}
          {/* Card Header */}
          <div className="border-b border-gray-200 pb-3 px-4">
            <h2 className="text-2xl font-semibold text-gray-800 m-0">
              Projects By Owino
            </h2>
          </div>
          <div>
            {projects?.map((project) => (
              <div
                key={project.id}
                className="mb-4 border-b border-gray-200 py-4 flex flex-col items-start"
              >
                <div className="px-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-lg font-medium text-gray-800 m-0"
                  >
                    {project.title}
                  </Link>

                  <p className="mt-2 leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project?.techStack?.map((stack, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-semibold text-gray-800 bg-orange-100 rounded-full"
                      >
                        {stack}
                      </span>
                    ))}
                    <span
                      className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${
                        project.status === "In Progress"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* General Footer */}
          <div className=" pt-4 px-4">
            <p className="text-gray-700 text-sm text-center">
              Dalienst Owino Oduor <br />
              <Link href="mailto:oduordalienst@gmail.com">
                oduordalienst@gmail.com
              </Link>{" "}
              <br />
              <Link
                href="https://www.dalienst.co.ke/"
                className="text-blue-600"
              >
                www.dalienst.co.ke
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
