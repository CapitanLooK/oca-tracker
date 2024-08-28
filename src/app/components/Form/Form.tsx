import Input from '../Input/Input';
import Button from '../Button/Button';
import { inputProps } from '../../utils/constants/constants';
import { IFormProps } from '@/app/utils/interfaces/global.interfaces';



export const Form: React.FC<IFormProps> = ({ handleSubmit, handleChange, onHandleClick }) => {
    return (
        <div className="bg-gray-950 rounded-lg shadow-sm">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
                <h2 className="text-2xl font-bold mb-6 text-white">
                    OCA Tracking Service
                </h2>
                <div className="grid gap-2">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        { inputProps.map((inputName, index)=>{
                            return (
                                <Input
                                key={index}
                                label={inputName}
                                type="text"
                                validate={(value: string) => (value.length > 1 ? "" : `Ingrese su ${inputName}`)}
                                handleChange={(value) => handleChange({ target: { name: inputName, value } } as unknown as React.ChangeEvent<HTMLInputElement>)}
                                classname="mt-4"
                              />
                            )
                        })}
                        <div className="mt-4">
                            <Button
                                text="Enviar"
                                type="submit"
                                onClick={onHandleClick}
                                classname="bg-purple-400 hover:bg-purple-50 text-gray-950 px-8 py-3 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};