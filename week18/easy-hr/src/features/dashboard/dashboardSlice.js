import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//import EmployeeApi
import { EmployeesApi } from "../../api/employeesApi";

const initialState = {
  employees: [],
  createEmployeeLoading: false,
  getAllEmployeeLodaing: false,
  updateEmployeeLoading: false,
  deleteEmployeeLoading: false,
  employeeToEdit: null,
};

//create instance of EmployeesApi
const api = new EmployeesApi();

//create async thunk functions for api employee requests
//get all employees
export const fetchEmployees = createAsyncThunk(
  "dashboard/getEmployees",
  async () => {
    const response = await api.getAllEmplyees();
    return response;
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setEmployeeToEdit: (state, action) => {
      state.employeeToEdit = action.payload;
    },
    clearEmployeeToEdit: (state, action) => {
      state.employeeToEdit = null;
    },
  },
  extraReducers: (builder) => {
    //create pending(what happens wile the request is still pending) case for getting all employees
    builder.addCase(fetchEmployees.pending, (state) => {
      //set loading state for getting all employees to true
      state.getAllEmployeeLodaing = true;
    });
    //create fufilled(what happens when the request complete) case for getting all employees
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      //set loading state for getting all employees to false
      state.getAllEmployeeLodaing = false;
      //add employee data to employees state
      state.employees = action.payload;
    });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
export const { setEmployeeToEdit, clearEmployeeToEdit } =
  dashboardSlice.actions;

export default dashboardSlice;
