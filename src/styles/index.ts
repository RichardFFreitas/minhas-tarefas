import styled, { createGlobalStyle } from 'styled-components'
import cores from './cores'
import { Botao } from '../components/Tarefa/styles'

const EstiloGlobal = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Montserrat, sans-serif;
list-style: none;

body{
  background-color: #080808;
}
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  @media (max-width: 768px) {
    grid-template-columns: 140px auto;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow-y: auto;
    position: absolute;
    top: 38px;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #f8fafc;
  font-weight: bold;
  color: #1a1a1a;
  border-color: #1a1a1a;
  width: 100%;
  @media (max-width: 768px) {
    width: 120px;
  }
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${cores.verde};
`

export default EstiloGlobal
