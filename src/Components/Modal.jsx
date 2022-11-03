import { Dialog } from './ModalStyles';

export function Modal({ dadosTabela, ref, setModal, children }) {
  function closeModal() {
    setModal(false);
  }

  function closeModalOnClickOutside({ target, currentTarget }) {
    if (currentTarget === target) closeModal();
  }

  function formatGroup(group) {
    return group.toString().split("_").join(" ");
  }

  return (
    <Dialog onClick={closeModalOnClickOutside}>
      <div className='modal-container'>
        {children}
        <div
          style={{ '--colorButtons': dadosTabela.Cor, display: 'grid' }}
        >
          <span className="nome">{dadosTabela.Nome}</span>
          <span className="grupo">{formatGroup(dadosTabela.Grupo)}</span>
        </div>
        <p className="descricao">{dadosTabela.Descricao}</p>
      </div>
    </Dialog>
  );
}