import { AbilitiesDTO } from "./AbilitiesDTO"
import { MoveDTO } from "./MoveDTO"
import { MovesDTO } from "./MovesDTO"
import { SpritesDTO } from "./SpritesDTO"

export type PokemonDTO = {
    id: number,
    name: string,
    url: string,
    sprites: SpritesDTO,
    abilities: Array<AbilitiesDTO>,
    moves: Array<MovesDTO>



}