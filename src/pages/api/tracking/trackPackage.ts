import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Define the fetchTrackingInfo function
const fetchTrackingInfo = async (
  clientId: string,
  cuit: string,
  parcel: string
) => {
  try {
    const response = await axios.get(
      `https://webservice.oca.com.ar/oep_tracking/Oep_Track.asmx/Tracking_Pieza?NroDocumentoCliente=${clientId}&CUIT=${cuit}&Pieza=${parcel}`,
      {}
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { clientId, cuit, parcel } = req.query;

    if (!clientId || !cuit || !parcel) {
      res.status(400).json({ error: "Missing parameters" });
      return;
    }

    const result = await fetchTrackingInfo(
      clientId as string,
      cuit as string,
      parcel as string
    );

    res.status(200).json({ result });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to load data" });
  }
}
