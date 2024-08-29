export interface IFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    formData: {
        cuit: string;
        dni: string;
        parcel: string;
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

export interface IButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  classname?: string;
};

export interface IInputProps{
  label: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (value: string) => string;
  disabled?: boolean;
  placeholder?: string;
  classname?: string;
};