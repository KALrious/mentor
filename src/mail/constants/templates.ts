import { EmailType } from '../interface/email-types';

export const TEMPLATE_IDS = {
  [EmailType.WELCOME]: {
    id: 'd-d7ef317752834c9cb818087882367244',
    subject: 'Bienvenue',
  },
  [EmailType.COURSE]: {
    id: 'd-d2d2a9777d014aa59d9d0cf51938be77',
    subject: 'Vous avez un nouveau cours',
  },
  [EmailType.PAYMENT]: {
    id: 'd-ca85fb9ebe5548469851bc49b4bd0258',
    subject: 'Vous avez réalisé un Paiement',
  },
};
