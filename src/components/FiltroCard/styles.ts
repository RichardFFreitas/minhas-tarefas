import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1c8ef7' : '#1a1a1a')};
  background-color: ${(props) => (props.ativo ? '#f8fafc' : '#fff')};
  color: ${(props) => (props.ativo ? '#1c8ef7' : '#1a1a1a')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
