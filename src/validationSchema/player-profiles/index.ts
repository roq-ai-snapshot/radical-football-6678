import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  skill_level: yup.number().integer().required(),
  position: yup.string().required(),
  player_id: yup.string().nullable().required(),
});
