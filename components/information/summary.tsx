import React from 'react';
import Link from 'next/link';
import ContentBox from '../layout/contentBox';
import styles from './summary.module.css';

export default function Summary() {
  return (
    <ContentBox title="Introdução" color="brand-orange">
      <div className={styles.container}>
        <h3 className={styles.title}>Proposta</h3>
        <p>
          O Bacharelado em Ciência da Computação do IME-USP foi fundado em 1972.
          Em seus mais de 40 anos de história e centenas de bacharéis formados,
          várias mudanças estruturais foram ocorrendo de modo a acomodar o
          crescimento do curso e a evolução da área. Este site foi criado para
          ilustrar de forma gráfica e simples um pouco de como se deu esta
          evolução.
        </p>
        <p className={styles.endOfSection}>
          Ele foi desenvolvido como um{' '}
          <Link href="/tcc" passHref>
            <span className={styles.link}>Trabalho de Conclusão de Curso</span>
          </Link>{' '}
          por Gustavo Silva, da turma de 2015, com supervisão do professor
          Carlinhos.
        </p>
        <h3 className={styles.title}>Tecnologia</h3>
        <p>
          O site foi desenvolvido usando a ferramenta
          <span className={styles.bold}> React </span>com Next.js. Para o
          estilo, foram usados CSS Modules. Ambas são tecnologias open-source
          que permitem ao código ser bastante modularizado e simples de
          entender. Não há um back-end fornecendo as informações; elas estão
          salvas em arquivos JSON na pasta
          <span className={styles.italic}> data/</span>do projeto, enquanto as
          imagens estão na pasta
          <span className={styles.italic}> public/</span>. Os formatos de cada
          arquivo de dados variam; alguns dados são representados por um único
          arquivo e outros por um arquivo para cada ano. Uma explicação de quais
          dados são usados no sistema, para qual fim e de onde eles foram
          retirados está na caixa &quot;Dados&quot; nesta página.
        </p>
        <p className={styles.endOfSection}>
          O código está majoritariamente na pasta
          <span className={styles.italic}> components/</span>, separado por
          módulo. A pasta
          <span className={styles.italic}> pages/</span> mantém os arquivos que
          definem cada página do sistema. Os dados são lidos e repassados para
          os componentes com o uso de React Hooks.
        </p>
        <h3 className={styles.title}>Contribuindo</h3>
        <p>
          Este trabalho possui seu código aberto no GitHub, que pode ser
          acessado pelo link no rodapé do sistema. As tecnologias usadas
          permitem um fácil entendimento da estrutura do projeto. Contribuições
          são bem-vindas e ainda há bastante coisa interessante que pode ser
          adicionada, como fotos antigas ou depoimento de ex-alunos. Além disso,
          a pesquisa dos ex-alunos no Linkedin pode ser aprimorada ou refeita.
        </p>
        <p className={styles.endOfSection}>
          No repositório há um arquivo
          <span className={styles.bold}> README </span>contendo informações de
          como rodar o sistema localmente para desenvolvimento. Para enviar
          alguma contribuição, basta submeter um Pull Request que, em caso de
          aprovação, será incorporado ao repositório.
        </p>
      </div>
    </ContentBox>
  );
}
