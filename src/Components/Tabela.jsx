import { elements } from '../Data';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Legenda } from './Legenda';
import { Modal } from './Modal';
import { TabelaWrapper } from './TabelaStyles';

export function Tabela() {
  const [tabela, setTabela] = useState(elements.Empresas);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const list = useRef();
  const btnClose = useRef();

  useEffect(() => {
    setTabela(elements.Empresas);
  }, []);

  function openModal(e) {
    const index = e.currentTarget.getAttribute('data-index');
    const indidualElementData = tabela[index];

    setModalData(indidualElementData);
    setModal(true);

    modal && btnClose.current.focus();
  }

  function closeModalWithEsc({ key }) {
    if (key === 'Escape') {
      setModal(false);
    }
  }

  return (
    <>
      <TabelaWrapper className="tabela-wrapper" onKeyDown={closeModalWithEsc}>
        <ul className="tabela" ref={list}>
          {tabela.map((empresa, index) => (
            <li
              key={empresa.Nome}
              style={{ gridColumn: empresa.Coluna, gridRow: empresa.Linha }}
            >
              <button
                onClick={openModal}
                className={`${empresa.Grupo} game`}
                style={{ '--colorButtons': empresa.Cor }}
                data-group={empresa.Grupo}
                data-index={index}
              >
                <b>{empresa.Abreviacao}</b>
                <span>{empresa.Nome}</span>
              </button>
            </li>
          ))}
        </ul>
      </TabelaWrapper>

      <Legenda tabela={tabela} refList={list} />

      {modal && (
        <Modal dadosTabela={modalData} setModal={setModal}>
          <button
            ref={btnClose}
            className="modal-close"
            onClick={() => setModal(false)}
          >
            X
          </button>
        </Modal>
      )}
    </>
  );
}
