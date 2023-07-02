import styled from 'styled-components'

interface IHeader {
  color?: string
}

export const LHeader = styled.header<IHeader>`
  background-color: ${(props) => props.color ?? 'white'};
`