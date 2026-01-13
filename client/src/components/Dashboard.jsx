import React from "react";
import { Settings, X } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Michael Holz",
    avatar: "https://i.pravatar.cc/40?img=1",
    date: "04/10/2013",
    role: "Admin",
    status: "Active",
    statusColor: "bg-green-500",
  },
  {
    id: 2,
    name: "Paula Wilson",
    avatar: "https://i.pravatar.cc/40?img=2",
    date: "05/08/2014",
    role: "Publisher",
    status: "Active",
    statusColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    avatar: "https://i.pravatar.cc/40?img=3",
    date: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
    statusColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Mary Saveley",
    avatar: "https://i.pravatar.cc/40?img=4",
    date: "06/09/2016",
    role: "Reviewer",
    status: "Active",
    statusColor: "bg-green-500",
  },
  {
    id: 5,
    name: "Martin Sommer",
    avatar: "https://i.pravatar.cc/40?img=5",
    date: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    statusColor: "bg-orange-400",
  },
  {
    id: 6,
    name: "Smith Doe",
    avatar: "https://i.pravatar.cc/40?img=6",
    date: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
    statusColor: "bg-red-500",
  },
  {
    id: 7,
    name: "David Nolan",
    avatar: "https://i.pravatar.cc/40?img=7",
    date: "06/09/2016",
    role: "Reviewer",
    status: "Active",
    statusColor: "bg-green-500",
  },
  {
    id: 8,
    name: "John Smith",
    avatar: "https://i.pravatar.cc/40?img=8",
    date: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    statusColor: "bg-orange-400",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-gray-500 text-sm">
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Date Created</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b last:border-none text-sm text-gray-700"
              >
                <td className="px-6 py-4">{user.id}</td>

                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{user.name}</span>
                </td>

                <td className="px-6 py-4">{user.date}</td>
                <td className="px-6 py-4">{user.role}</td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${user.statusColor}`}
                    ></span>
                    <span>{user.status}</span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600">
                      <Settings size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600">
                      <X size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end items-center gap-2 px-6 py-4 text-sm text-gray-500">
          <span className="cursor-pointer">Previous</span>
          <span className="px-3 py-1 rounded bg-blue-500 text-white">1</span>
          <span className="px-3 py-1 rounded hover:bg-gray-200 cursor-pointer">
            2
          </span>
          <span className="px-3 py-1 rounded hover:bg-gray-200 cursor-pointer">
            3
          </span>
          <span className="cursor-pointer">Next</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
