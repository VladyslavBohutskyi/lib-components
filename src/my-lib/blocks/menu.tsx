import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  align-items: center;
`
export const MenuItem = styled.li`
  font-size: 16px;
  letter-spacing: 0.1rem;
  margin-left: 20px;
  &:first-child{
    margin-left: 0;
  }
  a{
    text-decoration: none;
    text-transform: uppercase;
  }
`