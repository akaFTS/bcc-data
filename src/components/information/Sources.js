import React from 'react'
import ContentBox from '../shared/ContentBox'

const Sources = () => {
  return (
    <ContentBox title="Referências" color="orange">
      <div className="fw3 lh-copy gray f6">
        <p>
          Toda a confecção deste trabalho foi baseada em fontes e documentos
          oficiais do IME, obtidos com a ajuda da Secretaria do DCC.
        </p>
        <p>
          Para a elaboração da Timeline, foram utilizados principalmente
          processos da USP relacionados ao reconhecimento de curso do BCC, em
          especial o processo 2010.1.950.45.0, que continha a maior parte das
          informações. Outros processos continham atas das congregações dos anos
          1970 a 1975, e bastante informação foi obtida nessas atas. Para obter
          as datas de inauguração dos blocos do IME, foi necessário procurar as
          placas comemorativas em cada bloco. Outros dados mais recentes, como a
          fundação dos grupos de extensão, foram obtidos pesquisando-se em seus
          respectivos sites, ou valendo-se da memória, já que são coisas que
          ocorreram no período em que eu já estava no curso.
        </p>
        <p>
          Os módulos de professores, matérias e grade foram construídos através
          da pesquisa em catálogos de graduação. Trata-se de pequenos livros que
          são distribuídos todo ano aos novos alunos, contendo informações
          atualizadas dos departamentos, matérias, ementas e outras informações.
          Com a ajuda da secretaria do DCC, conseguimos uma cópia do catálogo de
          graduação de cada ano desde a fundação do curso em 1972, à exceção do
          ano de 2002. Estudando-se cada um desses catálogos e registrando as
          informações ano a ano, foi possível preparar os infográficos com a
          evolução do corpo docente e das matérias oferecisas ao longo do tempo,
          além da evolução da grade obrigatória do BCC. Os infográficos tem uma
          confiabilidade bem alta, porém não absoluta, pois há grande número de
          erros nos catálogos, os quais tiveram que ser contornados deduzindo-se
          o que seria o correto (e.g. professores e matérias que desaparecem por
          um ano da listagem e depois reaparecem).
        </p>
        <p>
          Nos módulos de matérias e grade, as matérias são sempre tratadas como
          MAC, apesar de serem do MAP até 1987. Para realizar a separação antes
          da criação do departamento, foi necessário deduzir quais matérias
          seriam "do MAC" a partir de sua ementa, e também acompanhando quais
          matérias foram passadas para o MAC quando de sua criação e separá-las
          retroativamente nos anos anteriores. Além disso, no módulo de grade,
          os catálogos não informam em quais semestres algumas disciplinas mais
          variadas deveriam ser cursadas (e.g. Educação Moral e Cívica) então
          elas foram inseridas em semestres arbitrários.
        </p>
        <p>
          O módulo de alunos e alunas formados foi obtido acessando-se a página
          de ex-alunos do BCC (
          <span className="i">
            https://www.ime.usp.br/~cgmac/ex-alunos/res.html
          </span>
          ) e contando-se o número de homens e mulheres formados a cada ano. Há
          uma certa imprecisão nos dados pois alguns nomes estrangeiros
          (especialmente orientais) são difíceis de precisar o sexo, porém a
          ocorrência deles era baixa o suficiente para que isso não afete o
          formato geral do gráfico.
        </p>
      </div>
    </ContentBox>
  )
}

export default Sources
