import styled from 'styled-components';

export const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1rem;
  color: var(--gray);

  button {
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: var(--gray);
    padding: 0.5rem;
    border: 1px dashed transparent;
    border-radius: 4px;
    transition: 0.3s;
    cursor: pointer;
    text-transform: capitalize;

    ::before {
      content: "";
      display: inline-block;
      width: 25px;
      height: 25px;
      border-radius: 4px;
      margin-right: 1rem;
    }

    :focus-visible {
      background: transparent;
    } 
  }

  @media screen and (max-width: 768px) {
    display: grid;
    justify-content: start;
  }
`;

export const ItemLista = styled.li`
  button {
    &::before {
      background-color: var(--colorButtons);
    }

    &:focus-visible,
    &:hover,
    &.active {
      border-color: var(--colorButtons);
    }
  }

  &.active button {
    border-color: var(--colorButtons);
  }
`;