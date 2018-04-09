export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaVazio: string = '/assets/coracao_vazio.png'
    ) { }

    public exibeCoracao(): string {
        if (this.cheio) {
            return this.urlCoracaCheio;
        } else {
            return this.urlCoracaVazio;
        }
    }
}