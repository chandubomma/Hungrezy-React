import React from "react";
import { Select, SelectItem } from "@tremor/react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Image } from "@chakra-ui/react";
import error from "../../../assets/error.png";
import { queriesData } from "../../../data/queries"; // Assuming you have queriesData

const AdminQueries = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredQueries = queriesData.filter((query) => {
    if (
      (!statusFilter || statusFilter === "all") &&
      (!typeFilter || typeFilter === "all")
    ) {
      return true;
    }

    let statusCondition =
      !statusFilter || statusFilter === query.status || statusFilter === "all";

    let typeCondition =
      !typeFilter || typeFilter === query.type || typeFilter === "all";

    return statusCondition && typeCondition;
  });

  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Queries</h1>
        <div className="flex items-center py-2.5 gap-2 mx-2">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Queries</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row items-center mt-6">
        <div className="flex items-center">
          <p className="text-sm font-semibold text-gray-500">Status:</p>
          <Select
            className="w-24 ml-2"
            placeholder="Status"
            value={statusFilter}
            onValueChange={setStatusFilter}
            defaultValue="all"
          >
            <SelectItem value="all" className="cursor-pointer" defaultChecked>
              All
            </SelectItem>
            <SelectItem value="pending" className="cursor-pointer">
              Pending
            </SelectItem>
            <SelectItem value="in-progress" className="cursor-pointer">
              In Progress
            </SelectItem>
            <SelectItem value="resolved" className="cursor-pointer">
              Resolved
            </SelectItem>
          </Select>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-semibold text-gray-500">Type:</p>
          <Select
            className="w-32 ml-2"
            placeholder="Type"
            value={typeFilter}
            onValueChange={setTypeFilter}
            defaultValue="all"
          >
            <SelectItem value="all" className="cursor-pointer">
              All
            </SelectItem>
            <SelectItem value="general" className="cursor-pointer">
              General
            </SelectItem>
            <SelectItem value="technical" className="cursor-pointer">
              Technical
            </SelectItem>
            <SelectItem value="other" className="cursor-pointer">
              Other
            </SelectItem>
          </Select>
        </div>
      </div>

      {filteredQueries.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <Image src={error} alt="error" />
          <p className="text-sm font-semibold text-gray-600 mt-4">
            No queries found
          </p>
        </div>
      )}

      {filteredQueries.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 pb-4">
          {filteredQueries.map((query) => (
            <div key={query.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-500">
                  {query.type === "general"
                    ? "General"
                    : query.type === "technical"
                    ? "Technical"
                    : "Other"}
                </h2>
                <p
                  className={`text-sm font-semibold ${
                    query.status === "resolved"
                      ? "text-green-500"
                      : query.status === "in-progress"
                      ? "text-blue-500"
                      : "text-orange-500"
                  }`}
                >
                  {query.status}
                </p>
              </div>
              <p className="text-sm text-gray-600">{query.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminQueries;
