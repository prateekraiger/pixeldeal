import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from '@/Config/inngest';

import { serve } from 'inngest/next';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
