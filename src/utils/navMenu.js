export const MENUITEMS = [
    {
        title: 'About us',
        path: '/page/about-us',
        type: 'link'
    },
    {
        title: 'Memberships',
        path: '/page/memberships',
        type: 'link'
    },
    {
        title: 'The Workout',
        path: '/page/workout',
        type: 'link'
    },
    {
        title: 'Offers',
        path: '/page/offers',
        type: 'link'
    },
    {
        title: 'Locations', type: 'sub', children: [
            { path: '/page/location1', title: 'Location1', type: 'link' },
            { path: '/page/location2', title: 'Location2', type: 'link' },
            { path: '/page/location3', title: 'Location3', type: 'link', },
            { path: '/page/location4', title: 'Location4', type: 'link' },
            { path: '/page/location5', title: 'Location5', type: 'link' }
        ],
    },
    {
        title: 'Support',
        path: '/page/faq',
        type: 'link'
    },
]
