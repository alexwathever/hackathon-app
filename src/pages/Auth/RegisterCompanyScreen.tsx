import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { startRegisterCompany } from "../../redux/actions/auth"

import { InputText } from '../../components/Input/InputText'
import { InputTextTarea } from '../../components/Input/InputTextTarea'

import { IFormSubmitRegisterCompany } from '../../interfaces/IFormSubmit'

import { FormSchema } from '../../validators/FormSchema'
import { Title } from '../../components/Title/Title';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import imagen from '../../assets/images/company(1).svg';

export const RegisterCompanyScreen = () => {
    const dispatch = useDispatch();
    

    const { register, handleSubmit, formState: { errors } } = useForm<IFormSubmitRegisterCompany>({
        resolver: yupResolver(FormSchema.registerCompany)
    });

    const onSubmit = (data: IFormSubmitRegisterCompany) => {
        dispatch(startRegisterCompany(data));
    }

    return (
        <div className="register-container">
            <header>
                <Title text="Ingrese datos de la empresa" />
            </header>
            <div className="flex-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <InputText  label="Nombre" register={register("name")} error={errors?.name} />
                        <InputText  label="LinkedIn" register={register("linkedIn")} error={errors?.linkedIn} />
                        <InputText  label="País" register={register("country")} error={errors?.country} />
                        <InputText  label="Página Web" register={register("website")} error={errors?.website} />
                        <InputText  label="Contraseña" register={register("password")} error={errors?.password} />
                        <InputText  label="Ingrese contraseña nuevamente" register={register("repeatPassword")} error={errors?.repeatPassword} />
                    </div>
                    <InputTextTarea  label="Descripción" register={register("description")} error={errors?.description} />
                    <ButtonComponent text="Registrarse" color="btn primary" />
                </form>
                <div className="img-content">
                    <img src={imagen} alt="Imagen dev"/>
                </div>
            </div>
        </div>
    )
}