import type { Core } from '@strapi/strapi';

export default {
  /**
   * Runs before your application starts.
   */
  register({}: { strapi: Core.Strapi }) {},

  /**
   * Runs after your application starts — good for auto admin creation.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const adminEmail = process.env.STRAPI_ADMIN_EMAIL;
    const adminPassword = process.env.STRAPI_ADMIN_PASSWORD;
    const firstName = process.env.STRAPI_ADMIN_FIRSTNAME;
    const lastName = process.env.STRAPI_ADMIN_LASTNAME;

    if (!adminEmail || !adminPassword) {
      strapi.log.warn('⚠️ Auto-admin creation skipped: missing STRAPI_ADMIN_* env vars');
      return;
    }

    // Check if admin user already exists
    const existingAdmin = await strapi.db.query('admin::user').findOne({
      where: { email: adminEmail },
    });

    if (!existingAdmin) {
      await strapi.service('admin::user').create({
        data: {
          email: adminEmail,
          password: adminPassword,
          firstname: firstName || 'Admin',
          lastname: lastName || '',
          isActive: true,
          roles: ['Super Admin'],
        },
      });

      strapi.log.info('✨ Auto-created admin user successfully!');
    } else {
      strapi.log.info(`Admin user '${adminEmail}' already exists — skipping creation.`);
    }
  },
};

