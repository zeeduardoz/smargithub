/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaUser, FaLock } from 'react-icons/fa'

import { Content, Title, FormAuth, FormComponent } from './style'
import { AuthContext } from '../../context/AuthContext'

export function Form() {
  const { signIn } = useContext(AuthContext)

  const schema = Yup.object().shape({
    user: Yup.string().required('Informe o usuário'),
    password: Yup.string().required('Informe a senha')
  })

  const initialValues = {
    user: '',
    password: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const handleSignIn = (data: any) => signIn(data)

  return (
    <Content>
      <Title>
        SmarGithub
        <p>Acesse sua conta, inserindo suas credenciais!</p>
        <hr />
      </Title>
      <FormAuth onSubmit={handleSubmit(handleSignIn)}>
        <FormComponent>
          <p>
            <FaUser />
            &nbsp; Usuário
          </p>
          <input
            {...register('user')}
            defaultValue={initialValues.user}
            type="text"
            name="user"
            placeholder="Informe o usuário"
            maxLength={50}
          />
          {errors.user && <span>{errors.user.message}</span>}
        </FormComponent>
        <FormComponent>
          <p>
            <FaLock />
            &nbsp; Senha
          </p>
          <input
            {...register('password')}
            defaultValue={initialValues.password}
            type="password"
            name="password"
            placeholder="Insira a senha"
            maxLength={30}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </FormComponent>

        <button type="submit">Entrar</button>
      </FormAuth>
    </Content>
  )
}
