// utils/showAlert.js

import Swal from "sweetalert2";

export const showSuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    timer: 1000,
    showConfirmButton: false,
  });
};

export const showError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    timer: 2000,
    text: message,
  });
};
