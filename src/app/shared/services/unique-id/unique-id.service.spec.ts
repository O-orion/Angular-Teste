import { UniqueIdService } from './unique-id.service';
//arquivo de teste, po padrão o angular utiliza o framework de teste jasmine
describe(UniqueIdService.name, () => {
  //tudo que eu quero testar
  //sugestão do jasmine blablabla should blabla when blablabla, alguma coisa deve fazer algo quando determinada condição estiver presente
  it(` ${UniqueIdService.prototype.generateUniqueIdWidthPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWidthPrefix('app');

    //qual a minha expectativa ? // antigo expect(id).toContain('app-')
    expect(id.startsWith('app-')).toBeTrue() //espero que esse Id que foi gerado contenha 'app-'
    //startsWith -> me retorna um boolean, sua pergunta é: essa string como com, dai ele compara com o parametro que passarmos.
  })// minha condição de teste

  //Karma é utilizado para roda o nosso teste, já vem no Angular assim como Jasmine
})
