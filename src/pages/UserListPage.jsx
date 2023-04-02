import React from "react";
import { UserTable } from "../components/UserTable";
import useUsers from "../hooks/useUsers";

function UserListPage() {
  const [users, isLoading] = useUsers();
  if (isLoading) {
    return <p className="p-6 text-center">Loading...</p>;
  }
  return (
    <div className="p-6">
      <h1 className="font-bold text-4xl uppercase text-gray-800 text-center mb-4">
        Users List
      </h1>
      <UserTable users={users} />
    </div>
  );
}

export default UserListPage;
