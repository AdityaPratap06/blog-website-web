import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { LiaFacebookF, LiaLinkedinIn, LiaWhatsapp } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";

export const ShareButtons = ({ title, link }: any) => {
    const blogUrl = "https://blog-website-web.vercel.app/"
    const handleFbShare = () => {
        const url = encodeURIComponent(`${blogUrl}${link}`);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    const handleWhatsAppShare = () => {
        // Encode the message and URL you want to share
        const message = encodeURIComponent(`Check out this post: ${title} - ${blogUrl}${link}`);

        // Open WhatsApp with the shared message
        window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
    };

    return (
        <Grid mt={3} templateColumns='repeat(5, 1fr)' gap={2} color="white">
            <GridItem w='100%' py={2} px={7} bg='blue.700' onClick={handleFbShare}><LiaFacebookF /></GridItem>
            <GridItem w='100%' py={2} px={7} bg='green.400' onClick={handleWhatsAppShare}><LiaWhatsapp /></GridItem>
            <GridItem w='100%' py={2} px={7} bg='blue.600'><LiaLinkedinIn /></GridItem>
            <GridItem w='100%' py={2} px={7} bg='gray.500'><AiOutlineMail /></GridItem>
        </Grid>
    )
}