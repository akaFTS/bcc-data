import React from "react";
import ContentBox from "../layout/contentBox.tsx";

export default function Schedule() {
  return (
    <ContentBox title="Cronograma Previsto" color="orange">
      <ul className="gray fw3">
        <li className="mb3">
          <div className="fw6">Março a Maio</div>
          <div>Analisar dados históricos do BCC e organizá-los</div>
        </li>
        <li className="mb3">
          <div className="fw6">Abril a Julho</div>
          <div>
            Analisar o histórico de oferecimento de disciplinas ao longo do
            tempo e categorizá-las por área de estudo
          </div>
        </li>
        <li className="mb3">
          <div className="fw6">Junho a Setembro</div>
          <div>
            Obter informações sobre cursos de outras instituições (inicialmente
            planejado que sejam ICMC-USP, Unicamp, UFRJ, PUC-Rio, Stanford e
            MIT) através de pesquisas e entrevistas com alunos e professores
          </div>
        </li>
        <li className="mb3">
          <div className="fw6">Junho a Setembro</div>
          <div>
            Obter as grades de disciplinas atuais das referidas instituições e
            traçar comparações com a grade do BCC
          </div>
        </li>
        <li className="mb3">
          <div className="fw6">Abril a Outubro</div>
          <div>
            Construir um website com ricas visualizações e infográficos para
            disponibilizar todos os dados levantados
          </div>
        </li>
        <li className="mb3">
          <div className="fw6">Setembro a Dezembro</div>
          <div>
            Escrever uma monografia e um pôster para registrar todo o processo
          </div>
        </li>
      </ul>
    </ContentBox>
  );
}
