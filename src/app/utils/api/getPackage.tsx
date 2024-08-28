import axios from "axios";
import { toast } from "react-toastify";
import { IPackageParams } from "../interfaces/global.interfaces";
import { getTrackingUrl } from "../constants/constants";


export const fetchTrackingInfo = async({
  clientId,
  cuit,
  parcel,
}: IPackageParams): Promise<any> => {
  try {
    const url = getTrackingUrl(clientId, cuit, parcel);

    const response = await axios.get(url, {});
    return response.data.result;
  } catch (error) {
    console.error("Error:", error);
    toast.error(`${error}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw new Error("Network response was not ok");
  }
}
