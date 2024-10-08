import { Box, Flex, Icon, Image, Input } from '@chakra-ui/react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { DropContext } from '../contextapi/dropDownContext'
import { MenDropdown, MobileCoversDropdown, WomenDropdown } from './Dropdown'

const Navbar = () => {

    const { manMouseEnter, womenMouseEnter, mobileMouseEnter, manMouseLeave, womenMouseLeave, mobileMouseLeave } = useContext(DropContext)

    
    return(
        <>
        <Box
        border="0px solid black"
        color={"rgba(59, 56, 56, 0.9)"}
        fontSize={'11px'}
        fontFamily={'montserrat, sans-serif'}
        fontWeight={'500'}
        top="0"
        position={'sticky'}
        zIndex={'10'}
        bgColor={"white"}
        >
            <Flex
                p='6px'
                bgColor={'rgb(238,238,238)'}
                justifyContent={'space-between'}
            >
                <Flex 
                    border='0px solid black'
                    w='40%' 
                    justifyContent={'space-between'}
                >
                    <Link to='/discount-offers-sake'>Offers</Link>
                    <Link to='/fanbook-testimonial-reviews'>Fanbook</Link>
                    <Link to='/apps'>Download App</Link>
                    <Link to='/tribe'>TriBe Membership</Link>
                    <Link to='/find-a-store'>Find a store near me</Link>
                </Flex>
                <Flex
                    border='0px solid black'
                    w='15%'
                    justifyContent={'space-around'}
                >
                    <Link to='/contact-us'>Contact Us</Link>
                    <Link to='/track-order'>Track Order</Link>
                </Flex>
            </Flex>

{/*------------------------------------------------------------------------------------*/}
            <Flex p="7px" justifyContent={'space-between'} borderBottom={'1px solid lightGray'}>
                <Flex w='45%' pt='5px' border="0px solid blue" justifyContent={'space-between'}>
                    <Box w='35%' border="0px solid red">
                        <Link to='/'>
                            <Image src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"/>
                        </Link>
                    </Box>
                    <Flex w='60%' fontSize={'14px'} justifyContent={'space-between'} border="0px solid red">
                        <Link to="/men-clothing"
                        onMouseEnter={manMouseEnter}
                        onMouseLeave={manMouseLeave}
                        >
                            MEN
                        </Link>
                        <Link to="/women-clothing"
                        onMouseEnter={womenMouseEnter}
                        onMouseLeave={womenMouseLeave}
                        >
                            WOMEN
                        </Link>
                        <Link to="/mobile-covers-india"
                        onMouseEnter={mobileMouseEnter}
                        onMouseLeave={mobileMouseLeave}
                        >
                            MOBILE COVERS
                        </Link>
                    </Flex>
                </Flex>

                <Flex w='40%' border='0px solid red' fontSize={'14px'} justifyContent={'space-between'}>
                    <Box>
                        <Input
                            type="search"
                            placeholder='search by product, category or collect'
                            borderColor={'gray'}
                            w="260px"
                            h='35px'
                            fontSize={'12px'}
                            bgColor='rgb(238,238,238)'
                            _placeholder={{ color: 'gray.400' }}/>
                    </Box>
                    <Box h='20px' mt='5px' borderLeft={'1px solid black'}></Box>
                    <Flex w='30%' pt='5px' border={'0px solid gray'} justifyContent={'space-between'}>
                        <Link to='/login'>Login</Link>
                        <Link to='/favourite'>
                            <Icon as={FaHeart} boxSize={6} color="black"/>
                        </Link>
                        <Link to='/cart'>
                            <Icon as={FaShoppingCart} boxSize={5} color="black" />
                        </Link> 
                    </Flex>
                </Flex>
            </Flex>
            <MenDropdown/>
            <WomenDropdown/>
            <MobileCoversDropdown/>
            {/*-----------------------------------------------------------------------------------------*/}
            <Flex justifyContent={'space-around'} fontSize={'16px'} color='black' p='15px'>
                <Link to='/campaign/mens-home'>MEN</Link>
                <Link to='/campaign/womens-home'>WOMEN</Link>
                <Link to='/campaign/winter-wear-store'>WINTERWEAR</Link>
                <Link to='/campaign/all-accessories-home'>ACCESSORIES</Link>
                <Link to='/sneakers-for-men?manufacturer_brand=bewakoof®'>SNEAKERS</Link>
                <Link to='/ai-canvas'>BWKF X GOOGLE</Link>
            </Flex>
        </Box>
        </>
    )
}

export default Navbar;