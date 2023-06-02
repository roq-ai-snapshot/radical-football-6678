import { PlayerInterface } from 'interfaces/player';

export interface PlayerProfileInterface {
  id?: string;
  player_id: string;
  skill_level: number;
  position: string;

  player?: PlayerInterface;
  _count?: {};
}
