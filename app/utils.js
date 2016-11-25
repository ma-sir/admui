MainMenuConfig =  [
    {
        title: 'Base',
        divider: true
    }, {
        title: 'Dashboard',
        url: '#/?url=app/modules/dashboard&title=dashboard',
        icon: 'zmdi zmdi-home'
    },
    {
        title: 'Form',
        icon: 'zmdi zmdi-border-all',
        submenu: [
            {title: 'Form Examples', url: '#/?url=app/modules/form&title=form examples'},
            {title: 'Form Components', url: '#/?url=app/modules/mdcomponents&title=form components'}
        ]
    },
    {
        title: 'Table',
        icon: 'zmdi zmdi-format-list-bulleted',
        url: '#/?url=app/modules/table&title=table',
    }, {
        title: 'Card Panel',
        icon: 'zmdi zmdi-collection-text',
        submenu: [
            {title: 'Panel', url: '#/?url=app/modules/panels&title=panel'},
            {title: 'Card', url: '#/?url=app/modules/card&title=card'}
        ]
    },
    {
        title: 'UI Elements',
        icon: 'zmdi zmdi-widgets',
        submenu: [
            {title: 'Buttons', url: '#/?url=app/modules/button&title=button'},
            {title: 'Dialog', url: '#/?url=app/modules/dialog&title=dialog'},
            {title: 'Tabs', url: '#/?url=app/modules/tabs&title=tabs'},
            {title: 'Progress', url: '#/?url=app/modules/progress&title=progress'},
            {title: 'Notification & Toast', url: '#/?url=app/modules/toast&title=notification toast'},
            {title: 'Bootstrap Grid', url: '#/?url=app/modules/grid&title=layout grid'},
            {title: 'Box & Shadow', url: '#/?url=app/modules/box&title=box shadow'},
            {title: 'Menu', url: '#/?url=app/modules/menu&title=context menu'},
            {title: 'Bootstrap Components', url: '#/?url=app/modules/bscomponents&title=bs components'}

        ]
    },
    {
        title: 'Icons',
        icon: 'zmdi zmdi-flower-alt',
        submenu: [
            {title: 'BS Glyphicon', url: '#/?url=app%2Fmodules%2Ficons3&title=Glyphicon'},
            {
                title: 'Google Material Design',
                url: '#/?url=app%2Fmodules%2Ficons&title=Google Material Design'
            },
            {
                title: 'Material Design Iconic',
                url: '#/?url=app%2Fmodules%2Ficons2&title=Material Design Iconic'
            }
        ]
    },
    {
        title: 'Typography',
        divider: true
    }, {
        title: 'Theme',
        icon: 'zmdi zmdi-eye',
        url: '#/?url=app/modules/themes&theme=yellow&title=themes'
    }, {
        title: 'Helper classes',
        icon: 'zmdi zmdi-star-outline',
        url: '#/?url=app%2Fmodules%2Fclass&theme=orange&title=helper classes'
    },
    {
        title: 'Material Colors',
        icon: 'zmdi zmdi-invert-colors',
        url: '#/?url=app/modules/colors&theme=purple&title=colors'
    }
    , {
        title: 'Typography',
        icon: 'zmdi zmdi-brush',
        url: '#/?url=app/modules/typography&theme=teal&title=typography'
    }, {
        title: 'Extras',
        divider: true
    },
    {
        title: 'Extras',
        icon: 'zmdi zmdi-apps',
        submenu: [
            {title: 'Inbox', url: '#/?url=app/modules/inbox&theme=green&title=inbox'},
            {title: 'Gallery', url: '#/?url=app/modules/gallery&theme=pink&title=gallery'},
            {title: 'Profile', url: '#/?url=app/modules/profile&theme=red&title=profile'},
            {title: 'Blank Template', url: '#/?url=app/modules/blank&theme=bluegrey&title=blank template'}
        ]
    },
    {
        title: 'Pages',
        icon: 'zmdi zmdi-collection-item',
        submenu: [
            {title: 'Login', url: 'login.html'},
            {title: 'Err 404', url: '404.html'},
            {title: 'Err 500', url: '500.html'},
            {title: 'Lockscreen', url: 'lockscreen.html'}
        ]
    },
    {
        title: 'Menu Level',
        icon: 'zmdi zmdi-menu',
        submenu: [{
            title: 'Level  A....',
            icon: '',
            submenu: [
                {title: 'Level A1 ....', url: '/#'},
                {title: 'Level A2 ....', url: '/#'},
                {title: 'Level A3 ....', url: '/#'},
            ]
        }, {
            icon: '',
            title: 'Level B....'
        }, {
            title: 'Level C....',
            icon: '',
            submenu: [
                {title: 'Level C1 ....', url: '/#'},
                {title: 'Level C2 ....', url: '/#'},
                {title: 'Level C3 ....', url: '/#'},
            ]
        }]
    }
    //,
    //{
    //    title: 'About ＆ Buy',
    //    icon: 'zmdi zmdi-info-outline',
    //    url: '#/?url=app/modules/about&title=about',
    //}
];

TabManager = {
    SELECTEDINDEX: 0,
    MAXTABSIZE: 20,
    TABS: [],
    addTab: function (path, title, icon, hash, theme) {
        if (!title || !path)return;
        var key = md5(path + title);
        var hasTab = this.hasTab(key);
        if (hasTab == -1) {
            var size = this.TABS.length;
            if (size > this.MAXTABSIZE) {
                return -9;
            }
            this.TABS.push({key: key, title: title, path: path, hash: hash, icon: icon, theme: theme});
        } else if (hasTab != -1 && hasTab != this.SELECTEDINDEX) {
            this.SELECTEDINDEX = hasTab;
            return hasTab;
        }
    },
    hasTab: function (key) {
        var foundIdx = -1;
        for (var i = 0; i < this.TABS.length; i++) {
            if (this.TABS[i].key == key) {
                foundIdx = i;
                break;
            }
        }
        return foundIdx;
    },
    removeTab: function (tab) {
        var index = this.TABS.indexOf(tab);
        this.TABS.splice(index, 1);
        window.location.href = "#";
    },
    removeOtherTab: function (tab) {
        this.TABS = [tab];
        window.location.href = "#";
    },
    removeAllTab: function () {
        this.TABS = [];
        window.location.href = "#";
    }
};

