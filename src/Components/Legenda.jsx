import { useState } from 'react';
import { Lista, ItemLista } from './LegendaStyles';

export function Legenda({ tabela, refList }) {
  const [active, setActive] = useState(false);
  const newSetLegends = [...new Set(tabela.map((tabela) => tabela.Grupo))];
  const newSetColors = [...new Set(tabela.map((tabela) => tabela.Cor))];

  function formatLegend(legend) {
    return legend.toString().split("_").join(" ");
  }

  function toggleActive(e) {
    e.target.parentElement.classList.toggle('active');

    newSetLegends.forEach((grupo) => {
      const agrupamento = refList.current.querySelectorAll(`[data-group="${grupo}"]`);

      if (e.target.parentElement.classList.contains(`${grupo}`)) activateGroup(agrupamento);
    });
  }

  function activateGroup(type) {
    type.forEach((btn) => {
      btn.classList.toggle("active");
    });
  }

  return (
    <>
      <Lista>
        {newSetLegends.map((legend, index) => (
          <ItemLista
            key={legend}
            style={{ '--colorButtons': newSetColors[index] }}
            className={`${legend}`}
            onClick={toggleActive}
          >
            <button>{formatLegend(legend)}</button>
          </ItemLista>
        ))}
      </Lista>
    </>
  )
}