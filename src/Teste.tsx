import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  color: white;
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
