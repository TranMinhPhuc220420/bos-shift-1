import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

import { db } from "./firebase";

import { EMPLOYEE_COLLECTION } from "./constant";
import { formatCurrency, getNameBranch, getNameLevel, getNamePosition } from "./utils";

/**
 * Get the list of employees from the Firestore database.
 * 
 * @function getEmployeeList
 * @async
 * @returns {Promise<Array>} - Returns a promise that resolves to an array of employee objects from the Firestore database.
 * @description Fetches the list of employees from the Firestore database. Each employee object contains the id and data fields.
 */
export const getEmployeeList = async () => {
  try {
    const employeeList = await getDocs(collection(db, EMPLOYEE_COLLECTION));
    const employeeListData = employeeList.docs.map((doc) => {
      let data = doc.data();

      return {
        id: doc.id,
        key: doc.id,
        position_display: getNamePosition(data.position),
        branch_display: getNameBranch(data.branch),
        level_display: getNameLevel(data.level),
        salary_display: formatCurrency(data.salary),
        ...data,
      };
    });

    return employeeListData;
  }
  catch (error) {
    console.error("Error fetching employee list: ", error);
  }

  return false;
};

/**
 * Add an employee to the Firestore database.
 * 
 * @function addEmployee
 * @async
 * @param {object} employee - The employee object to be added to the database
 * @returns {boolean} - Returns true if the employee was added successfully, false otherwise
 * @description Adds an employee to the Firestore database. The employee object should contain the necessary fields.
 */
export const addEmployee = async (employee) => {
  try {
    const docRef = await addDoc(collection(db, EMPLOYEE_COLLECTION), employee);

    return docRef.id;
  }
  catch (error) {
    console.error("Error adding employee: ", error);
  }

  return false;
};

/**
 * Delete an employee from the Firestore database.
 * 
 * @function deleteEmployee
 * @async
 * @param {string} employeeId - The ID of the employee to be deleted
 * @returns {boolean} - Returns true if the employee was deleted successfully, false otherwise
 * @description Deletes an employee from the Firestore database using their ID.
 */
export const deleteEmployee = async (employeeId) => {
  try {
    const docRef = doc(db, EMPLOYEE_COLLECTION, employeeId);
    await deleteDoc(docRef);

    return true;
  }
  catch (error) {
    console.error("Error deleting employee: ", error);
  }

  return false;
}

/**
 * Update an employee in the Firestore database.
 * 
 * @function updateEmployee
 * @async
 * @param {string} employeeId - The ID of the employee to be updated
 * @param {object} employeeData - The updated employee data
 * @returns {boolean} - Returns true if the employee was updated successfully, false otherwise
 * @description Updates an employee in the Firestore database using their ID and the new data.
 */
export const updateEmployee = async (employeeId, employeeData) => {
  try {
    const docRef = doc(db, EMPLOYEE_COLLECTION, employeeId);
    await updateDoc(docRef, employeeData);

    return true;
  }
  catch (error) {
    console.error("Error updating employee: ", error);
  }

  return false;
}