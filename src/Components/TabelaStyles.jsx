import styled from 'styled-components';

export const TabelaWrapper = styled.section`
  &.tabela-wrapper {
    overflow-x: auto;
    padding: 3rem 1rem;
  }

  .tabela {
    display: grid;
    grid-gap: 0.5rem;
    margin: 0 auto;
    max-width: 1140px;
  }

  .game {
    display: grid;
    border: 4px solid currentColor;
    align-content: center;
    border-radius: 8px;
    padding: 0.7rem;
    min-width: 120px;
    min-height: 120px;
    aspect-ratio: 1/1;
    transition: 0.2s;
    transform: scale(1);
    cursor: pointer;

    &:hover,
    button:focus-visible {
      background-color: currentColor;
      transform: scale(1.1);
    }

    &.active {
      background-color: var(--colorButtons);

      b,
      span {
        color: var(--primary-color);
      }
    }
  }

  button:focus-visible b,
  button:focus-visible span,
  .game:hover b,
  .game:hover span {
    color: var(--primary-color) !important;
  }

  b {
    font-size: clamp(1rem, 1.7vw, 2rem);
    font-weight: bold;
    line-height: 1.2;
  }

  span {
    font-size: clamp(10px, 1vw, 14px);
  }

  @media (max-height: 740px) {
    &.tabela-wrapper {
      padding: 0 1rem 0.5rem;
    }

    .tabela {
      max-width: 965px;
    }

    .game {
      min-width: 100px;
      min-height: 100px;
      max-width: 100px;
      max-height: 100px;
    }
  }
`;
