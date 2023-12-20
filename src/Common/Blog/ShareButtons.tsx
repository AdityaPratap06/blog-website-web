import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { LiaFacebookF, LiaLinkedinIn, LiaWhatsapp } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";

export const ShareButtons = ({ title, link }: any) => {
    const blogUrl = "https://blog-website-web.vercel.app/";

    const handleFbShare = () => {
        const url = encodeURIComponent(`${blogUrl}${link}`);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    const handleWhatsAppShare = () => {
        const message = encodeURIComponent(`Check out this post: ${title} - ${blogUrl}${link}`);
        window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
    };

    const handleLinkedInShare = () => {
        const message = encodeURIComponent(`Check out this post: ${title} - ${blogUrl}${link}`);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://example.com/post/${link}&title=${message}`, '_blank');
    };

    const handleMailShare = () => {
        const subject = encodeURIComponent(`Check out this post: ${title}`);
        const body = encodeURIComponent(`Hi,\n\nI found this interesting post and wanted to share it with you:\n${title}\n${blogUrl}${link}`);
        window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    };
    return (
        <Grid mt={3} templateColumns='repeat(5, 1fr)' gap={2} color="white">
            <GridItem w='100%' py={2} px={7} bg='blue.700' onClick={handleFbShare}><LiaFacebookF /></GridItem>
            <GridItem w='100%' py={2} px={7} bg='green.400' onClick={handleWhatsAppShare}><LiaWhatsapp /></GridItem>
            <GridItem w='100%' py={2} px={7} bg='blue.600' onClick={handleLinkedInShare}><LiaLinkedinIn /></GridItem>
            <GridItem w='100%' py={2} px={7} bg='gray.500' onClick={handleMailShare}><AiOutlineMail /></GridItem>
        </Grid>
    )
}