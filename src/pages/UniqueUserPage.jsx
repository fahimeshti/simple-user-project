import React from "react";
import { useLocation, useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import useUser from "../hooks/useUser";

function UniqueUserPage() {
  let { userId } = useParams();
  const [users, isLoading] = useUser(userId);
  const location = useLocation();
  const { firstName, lastName, email, company } = location.state;

  return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
      <div className="border-x w-full h-full max-w-5xl">
        <div className="border-b w-full p-10 space-y-1 pb-4 border-b-gray-300">
          <h2 className="text-xl font-bold">{firstName + " " + lastName}</h2>
          <span className="text-gray-600 block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {email}
          </span>
          <span className="text-gray-600 block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            {company.name}
          </span>
        </div>
        <div className="w-full px-10 p-2">
          <h3 className="text-xl text-gray-900 border-b-2 w-fit border-blue-500 font-medium mb-2">
            Posts
          </h3>
          {users?.posts?.map((post, idx) => (
            <SinglePost key={idx} post={post} />
          ))}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default UniqueUserPage;
