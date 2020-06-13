import React from 'react';
import ContentBox from '../shared/ContentBox';
import { Link } from 'react-router-dom';

export default function Summary() {
  return (
    <ContentBox title="Introdução" color="orange">
      <div className="fw3 lh-copy gray f6">
        <h3 className="mb0">Proposta</h3>
        <p className="mt2">
          O Bacharelado em Ciência da Computação do IME-USP foi fundado em 1972.
          Em seus mais de 40 anos de história e centenas de bacharéis formados,
          várias mudanças estruturais foram ocorrendo de modo a acomodar o
          crescimento do curso e a evolução da área. Este site foi criado para
          ilustrar de forma gráfica e simples um pouco de como se deu esta
          evolução.
        </p>
        <p className="mb2">
          Ele foi desenvolvido como um{' '}
          <Link to="/tcc" className="fw6 mid-gray pointer hover-dark-gray">
            Trabalho de Conclusão de Curso
          </Link>{' '}
          por Gustavo Silva, da turma de 2015, com supervisão do professor
          Carlinhos.
        </p>
        <h3 className="mb0">Tecnologia</h3>
        <p className="mb2">
          O site foi desenvolvido usando a ferramenta
          <span className="b"> React</span>. Para o estilo, foi utilizado CSS
          funcional através de <span className="i">tachyons</span>. Ambas são
          tecnologias open-source que permitem ao código ser bastante
          modularizado e simples de entender. Não há um back-end fornecendo as
          informações; elas estão salvas em arquivos JSON na pasta
          <span className="i"> src/data/</span> do projeto, enquanto as imagens
          estão na pasta <span className="i">public/</span>. Os formatos de cada
          arquivo de dados variam; alguns dados são representados por um único
          arquivo e outros por um arquivo para cada ano. Uma explicação de quais
          dados são usados no sistema, para qual fim e de onde eles foram
          retirados está na caixa &quot;Dados&quot; nesta página.
        </p>
        <p className="mb2">
          O código está majoritariamente na pasta
          <span className="i"> src/components/</span>, separado por módulo. A
          pasta <span className="i">src/components/pages</span> mantém os
          componentes de nível mais alto, que representam cada página do
          sistema. Vários dos módulos possuem um componente especial
          <span className="i"> XptoProvider</span> que é responsável por
          carregar os dados dos arquivos, formatá-los e repassá-los aos
          componentes responsáveis por exibi-los - assim as responsabilidades
          ficam bem separadas.
        </p>
        <h3 className="mb0">Contribuindo</h3>
        <p className="mb2">
          Este trabalho possui seu código aberto no GitHub, que pode ser
          acessado pelo link no rodapé do sistema. As tecnologias usadas
          permitem um fácil entendimento da estrutura do projeto. Contribuições
          são bem-vindas e ainda há bastante coisa interessante que pode ser
          adicionada, como fotos antigas ou depoimento de ex-alunos. Além disso,
          a pesquisa dos ex-alunos no Linkedin pode ser aprimorada ou refeita.
        </p>
        <p className="mb2">
          No repositório há um arquivo <span className="b">README </span>
          contendo informações de como rodar o sistema localmente para
          desenvolvimento. Para enviar alguma contribuição, basta submeter um
          Pull Request que, em caso de aprovação, será incorporado ao
          repositório.
        </p>
      </div>
    </ContentBox>
  );
}
