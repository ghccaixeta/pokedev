import { AbilitiesDTO } from "./AbilitiesDTO"
import { SpritesDTO } from "./SpritesDTO"

export type PokemonDTO = {
    id: number,
    name: string,
    url: string,
    sprites: SpritesDTO,
    abilities: Array<AbilitiesDTO>,
    moves: Array<string>[]



}