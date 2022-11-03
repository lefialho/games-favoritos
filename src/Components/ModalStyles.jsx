import styled from 'styled-components';

export const Dialog = styled.dialog`
  display: grid;
  background: transparent;
  place-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 40px;

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal-container {
    display: grid;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    z-index: 1;
    max-width: 70ch;
    position: relative;
    animation: slide 0.3s ease-out forwards;
  }

  .nome {
    font-size: 2rem;
    font-weight: bold;
    color: var(--colorButtons);
  }

  .grupo {
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--colorButtons);
  }

  .descricao {
    line-height: 1.5;
  }

  @keyframes slide {
    from {
      transform: translate3d(0, -40px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
`;
