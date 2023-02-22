import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export class EmployeeService {
  constructor() {
    this.baseUrl = "https://63f2b02af28929a9df5e0de2.mockapi.io/api/";
  }
}

// Define a service using a base URL and expected endpoints
export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63f2b02af28929a9df5e0de2.mockapi.io/api/",
  }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => `employees`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery } = employeesApi;
