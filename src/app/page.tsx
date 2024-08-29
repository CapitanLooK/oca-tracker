"use client";
import { useEffect, useState } from "react";
import { Form } from "./components/Form/Form"
import {fetchTrackingInfo} from "./utils/api/getPackage";
import {parseXml} from "./utils/api/parseData";
import { FadeLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { thName } from "./utils/constants/constants";

export default function Home() {
  const [formData, setFormData] = useState({
    cuit: "",
    dni: "",
    parcel: "",
  });
  const [trackingInfo, setTrackingInfo] = useState<any>(null);
  const [trackingArray, setTrackingArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const fetchData = async () => {
    try {
      const data = await fetchTrackingInfo({
        clientId: formData.dni,
        cuit: formData.cuit,
        parcel: formData.parcel,
      });
      setTrackingInfo(data);
    } catch (err) {
      console.error("Failed to fetch tracking info", err);
    }
  };

  useEffect(() => {
    if (trackingInfo) {
      console.log(trackingInfo);
      let trackData = parseXml(trackingInfo);
      setTrackingArray(trackData);
    }
  }, [trackingInfo]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    await fetchData();
    setLoading(false);
  };

  return (
    <main className='min-h-screen bg-gray-900'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-purple-400 py-4 px-6 sm:px-8 flex justify-center">
        <h1 className="text-2xl font-bold text-gray-950">
          OCA Track
        </h1>
      </div>
      <div className="max-w-6xl mx-auto p-6 sm:p-8 min-h-full bg-gray-900">
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onHandleClick={onHandleClick}
          formData={formData}
        />
        <FadeLoader
          color="rgb(192, 132, 252)"
          cssOverride={{
            position: "relative",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: "5rem",
            padding: "2rem",
          }}
          aria-label="Loading Spinner"
          loading={loading}
        />
        {trackingArray.length !== 0 && (
          <div>
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Oca Package Tracking Service
              </h2>
              <table className=" border-none md:max-w-screen block whitespace-nowrap overflow-x-auto lg:whitespace-normal">
                <thead>
                  <tr className="bg-purple-400 text-gray-950">
                    {thName.map((name, index) => {
                      return (
                        <th key={index} className="px-4 py-2">{name}</th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {trackingArray
                    .slice()
                    .reverse()
                    .map((item: any, index: number) => (
                      <tr
                        key={index}
                        className=" dark:text-white text-gray-950 border-none  border-y">
                        <td className="border border-purple-400 px-4 py-2  border-x-0  border-y">
                          {item.Id}
                        </td>
                        <td className="border border-purple-400 px-4 py-2  border-x-0  border-y ">
                          {item.NumeroEnvio}
                        </td>
                        <td className="border border-purple-400 px-4 py-2  border-x-0   border-y">
                          {item.Descripcion_Motivo}
                        </td>
                        <td className="border border-purple-400 px-4 py-2  border-x-0   border-y">
                          {item.Desdcripcion_Estado}
                        </td>
                        <td className="border border-purple-400 px-4 py-2  border-x-0   border-y">
                          {item.SUC}
                        </td>
                        <td className="border border-purple-400 px-4 py-2  border-x-0   border-y">
                          {item.fecha}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}