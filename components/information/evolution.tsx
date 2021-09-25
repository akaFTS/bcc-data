import React from "react";
import ContentBox from "../layout/contentBox.tsx";

export default function Evolution() {
  return (
    <ContentBox title="Evolução" color="orange">
      <ul className="gray fw3">
        <li className="mb3 lh-title">
          <span className="fw6">26/04/2018:</span>
          <span>Estrutura básica do site e entrega da proposta</span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">25/05/2018:</span>
          <span>
            Primeira versão do módulo de professores terminada, usava dados dos
            processos de reconhecimento do BCC, tinha informações de apenas 4
            momentos ao longo dos últimos 40 anos
          </span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">24/06/2018:</span>
          <span>Módulo de alunos e alunas formados terminado</span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">30/06/2018:</span>
          <span>Timeline finalizada</span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">02/08/2018:</span>
          <span>
            Segunda versão do módulo de professores terminada, com informações
            anuais do departamento e layout mais limpo
          </span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">30/08/2018:</span>
          <span>Módulo de matérias terminado</span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">12/09/2018:</span>
          <span>
            Redefinição sobre o TCC, substituição da comparação de cursos por
            perfil do ex-aluno
          </span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">29/09/2018:</span>
          <span>
            Reescrita do site inteiro em nova tecnologia (React), substituindo o
            site escrito em Angular + Sass que era bem mais trabalhoso de
            adicionar novas funcionalidades
          </span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">30/09/2018:</span>
          <span>
            Adicionada exibição da evolução dos nomes das matérias ao longo do
            tempo
          </span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">05/10/2018:</span>
          <span>Módulo de grades finalizado</span>
        </li>
        <li className="mb3 lh-title">
          <span className="fw6">31/10/2018:</span>
          <span>Módulo de ex-alunos finalizado</span>
        </li>
      </ul>
    </ContentBox>
  );
}
