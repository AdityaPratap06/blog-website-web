export const ITEMS = [
    {
        label: 'Home',
        href: "/"
    },
    {
        label: 'Destination',
        children: [
            {
                label: 'NORTH INDIA',
                href: '#NORTH-INDIA',
                children: [
                    {
                        label: 'Jammu & Kashmir',
                        href: '#Jammu & Kashmir',
                    },
                    {
                        label: 'Himachal Pradesh',
                        href: '#Himachal Pradesh',
                    },
                    {
                        label: 'Punjab',
                        href: '#Punjab',
                    },
                    {
                        label: 'Uttarakhand',
                        href: '#Uttarakhand',
                    },
                    {
                        label: 'Haryana',
                        href: '#Haryana',
                    },
                    {
                        label: 'Delhi',
                        href: '#Delhi',
                    },
                    {
                        label: 'Rajasthan',
                        href: '#Rajasthan',
                    },
                    {
                        label: 'Uttar Pradesh',
                        href: '#Uttar-Pradesh',
                    },
                ]
            },
            {
                label: 'SOUTH INDIA',
                href: '#SOUTH-INDIA',
                children: [
                    {
                        label: 'Andhra Pradesh',
                        href: '#Andhra Pradesh',
                    },
                    {
                        label: 'Karnataka',
                        href: '#Karnataka',
                    },
                    {
                        label: 'Kerala',
                        href: '#Kerala',
                    },
                    {
                        label: 'Tamil Nadu',
                        href: '#Tamil Nadu',
                    },
                    {
                        label: 'Telangana',
                        href: '#Telangana',
                    },
                ]
            },
            {
                label: 'EAST INDIA',
                href: '#EAST-INDIA',
                children: [
                    {
                        label: 'Bihar',
                        href: '#Bihar',
                    },
                    {
                        label: 'Jharkhand',
                        href: '#Jharkhand',
                    },
                    {
                        label: 'Odisha',
                        href: '#Odisha',
                    },
                    {
                        label: 'West Bengal',
                        href: '#West-Bengal',
                    },
                ]
            },
            {
                label: 'WEST INDIA',
                href: '#WEST-INDIA',
                children: [
                    {
                        label: 'Maharastra',
                        href: '#Maharastra',
                    },
                    {
                        label: 'Goa',
                        href: '#Goa',
                    },
                    {
                        label: 'Gujarat',
                        href: '#Gujarat',
                    },
                ]
            },
        ]
    },
    {
        label: "Categories",
        children: [
            {
                label: 'Adventure',
                href: '#Adventure',
                children: [
                    {
                        label: 'Trekking',
                        href: '#Trekking',
                    },
                    {
                        label: 'Camping',
                        href: '#Camping',
                    },
                    {
                        label: 'Rafting',
                        href: '#Rafting',
                    },
                    {
                        label: 'Bunjee Jumping',
                        href: '#Bunjee Jumping',
                    },
                ]
            },
            {
                label: 'Cultural',
                href: '#Cultural',
                children: [
                    {
                        label: 'Heritage Site',
                        href: '#Heritage Site',
                    },
                    {
                        label: 'Festivals',
                        href: '#Festivals',
                    },
                    {
                        label: 'Temples',
                        href: '#Temples',
                    },
                    {
                        label: 'Food & Cuisine',
                        href: '#Food & Cuisine',
                    },
                    {
                        label: 'Art & Crafts',
                        href: '#Art & Crafts',
                    },
                ]
            },
            {
                label: 'Relexation',
                href: '#Relexation',
                children: [
                    {
                        label: 'Beaches',
                        href: '#Beaches',
                    },
                    {
                        label: 'Hill Stations',
                        href: '#Hill Stations',
                    },
                    {
                        label: 'Wildlife Santuries',
                        href: '#Wildlife Santuries',
                    },
                ]
            },
        ]
    },
    {
        label: 'Blog',
        children: [
            {
                label: 'Travel Guide',
                href: '#Travel Guide',
            },
            {
                label: 'Itineries',
                href: '#Itineries',
            },
            {
                label: 'Personal Experience',
                href: '#Personal Experience',
            },
        ]
    },
    {
        label: 'Contact Us',
        href: '#Contact Us',
    },
]

export const STATUS = {
    NOT_STARTED: "NOT_STARTED",
    FETCHING: "FETCHING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    INVALID: "INVALID",
};