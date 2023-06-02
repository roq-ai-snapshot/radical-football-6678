import { TeamInterface } from 'interfaces/team';

export interface EventInterface {
  id?: string;
  team_id: string;
  event_type: string;
  event_date: Date;
  location: string;

  team?: TeamInterface;
  _count?: {};
}
