export interface IFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    formData: {
        cuil: string;
        dni: string;
        tracking: string;
    };
}

export interface IPackageParams {
    clientId: string;
    cuit: string;
    parcel: string;
  }
  

export interface ITableData {
    Id: number;
    NumeroEnvio: string;
    Descripcion_Motivo: string;
    Desdcripcion_Estado: string;
    SUC: string;
    Fecha: string;
  }
  
export interface IProps {
    xmlString: string;
  }