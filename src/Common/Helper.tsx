import { createStandaloneToast } from "@chakra-ui/react";

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
                        href: '/?destination=jammu-kashmir',
                    },
                    {
                        label: 'Himachal Pradesh',
                        href: '/?destination=himachal-pradesh',
                    },
                    {
                        label: 'Punjab',
                        href: '/?destination=punjab',
                    },
                    {
                        label: 'Uttarakhand',
                        href: '/?destination=uttarakhand',
                    },
                    {
                        label: 'Haryana',
                        href: '/?destination=haryana',
                    },
                    {
                        label: 'Delhi',
                        href: '/?destination=delhi',
                    },
                    {
                        label: 'Rajasthan',
                        href: '/?destination=rajasthan',
                    },
                    {
                        label: 'Uttar Pradesh',
                        href: '/?destination=uttar-pradesh',
                    },
                ]
            },
            {
                label: 'SOUTH INDIA',
                href: '#SOUTH-INDIA',
                children: [
                    {
                        label: 'Andhra Pradesh',
                        href: '/?destination=andhra-pradesh',
                    },
                    {
                        label: 'Karnataka',
                        href: '/?destination=karnataka',
                    },
                    {
                        label: 'Kerala',
                        href: '/?destination=kerala',
                    },
                    {
                        label: 'Tamil Nadu',
                        href: '/?destination=tamil-nadu',
                    },
                    {
                        label: 'Telangana',
                        href: '/?destination=telangana',
                    },
                ]
            },
            {
                label: 'EAST INDIA',
                href: '#EAST-INDIA',
                children: [
                    {
                        label: 'Bihar',
                        href: '/?destination=bihar',
                    },
                    {
                        label: 'Jharkhand',
                        href: '/?destination=jharkhand',
                    },
                    {
                        label: 'Odisha',
                        href: '/?destination=odisha',
                    },
                    {
                        label: 'West Bengal',
                        href: '/?destination=west-bengal',
                    },
                ]
            },
            {
                label: 'WEST INDIA',
                href: '#WEST-INDIA',
                children: [
                    {
                        label: 'Maharastra',
                        href: '/?destination=maharastra',
                    },
                    {
                        label: 'Goa',
                        href: '/?destination=goa',
                    },
                    {
                        label: 'Gujarat',
                        href: '/?destination=gujarat',
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
                        href: '/?category=trekking',
                    },
                    {
                        label: 'Camping',
                        href: '/?category=camping',
                    },
                    {
                        label: 'Rafting',
                        href: '/?category=rafting',
                    },
                    {
                        label: 'Bunjee Jumping',
                        href: '/?category=bunjee-jumping',
                    },
                ]
            },
            {
                label: 'Cultural',
                href: '#Cultural',
                children: [
                    {
                        label: 'Heritage Site',
                        href: '/?category=heritage-site',
                    },
                    {
                        label: 'Festivals',
                        href: '/?category=festivals',
                    },
                    {
                        label: 'Temples',
                        href: '/?category=temples',
                    },
                    {
                        label: 'Food & Cuisine',
                        href: '/?category=food-cuisine',
                    },
                    {
                        label: 'Art & Crafts',
                        href: '/?category=art-crafts',
                    },
                ]
            },
            {
                label: 'Relexation',
                href: '#Relexation',
                children: [
                    {
                        label: 'Beaches',
                        href: '/?category=beaches',
                    },
                    {
                        label: 'Hill Stations',
                        href: '/?category=hill-stations',
                    },
                    {
                        label: 'Wildlife Santuries',
                        href: '/?category=wildlife-santuries',
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
        label: 'About Us',
        href: '/about-us',
    },
    {
        label: 'Contact Us',
        href: '/contact-us',
    },
]

export const STATUS = {
    NOT_STARTED: "NOT_STARTED",
    FETCHING: "FETCHING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    INVALID: "INVALID",
};
const { toast } = createStandaloneToast();

export function SuccessAlert(message = "") {
    toast({
        title: "SUCCESS",
        description: message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
    });
}

export function ErrorAlert(message = "") {
    toast({
        title: "FAILED",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
    });
}