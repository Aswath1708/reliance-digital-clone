import { toast } from "react-toastify";

export const errorToast = (message) =>
  toast.error(message, { autoClose: 2000 });

export const successToast = (message) =>
  toast.success(message, { autoClose: 2000 });

export const infoToast = (message) => toast.info(message, { autoClose: 2000 });

export const warningToast = (message) =>
  toast.warn(message, { autoClose: 2000 });
