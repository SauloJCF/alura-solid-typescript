class Chefe {
  public cozinharPratoPrincipal() {}
  public prepararSobremesa() {}
}

class Garcom {
  public organizarMesas() {}
  public anotarPedido() {}
  public servirBebidas() {}
}

class Faxineiro {
  public limpar() {}
}

class Restaurante {
  private chefe: Chefe = new Chefe();
  private garcom: Garcom = new Garcom();
  private faxineiro: Faxineiro = new Faxineiro();

  public iniciar() {
    this.garcom.organizarMesas();
    this.chefe.cozinharPratoPrincipal();
    this.garcom.anotarPedido();
    this.faxineiro.limpar();
    this.chefe.prepararSobremesa();
    this.garcom.servirBebidas();
  }
}
