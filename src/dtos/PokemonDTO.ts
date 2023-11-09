import { AbilityDTO } from "./AbilityDTO"
import { SpritesDTO } from "./SpritesDTO"

export type PokemonDTO = {
    id: number,
    name: string,
    url: string,
    sprites: SpritesDTO,
    abilities: AbilityDTO,
    moves: Array<string>[]



}