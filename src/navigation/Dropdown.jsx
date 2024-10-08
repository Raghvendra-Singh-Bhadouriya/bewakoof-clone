import { Box, Heading, Text, Flex, Stack, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { DropContext } from '../contextapi/dropDownContext'

const MenDropdown = () => {

    const { manHovered } = useContext(DropContext)

    return(
        <>
        {manHovered && 
        <Box bgColor="white" w="100%" position={'absolute'}
        borderRadius="md"
        boxShadow="md"
        zIndex="1000"
        >
        <Flex color="rgb(167,127,131)">
            <Flex w="50%" m='5%' fontSize={'sm'} justifyContent={'space-between'}>
                <Box cursor={'pointer'} >
                    <Stack spacing={2}>
                        <Heading fontSize={'sm'} color="black">Topwear</Heading>
                        <Text>T-Shirts</Text>
                        <Text>Printed T-Shirts</Text>
                        <Text>Oversized T-shirts</Text>
                        <Text>Classic Fit T-shirts</Text>
                        <Text>Plain T-Shirts</Text>
                        <Text>Half Sleeve T-Shirts</Text>
                        <Text>Polo T-Shirts</Text>
                        <Text>Vests</Text>
                        <Text>Shirts</Text>
                        <Text>Co-ord Sets</Text>
                        <Text>Full Sleeve T-Shirts</Text>
                        <Text>Plus Size Topwear</Text>
                        <Text>Customize T-shirts</Text>
                        <Text>Sweatshirts</Text>
                        <Text>Hoodies</Text>
                        <Text>Sweatshirts & Hoodies</Text>
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={3}>
                        <Heading fontSize={'sm'} color="black">Bottomwear</Heading>
                        <Text>Joggers</Text>
                        <Text>Jeans</Text>
                        <Text>Baggy Jeans</Text>
                        <Text>Pajamas</Text>
                        <Text>Cargos</Text>
                        <Text>Cargo Pants</Text>
                        <Text>Trousers & Pants</Text>
                        <Text>Parachute Pants</Text>
                        <Text>Co-ord Sets</Text>
                        <Text>Shorts</Text>
                        <Text>Boxers</Text>
                        <Text>Combos</Text>
                        <Text>Plus Size Bottomwear</Text>
                        <Text>All Bottomwear</Text>
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={3}>
                        <Heading fontSize={'sm'} color="black">Winterwear</Heading>
                        <Text>Sweatshirts</Text>
                        <Text>Hoodies</Text>
                        <Text>Sweatshirts & Hoodies</Text>
                        <Text>Sweaters</Text>
                        <Text>Jackets</Text>
                        <Text>Joggers</Text>
                        <Text>Plus Size</Text>
                        <Heading mt='10%' fontSize={'sm'} color="black">Top Sellers</Heading>
                        <Text>Top 70 T-Shirts</Text>
                        <Text>Top 10 Cargos</Text>
                        <Text>Top 10 Jeans</Text>
                        <Text>Top 20 Joggers</Text>
                        <Text>Top 10 Shirts</Text>
                    </Stack>
                </Box>
            </Flex>
            <Box
                mt="5%"
                height="500px"
                width="1px"
                bg="rgb(167,127,131)"
                mx="20px"
            />
            <Box m="5%" w="12%" fontSize={'sm'}>
                <Stack spacing={3}>
                    <Heading fontSize={'sm'}>SPECIALS</Heading>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-Winterwear-1726121835.png"/>
                        <Text w='55%'>Early Winter Favorites</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--8--1721396461.png"/>
                        <Text w='55%'>Bewakoof Special Deadpool & Wolverine</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-sneaker-1718779684.png"/>
                        <Text w='55%'>Bewakoof Sneakers</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-googleai-1718944672.png"/>
                        <Text w='55%'>Customise with Google Ai</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-AIR-1715355117.png"/>
                        <Text w='55%'>Bewakoof Air: New Summer Drip</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-One-Piece-1710143641.png"/>
                        <Text w='55%'>Bwkf X One piece</Text>
                    </Flex>
                    	
                </Stack>
            </Box>
        </Flex>
        </Box>
        }
        </>
    )
}

//========================== Womens Drop Down ============================//
const WomenDropdown = () => {

    const { womenHovered } = useContext(DropContext)

    return(
        <>
        {womenHovered && 
        <Box bgColor="white" w="100%" m='auto' position={'absolute'}
        borderRadius="md"
        boxShadow="md"
        >
        <Flex color="rgb(167,127,131)">
            <Flex w="50%" m='5%' fontSize={'sm'} justifyContent={'space-between'}>
                <Box cursor={'pointer'} >
                    <Stack spacing={2}>
                        <Heading fontSize={'sm'} color="black">Topwear</Heading>
                        <Text>T-Shirts</Text>
                        <Text>Printed T-Shirts</Text>
                        <Text>Oversized T-shirts</Text>
                        <Text>Classic Fit T-shirts</Text>
                        <Text>Plain T-Shirts</Text>
                        <Text>Half Sleeve T-Shirts</Text>
                        <Text>Polo T-Shirts</Text>
                        <Text>Vests</Text>
                        <Text>Shirts</Text>
                        <Text>Co-ord Sets</Text>
                        <Text>Full Sleeve T-Shirts</Text>
                        <Text>Plus Size Topwear</Text>
                        <Text>Customize T-shirts</Text>
                        <Text>Sweatshirts</Text>
                        <Text>Hoodies</Text>
                        <Text>Sweatshirts & Hoodies</Text>
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={3}>
                        <Heading fontSize={'sm'} color="black">Bottomwear</Heading>
                        <Text>Joggers</Text>
                        <Text>Jeans</Text>
                        <Text>Baggy Jeans</Text>
                        <Text>Pajamas</Text>
                        <Text>Cargos</Text>
                        <Text>Cargo Pants</Text>
                        <Text>Trousers & Pants</Text>
                        <Text>Parachute Pants</Text>
                        <Text>Co-ord Sets</Text>
                        <Text>Shorts</Text>
                        <Text>Boxers</Text>
                        <Text>Combos</Text>
                        <Text>Plus Size Bottomwear</Text>
                        <Text>All Bottomwear</Text>
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={3}>
                        <Heading fontSize={'sm'} color="black">Winterwear</Heading>
                        <Text>Sweatshirts</Text>
                        <Text>Hoodies</Text>
                        <Text>Sweatshirts & Hoodies</Text>
                        <Text>Sweaters</Text>
                        <Text>Jackets</Text>
                        <Text>Joggers</Text>
                        <Text>Plus Size</Text>
                        <Heading mt='10%' fontSize={'sm'} color="black">Top Sellers</Heading>
                        <Text>Top 70 T-Shirts</Text>
                        <Text>Top 10 Cargos</Text>
                        <Text>Top 10 Jeans</Text>
                        <Text>Top 20 Joggers</Text>
                        <Text>Top 10 Shirts</Text>
                    </Stack>
                </Box>
            </Flex>
            <Box
                mt="5%"
                height="500px"
                width="1px"
                bg="rgb(167,127,131)"
                mx="20px"
            />
            <Box m="5%" w="12%" fontSize={'sm'}>
                <Stack spacing={3}>
                    <Heading fontSize={'sm'}>SPECIALS</Heading>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-Winterwear-1726121835.png"/>
                        <Text w='55%'>Early Winter Favorites</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--8--1721396461.png"/>
                        <Text w='55%'>Bewakoof Special Deadpool & Wolverine</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-sneaker-1718779684.png"/>
                        <Text w='55%'>Bewakoof Sneakers</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-googleai-1718944672.png"/>
                        <Text w='55%'>Customise with Google Ai</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-AIR-1715355117.png"/>
                        <Text w='55%'>Bewakoof Air: New Summer Drip</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Image  mt="0%" w='35%' h='40px' src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-One-Piece-1710143641.png"/>
                        <Text w='55%'>Bwkf X One piece</Text>
                    </Flex>
                    	
                </Stack>
            </Box>
        </Flex>
        </Box>
        }
        </>
    )
}

//========================== Mobiles Drop Down ============================//
const MobileCoversDropdown = () => {

    const { mobileHovered } = useContext(DropContext)

    return(
        <>
        {mobileHovered && 
        <Box bgColor="white" w="100%" m='auto' position={'absolute'}
        borderRadius="md"
        boxShadow="md"
        >
        <Flex color="rgb(167,127,131)">
            <Box m='5%' fontSize={'sm'}>
                <Flex w="100%" justifyContent={'space-between'}>
                <Box cursor={'pointer'} >
                    <Stack spacing={2}>
                        <Heading fontSize={'sm'} color="black">Nothing</Heading>
                        <Text>Nothing Phone 1</Text>
                        <Text>Nothing Phone 2</Text>  
                    </Stack>
                </Box>
                <Box w="25%">
                    <Stack spacing={3}>
                        <Heading fontSize={'sm'} color="black">Xiaomi</Heading>
                        <Text>Xiaomi Redmi Note 12 Pro Plus 5G</Text>
                        <Text>Xiaomi Redmi Note 10 Pro 5G</Text>
                        <Text>Xiaomi Redmi Note 12 5G</Text>
                    </Stack>
                </Box>
                <Box>
                    <Stack spacing={3}>
                        <Heading fontSize={'sm'} color="black">Google Pixel</Heading>
                        <Text>Google Pixel 6A</Text>
                        <Heading mt='10%' fontSize={'sm'}>Oneplus</Heading>
                        <Text>OnePlus 12R 5G</Text>
                        <Text>OnePlus 12</Text>
                        <Text>OnePlus Nord Ce4 5G</Text>
                    </Stack>
                </Box>
                </Flex>
                <Flex mt='10%' justifyContent={'space-between'}>
                    <Box>
                        <Stack spacing={'3'}>
                            <Heading fontSize={'sm'} color="black">Apple</Heading>
                            <Text>iPhone 16 Pro Max</Text>
                            <Text>iPhone 16 Plus</Text>
                            <Text>iPhone 16 Pro</Text>  
                        </Stack>
                    </Box>
                    <Box w="30%">
                        <Stack spacing={'3'}>
                            <Heading fontSize={'sm'} color="black">Samsung</Heading>
                            <Text>Samsung Galaxy A55 5G Covers</Text>
                            <Text>Samsung Galaxy A35 5G Covers</Text>
                            <Text>Samsung Galaxy S24 Ultra 5G Mobile Covers</Text>  
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={'3'}>
                            <Heading fontSize={'sm'} color="black">Realme</Heading>
                            <Text>Realme 12 Pro+ 5G</Text>
                            <Text>Realme 12 Pro 5G</Text>
                            <Text>Realme 11 Pro+ 5G</Text>  
                        </Stack>
                    </Box>
                </Flex>
            </Box>
            <Box
                mt="5%"
                height="500px"
                width="1px"
                bg="rgb(167,127,131)"
                mx="20px"
            />
            <Box m="5%" w="12%" fontSize={'sm'}>
                <Image cursor={'pointer'} src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg"/>
            </Box>
        </Flex>
        </Box>
        }
        </>
    )
}


export{
    MenDropdown,
    WomenDropdown,
    MobileCoversDropdown
}