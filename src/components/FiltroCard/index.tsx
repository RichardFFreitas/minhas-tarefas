import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from '../../Utils/enums/Tarefas'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const sameCriterio = filtro.criterio === criterio
    const sameValor = filtro.valor === valor

    return sameCriterio && sameValor
  }

  const contarTarefa = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }
  const contador = contarTarefa()
  const ativo = verificaAtivo()

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
