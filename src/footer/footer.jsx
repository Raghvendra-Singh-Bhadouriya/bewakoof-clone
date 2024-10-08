import { Box, Heading, Text,Image, Flex, Icon, Input, Button } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaSnapchat, FaApple } from 'react-icons/fa';
import { useState } from 'react'

const Footer = () => {
    const [isLoading, setIsLoading] = useState(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
 

    return(
        <>
        {!isLoading && 
        <Box>
            <Box>
                <Image src={"https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"}/>
            </Box>

            <Box border='1px solid rgb(24,24,24)' bgColor={'rgb(24,24,24)'} pt="8%">
                <Box m="2%" >
                    <Heading color="rgb(253,216,53)" fontSize={'25px'}>Bewakoof®</Heading>

                    <Box fontFamily={'sans-serif'} mt='2%'>
                        <Flex >
                            <Box w='25%'>
                                <Text color="rgb(245,204,35)" fontSize={'13px'} >CUSTOMER SERVICE</Text>
                                <Box mt='5%' color="white" fontSize={'12px'} lineHeight={'20px'}>
                                    <Text cursor={'pointer'}>Contact Us</Text>
                                    <Text cursor={'pointer'}> Track Order</Text>
                                    <Text cursor={'pointer'}>Return Order</Text>
                                    <Text cursor={'pointer'}>Cancle Order</Text>
                                </Box>

                                <Box mt="20%" color="white" fontSize={'13px'}>
                                    <Text cursor={'pointer'}>15 days return policy*</Text>
                                    <Text mt="6%" cursor={'pointer'}>Cash on delivery</Text>
                                </Box>
                            </Box>
                         {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <Box w='25%'>
                                <Text color="rgb(245,204,35)" fontSize={'13px'}>COMPANY</Text>
                                <Box mt='5%' color="white" fontSize={'12px'} lineHeight={'20px'}>
                                    <Text cursor={'pointer'}>About Us</Text>
                                    <Text cursor={'pointer'}>We're Hiring</Text>
                                    <Text cursor={'pointer'}>Terms & Conditions</Text>
                                    <Text cursor={'pointer'}>Privacy Policy</Text>
                                    <Text cursor={'pointer'}>Blog</Text>
                                </Box>

                                <Box mt="12%">
                                    <Text cursor={'pointer'} color="rgb(245,204,35)" fontSize={'12px'}>DOWNLOAD THE APP</Text>
                                    <Flex w="90%" mt='6%' justifyContent={"space-between"}>
                                        <a
                                        href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en&pli=1"
                                        >
                                            <Image w='95%' src="https://images.bewakoof.com/web/app_android_v1.png"/>
                                        </a>
                                        <a
                                        href="https://apps.apple.com/in/app/bewakoof-fashion-shopping-app/id1100190514"
                                        >
                                            <Image w='95%' src="https://images.bewakoof.com/web/app_ios_v1.png"/>
                                        </a>
                                    </Flex>
                                    
                                </Box>
                            </Box>
                         {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <Box w='25%'>
                                <Text color="rgb(245,204,35)" fontSize={'13px'}>CONTACT WITH US</Text>
                                <Box mt='5%' color="white" fontSize={'12px'} lineHeight={'30px'}>
                                    <Text cursor={'pointer'}>
                                        <Icon as={FaFacebook} boxSize={4} color="rgb(226,226,226)"/>
                                        {" "}
                                        4.7M People Like This
                                    </Text>
                                    <Text cursor={'pointer'}>
                                        <Icon as={FaInstagram} boxSize={4} color="rgb(226,226,226)"/>
                                        {" "}
                                        1M Followers
                                    </Text>
                                    <Flex w='50%' justifyContent={'space-between'}>
                                        <Icon as={FaTwitter} boxSize={4} color="rgb(226,226,226)"/>
                                        <Icon as={FaPinterest} boxSize={4} color="rgb(226,226,226)"/>
                                        <Icon as={FaSnapchat} boxSize={4} color="rgb(226,226,226)"/>
                                        <Icon as={FaApple} boxSize={4} color="rgb(226,226,226)"/>
                                    </Flex>
                                </Box>
                                <Box mt="20%">
                                    <Text cursor={'pointer'} color="rgb(245,204,35)" fontSize={'12px'}>100% SECURE PAYMENT</Text>
                                    <Box mt='6%'>
                                        <Image src="https://images.bewakoof.com/web/secure-payments-image.png"/>
                                    </Box>
                                </Box>
                            </Box>
                         {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <Box w='25%'>
                                <Text color="rgb(245,204,35)" fontSize={'13px'}>KEEP UP TO DATE</Text>
                                <Flex mt='6%'>
                                    <Input
                                    type="text"
                                    placeholder="Enter Email Id"
                                    w="60%"
                                    h='35px'
                                    color="rgb(67,74,74)"
                                    _placeholder={{fontSize:'14px'}}
                                    borderRadius={"none"}
                                    border="1px solid rgb(24,24,24)"
                                    borderBottom={'2px solid rgb(253,216,53)'}
                                    _focus={{
                                        outline: 'none',
                                        boxShadow: 'none',
                                        border:"1px solid rgb(24,24,24)",
                                        borderBottom: '2px solid rgb(253,216,53)'
                                      }}
                                    />
                                    <Button
                                    bgColor="rgb(253,216,53)"
                                    borderRadius={"none"}
                                    h='35px'
                                    fontWeight={'100'}
                                    fontSize="14px"
                                    >SUBSCRIBE</Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
        }
        </>
    )
}

export default Footer;