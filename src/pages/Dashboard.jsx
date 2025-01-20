import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getGroupsWithPagination } from "../services/groupService";

const DashboardPage = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const result = await getGroupsWithPagination(page, perPage);
        setGroups(result.data || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGroups();
  }, [page, perPage]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Võ Duy Việt</h1>
        {error ? (
          <div className="text-red-600 bg-red-100 p-4 rounded">
            Error: {error}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Group List (Page {page})
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white shadow rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">#</th>
                    <th className="px-4 py-2 text-left">Group Name</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((group, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-blue-50`}
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{group.group_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className={`px-4 py-2 rounded-lg shadow ${
                  page === 1
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
