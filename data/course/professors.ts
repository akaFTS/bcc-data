import { Professor } from 'types/course';
import pf from 'public/professors/pf.jpg';
import setzer from 'public/professors/setzer.jpg';
import simon from 'public/professors/simon.jpg';
import siang from 'public/professors/siang.jpg';
import routo from 'public/professors/routo.jpg';
import rene from 'public/professors/rene.jpg';
import chumes from 'public/professors/chumes.jpg';
import mandel from 'public/professors/mandel.jpg';
import yoshiko from 'public/professors/yoshiko.jpg';
import marcilio from 'public/professors/marcilio.jpg';
import nami from 'public/professors/nami.jpg';
import mariaAngela from 'public/professors/maria-angela.jpg';
import stern from 'public/professors/stern.jpg';
import reverbel from 'public/professors/reverbel.jpg';
import afonso from 'public/professors/afonso.jpg';
import denise from 'public/professors/denise.jpg';
import ramos from 'public/professors/ramos.jpg';
import yoshi from 'public/professors/yoshi.jpg';
import alan from 'public/professors/alan.jpg';
import coelho from 'public/professors/coelho.jpg';
import carlinhos from 'public/professors/carlinhos.jpg';
import kunio from 'public/professors/kunio.jpg';
import dilma from 'public/professors/dilma.jpg';
import gubi from 'public/professors/gubi.jpg';
import pinhanez from 'public/professors/pinhanez.jpg';
import leucio from 'public/professors/leucio.jpg';
import arnaldo from 'public/professors/arnaldo.jpg';
import cris from 'public/professors/cris.jpg';
import tito from 'public/professors/tito.jpg';
import robertoCarlos from 'public/professors/roberto-carlos.jpg';
import danielPanario from 'public/professors/daniel-panario.jpg';
import haeYong from 'public/professors/hae-yong.jpg';
import alair from 'public/professors/alair.jpg';
import leonidas from 'public/professors/leonidas.jpg';
import ronaldo from 'public/professors/ronaldo.jpg';
import celma from 'public/professors/celma.jpg';
import barrera from 'public/professors/barrera.jpg';
import gold from 'public/professors/gold.jpg';
import kon from 'public/professors/kon.jpg';
import endler from 'public/professors/endler.jpg';
import flavio from 'public/professors/flavio.jpg';
import acvm from 'public/professors/acvm.jpg';
import finger from 'public/professors/finger.jpg';
import hernan from 'public/professors/hernan.jpg';
import hitoshi from 'public/professors/hitoshi.jpg';
import jef from 'public/professors/jef.jpg';
import marcondes from 'public/professors/marcondes.jpg';
import leliane from 'public/professors/leliane.jpg';
import ernesto from 'public/professors/ernesto.jpg';
import queiroz from 'public/professors/queiroz.jpg';
import nina from 'public/professors/nina.jpg';
import pauloJose from 'public/professors/paulo-jose.jpg';
import renata from 'public/professors/renata.jpg';
import marcel from 'public/professors/marcel.jpg';
import hirata from 'public/professors/hirata.jpg';
import mascarenhas from 'public/professors/mascarenhas.jpg';
import gerosa from 'public/professors/gerosa.jpg';
import fujita from 'public/professors/fujita.jpg';
import daniel from 'public/professors/daniel.jpg';
import pauloMiranda from 'public/professors/paulo-miranda.jpg';
import kelly from 'public/professors/kelly.jpg';
import denis from 'public/professors/denis.jpg';
import marcelK from 'public/professors/marcel-k.jpg';
import sinai from 'public/professors/sinai.jpg';
import fmario from 'public/professors/fmario.jpg';
import defaultPic from 'public/professors/default.png';

export const professorData: { [code: string]: Professor } = {
  pf: { image: pf, code: 'pf', name: 'P. Feofiloff' },
  setzer: { image: setzer, code: 'setzer', name: 'V. Setzer' },
  simon: { image: simon, code: 'simon', name: 'Imre Simon' },
  istvan: { image: defaultPic, code: 'istvan', name: 'Istvan Simon' },
  silvio: { image: defaultPic, code: 'silvio', name: 'Silvio Ursic' },
  geraldo: { image: defaultPic, code: 'geraldo', name: 'Geraldo Lino' },
  siang: { image: siang, code: 'siang', name: 'Siang' },
  routo: { image: routo, code: 'routo', name: 'Routo' },
  rene: { image: rene, code: 'rene', name: 'René' },
  waldo: { image: defaultPic, code: 'waldo', name: 'Waldo' },
  chumes: { image: chumes, code: 'chumes', name: 'C. Humes' },
  graca: { image: defaultPic, code: 'graca', name: 'Graça Bressan' },
  zwicker: { image: defaultPic, code: 'zwicker', name: 'R. Zwicker' },
  stolfi: { image: defaultPic, code: 'stolfi', name: 'J. Stolfi' },
  tomasz: { image: defaultPic, code: 'tomasz', name: 'Tomasz' },
  ines: { image: defaultPic, code: 'ines', name: 'Inês H. de Mello' },
  edna: { image: defaultPic, code: 'edna', name: 'Edna' },
  bete: { image: defaultPic, code: 'bete', name: 'Bete Vivian' },
  anselmo: { image: defaultPic, code: 'anselmo', name: 'Anselmo' },
  wagner: { image: defaultPic, code: 'wagner', name: 'Wagner' },
  miguel: { image: defaultPic, code: 'miguel', name: 'Miguel Haddad' },
  mandel: { image: mandel, code: 'mandel', name: 'Arnaldo' },
  yoshiko: { image: yoshiko, code: 'yoshiko', name: 'Yoshiko' },
  marcilio: { image: marcilio, code: 'marcilio', name: 'Marcílio' },
  nami: { image: nami, code: 'nami', name: 'Nami' },
  decio: { image: defaultPic, code: 'decio', name: 'Décio' },
  mariaangela: { image: mariaAngela, code: 'mariaangela', name: 'M. Ângela' },
  marfiza: { image: defaultPic, code: 'marfiza', name: 'Marfiza' },
  stern: { image: stern, code: 'stern', name: 'J. Stern' },
  reverbel: { image: reverbel, code: 'reverbel', name: 'Reverbel' },
  afonso: { image: afonso, code: 'afonso', name: 'Afonso' },
  denise: { image: denise, code: 'denise', name: 'Denise' },
  ramos: { image: ramos, code: 'ramos', name: 'J. Ramos' },
  yoshi: { image: yoshi, code: 'yoshi', name: 'Yoshi' },
  alan: { image: alan, code: 'alan', name: 'Alan' },
  coelho: { image: coelho, code: 'coelho', name: 'Coelho' },
  carlinhos: { image: carlinhos, code: 'carlinhos', name: 'Carlinhos' },
  kunio: { image: kunio, code: 'kunio', name: 'Kunio' },
  dilma: { image: dilma, code: 'dilma', name: 'Dilma' },
  gubi: { image: gubi, code: 'gubi', name: 'Gubi' },
  pinhanez: { image: pinhanez, code: 'pinhanez', name: 'Pinhanez' },
  leucio: { image: leucio, code: 'leucio', name: 'Leucio' },
  arnaldo: { image: arnaldo, code: 'arnaldo', name: 'A. Vieira' },
  cris: { image: cris, code: 'cris', name: 'Cris' },
  tito: { image: tito, code: 'tito', name: 'Tito' },
  robertocarlos: {
    image: robertoCarlos,
    code: 'robertocarlos',
    name: 'R. Carlos',
  },
  danielpanario: {
    image: danielPanario,
    code: 'danielpanario',
    name: 'D. Panario',
  },
  haeyong: { image: haeYong, code: 'haeyong', name: 'Hae Yong' },
  alair: { image: alair, code: 'alair', name: 'Alair' },
  leonidas: { image: leonidas, code: 'leonidas', name: 'Leônidas' },
  ronaldo: { image: ronaldo, code: 'ronaldo', name: 'Ronaldo' },
  celma: { image: celma, code: 'celma', name: 'Celma' },
  barrera: { image: barrera, code: 'barrera', name: 'Junior' },
  pomeranz: { image: defaultPic, code: 'pomeranz', name: 'Pomeranz' },
  gold: { image: gold, code: 'gold', name: 'Alfredo' },
  kon: { image: kon, code: 'kon', name: 'Fabio Kon' },
  endler: { image: endler, code: 'endler', name: 'M. Endler' },
  paulogeraldo: { image: defaultPic, code: 'paulogeraldo', name: 'P. Geraldo' },
  flavio: { image: flavio, code: 'flavio', name: 'Flávio' },
  acvm: { image: acvm, code: 'acvm', name: 'Ana Cristina' },
  finger: { image: finger, code: 'finger', name: 'M. Finger' },
  hernan: { image: hernan, code: 'hernan', name: 'Hernán' },
  hitoshi: { image: hitoshi, code: 'hitoshi', name: 'Hitoshi' },
  jef: { image: jef, code: 'jef', name: 'Jef' },
  marcondes: { image: marcondes, code: 'marcondes', name: 'Marcondes' },
  leliane: { image: leliane, code: 'leliane', name: 'Leliane' },
  ernesto: { image: ernesto, code: 'ernesto', name: 'Ernesto' },
  queiroz: { image: queiroz, code: 'queiroz', name: 'M. Queiroz' },
  nina: { image: nina, code: 'nina', name: 'Nina' },
  paulojose: { image: pauloJose, code: 'paulojose', name: 'P. José' },
  renata: { image: renata, code: 'renata', name: 'Renata' },
  marcel: { image: marcel, code: 'marcel', name: 'Marcel' },
  hirata: { image: hirata, code: 'hirata', name: 'Hirata' },
  mascarenhas: { image: mascarenhas, code: 'mascarenhas', name: 'Walter' },
  gerosa: { image: gerosa, code: 'gerosa', name: 'Gerosa' },
  fujita: { image: fujita, code: 'fujita', name: 'Fujita' },
  daniel: { image: daniel, code: 'daniel', name: 'Daniel' },
  paulomiranda: {
    image: pauloMiranda,
    code: 'paulomiranda',
    name: 'P. Miranda',
  },
  kelly: { image: kelly, code: 'kelly', name: 'Kelly' },
  denis: { image: denis, code: 'denis', name: 'Denis' },
  marcelk: { image: marcelK, code: 'marcelk', name: 'Marcel K.' },
  sinai: { image: sinai, code: 'sinai', name: 'Sinai' },
  fmario: { image: fmario, code: 'fmario', name: 'F. Mario' },
};
