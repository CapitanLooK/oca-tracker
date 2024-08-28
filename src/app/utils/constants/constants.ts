import { IPackageParams } from "../interfaces/global.interfaces"

export const API_BASE_URL = '/api/tracking/trackPackage'
export const getTrackingUrl = (clientId: string, cuit: string, parcel:string)=>{
    return `${API_BASE_URL}/?NroDocumentoCliente=${clientId}&CUIT=${cuit}&Pieza=${parcel}`
}

export const inputProps: string[] = [
    'CUIT',
    'DNI',
    'Tracking'
]

export const thName: string[] = [
    'id',
    'NumeroEnvio',
    'Descripcion_Motivo',
    'Descripcion_Estado',
    'SUC',
    'Fecha'
]