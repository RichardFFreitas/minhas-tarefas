import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  display: flex;
  @media (max-width: 768px) {
    width: 90px;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    display: none;
    width: 90px;
  }
`
export const Botao = styled.button`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #080808;
  border-radius: 8px;
  margin-right: 8px;
`
