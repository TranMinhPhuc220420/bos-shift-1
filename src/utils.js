import { POSITION_LIST, EMPLOYEE_LEVEL, BRANCH_LIST } from './constant';

export const generateId = () => {
  // Generate a random 8-character alphanumeric and time now string
  const randomString = Math.random().toString(36).substring(2, 10);
  const timeNow = Date.now().toString(36).substring(2, 10);

  return `${randomString}-${timeNow}`;
}

export const getNamePosition = (position) => {
  // Get the name of the position from the POSITION_LIST
  const positionObj = POSITION_LIST.find(item => item.id === position);
  return positionObj ? positionObj.name : null;
};

export const getNameBranch = (branch) => {
  // Get the name of the branch from the BRANCH_LIST
  const branchObj = BRANCH_LIST.find(item => item.id === branch);
  return branchObj ? branchObj.name : null;
};

export const getNameLevel = (level) => {
  // Get the name of the level from the EMPLOYEE_LEVEL
  return EMPLOYEE_LEVEL[level] || null;
};

export const formatCurrency = (value) => {
  // Check if the value is a number
  if (isNaN(value)) {
    return value;
  }
  // Convert the value to a number
  value = Number(value);

  // Check if the value is a valid number
  if (isNaN(value)) {
    return value;
  }
  // Check if the value is negative
  if (value <= 0) {
    return value;
  }
  // Check if the value is a string
  if (typeof value === 'string') {
    value = parseFloat(value.replace(/,/g, ''));
  }

  // Format the value as currency
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value);
};