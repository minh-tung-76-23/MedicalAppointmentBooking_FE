export const adminMenu = [
    {
        //quản lý người dùng
        name: "menu.system.system-administrator.user-manage",
        menus: [
            {
                name: "menu.system.user-manage.manage-user",
                link: "/system/user-manage",
            },
            {
                name: "menu.system.user-manage.manage-doctor",
                link: "/system/doctor-manage",
            },
            {
                name: "menu.system.user-manage.manage-admin",
                link: "/system/admin-manage",
            },
            {
                name: "menu.system.user-manage.crud-user",
                link: "/system/user-crud",
            },
            {
                name: "menu.system.user-manage.crud-redux",
                link: "/system/user-redux",
            },
        ],
    },
    {
        //quản lý phòng khám
        name: "menu.system.system-administrator.clinic-manage",
        menus: [
            {
                name: "menu.system.clinic-manage.manage-clinic",
                link: "/system/clinic-manage",
            },
        ],
    },
    {
        //quản lý Chuyên khoa
        name: "menu.system.system-administrator.specialty-manage",
        menus: [
            {
                name: "menu.system.specialty-manage.manage-specialty",
                link: "/system/specialty-manage",
            },
        ],
    },
    {
        //quản lý cẩm nang
        name: "menu.system.system-administrator.handbook-manage",
        menus: [
            {
                name: "menu.system.handbook-manage.manage-handbook",
                link: "/system/handbook-manage",
            },
        ],
    },
];
