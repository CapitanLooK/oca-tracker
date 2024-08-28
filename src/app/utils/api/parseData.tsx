import { ITableData } from "../interfaces/global.interfaces";

export const parseXml = (xmlString: string): ITableData[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const tables = Array.from(xmlDoc.querySelectorAll("NewDataSet > Table"));

  return tables.map((table, index) => {
    const getTextContent = (selector: string) =>
      table.querySelector(selector)?.textContent || "";

    const extractedData: ITableData = {
      Id: index + 1,
      NumeroEnvio: getTextContent("NumeroEnvio"),
      Descripcion_Motivo: getTextContent("Descripcion_Motivo"),
      Desdcripcion_Estado: getTextContent("Descripcion_Estado"),
      SUC: getTextContent("SUC"),
      Fecha: getTextContent("Fecha"),
    };

    return extractedData;
  });
};
