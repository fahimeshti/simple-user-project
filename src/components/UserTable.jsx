import { useNavigate } from "react-router-dom";

export const UserTable = ({ users }) => {
  const navigate = useNavigate();
  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`, { state: user });
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full justify-center items-center flex">
          <div className="overflow-auto w-full max-w-5xl rounded-md border">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr className="w-full flex justify-between">
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Company
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.users?.map((user, idx) => (
                  <tr
                    key={idx}
                    className={`inline-block w-full ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                    } hover:bg-gray-200 flex justify-between cursor-pointer`}
                    onClick={() => handleRowClick(user)}
                  >
                    <td className="px-6 py-5 text-sm text-gray-800 whitespace-nowrap">
                      {user.firstName + " " + user.lastName}
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-800 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-800 whitespace-nowrap">
                      {user.company.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
