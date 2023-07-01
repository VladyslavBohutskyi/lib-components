import styled from 'styled-components';

interface IRow  {
  py: number
}

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  pad: 0 15px;
`


export const Row = styled.div<IRow>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:${(props => props.py)}px 0;
`