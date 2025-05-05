import { Inngest } from 'inngest';

// Initialize the Inngest client
export const inngest = new Inngest({ id: 'nextgadget-app', name: 'NextGadget' });

// Define your Inngest functions
export const syncUserCreation = inngest.createFunction(
  { name: 'Sync User Creation' },
  { event: 'user/created' },
  async ({ event, step }) => {
    // Your user creation sync logic here
  }
);

export const syncUserUpdation = inngest.createFunction(
  { name: 'Sync User Update' },
  { event: 'user/updated' },
  async ({ event, step }) => {
    // Your user update sync logic here
  }
);

export const syncUserDeletion = inngest.createFunction(
  { name: 'Sync User Deletion' },
  { event: 'user/deleted' },
  async ({ event, step }) => {
    // Your user deletion sync logic here
  }
);
