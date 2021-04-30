/* eslint-disable key-spacing */

/**
 * Role permissions enum
 * Shared between client and server side code base
 */
const Roles = {
    admin:     'Admin',
    user:      'User',

    // eslint-disable-next-line object-shorthand
    map: () => {
        return [
            { value: Roles.user },
            { value: Roles.admin }
        ];
    },

    isValidRole: (role) => {
        let valid = false;
        Roles.map().forEach((item) => {
            if (item.value === role) valid = true;
        });
        return valid;
    }
};

module.exports = Roles;
