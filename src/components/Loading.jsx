import { Center, Box, Image } from "@chakra-ui/react"

const Loading = () => {

    return(
        <>
        <Center w="100%">
            <Box w='15%' m="20%"  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                <Image src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"/>
            </Box>
        </Center>
        </>
    )
}

export default Loading;