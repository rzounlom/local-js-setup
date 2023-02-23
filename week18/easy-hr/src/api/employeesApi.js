import axios from "axios";

//create an api for handling Employee related requests
export class EmployeesApi {
  constructor() {
    this.baseUrl = `https://63f2b02af28929a9df5e0de2.mockapi.io/api`;
  }

  //retrieve all employees
  getAllEmplyees = async () => {
    try {
      const { data } = await axios.get(`${this.baseUrl}/employees`);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  //retrieve an employee by their id
  getEmployeeById = async (id) => {
    try {
      const { data } = await axios.get(`${this.baseUrl}/employees/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  };

  //create new employee
  createEmployee = async (employee) => {
    try {
      const { data } = await axios.post(`${this.baseUrl}/employees`, {
        ...employee,
      });
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  };

  //edit an emplyee by their id
  updateEmployee = async (id, employeeData) => {
    try {
      const { data } = await axios.put(
        `${this.baseUrl}/employees/${id}`,
        employeeData
      );

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  //delete employee by id
  deleteEmployee = async (id) => {
    try {
      const { data } = await axios.delete(`${this.baseUrl}/employees/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
