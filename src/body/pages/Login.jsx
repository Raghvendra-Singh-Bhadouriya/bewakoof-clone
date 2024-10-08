import { Flex, Box, Heading, Image, Text, Input, Button, Divider,FormControl, FormLabel } from "@chakra-ui/react"
import axios from 'axios'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [compare, setCompare] = useState([])
    const number = useRef(null)
    const navigate = useNavigate()
console.log(compare)


    function handleSubmit(e) {
        e.preventDefault();
        const mobileNumber = number.current.value;  // Get the mobile number value
        console.log(mobileNumber);
    
        const valid = compare.map(user => user.mobile);  // Create an array of mobile numbers
    
        if (valid.includes(mobileNumber)) {  // Check if the mobile number exists in the array
            navigate("/");
        } else {
            navigate("/signup");
        }
    }
    

    async function loginDetail() {
        try {
            let res = await axios({
                method: 'get',
                url: `https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/signup.json`
            });
    
            console.log("Response object: ", res);
    
            
            if (res?.data && typeof res.data === 'object') {
                const data = Object.values(res.data);
                console.log("Converted array: ", data);
                setCompare(data);
            } else {
                console.log('Response does not contain valid data');
            }
        } catch (error) {
            console.log('error in login', error.message);
        }
    }
    

    useEffect(() => {
        loginDetail()
    }, [])

   
    return(
        <>
        <Flex>
            <Box w="50%" bgGradient="linear(to-r, rgb(255,244,198), white)">
                <Box mb='10%'>
                    <Heading w="80%" m='auto' fontSize={'30px'}>Welcome to the world of Bewakoof®!</Heading>
                </Box>
                <Box w='80%' m="auto" mt='30%'>
                    <Image src="https://images.bewakoof.com/web/group-19-1617704502.png"/>
                </Box>
            </Box>
            <Box w="50%" fontFamily={'sans-serif'}>
                <Box textAlign={'center'}>
                    <Heading>Log in / Sign up</Heading>
                    <Text>for Latest trends, exciting offers and everything Bewakoof®!</Text>
                    <Box mt="10%">
                        <form onSubmit={handleSubmit}>
                        <Flex border="1px solid black" w='55%' m='auto' borderRadius={'10px'}>
                            <Flex h='35px' m="auto" p='1%' bgColor="rgb(245,245,245)" color="gray.400">
                                <Image w="35%" h="22px" src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"/>
                                +91
                            </Flex>
                                <FormControl>
                                    <Input
                                    type="text"
                                    ref={number}
                                    placeholder="Enter Mobile Number"
                                    h="60px"
                                    fontSize={'lg'}
                                    border="none"
                                    _placeholder={{color:"gray"}}
                                    required
                                    />
                                </FormControl>
                        </Flex>
                        <Button type="submit" w="55%" h='60px' mt="5%" bgColor='rgb(66,162,162)' color="white" fontSize={"x-large"} fontFamily={'sans-serif'}>
                            CONTINUE
                        </Button>
                        </form>
                    </Box>
                    <Flex w="60%" m="auto" mt='5%'>
                        <Divider pt="4%" borderColor="black"/>
                        <Text pl="1%" pr="1%" fontSize={'large'} fontFamily={'sans-serif'}>OR</Text>
                        <Divider pt='4%' borderColor="black"/>
                    </Flex>
                    <Flex border="1px solid gray" w='50%' m="auto" mt='5%' p="1%" h='45px' borderRadius={'8px'} cursor={'pointer'}>
                        <Image m="auto" w="8%" h='20px' src="https://images.bewakoof.com/web/carbon-email-1620039620.png"/>
                        <Text color='gray' m="auto" fontFamily={'sans-serif'} fontWeight={'700'}>CONTINUE WITH EMAIL</Text>
                    </Flex>
                    <Flex w='55%' m='auto' mt='5%' justifyContent={'space-around'}>
                        <Flex border="1px solid gray"  p="3%" borderRadius={'8px'} cursor={'pointer'}>
                            <Image mr='5%' h="20px" src='https://images.bewakoof.com/web/group-3-2x-1558356035.png'/>
                            <Text color='gray' m="auto" fontFamily={'sans-serif'} fontWeight={'700'}>GOOGLE</Text>
                        </Flex>
                        <Flex border="1px solid gray"  p="3%" borderRadius={'8px'} cursor={'pointer'}>
                            <Image mr='5%' h="20px" src='https://images.bewakoof.com/web/bi-facebook2x-1620886445.png'/>
                            <Text color='gray' m="auto" fontFamily={'sans-serif'} fontWeight={'700'}>FACEBOOK</Text>
                        </Flex>
                    </Flex>
                    <Text w="55%" m="auto" mt='10%' textAlign={'start'} fontSize={'small'} color={'gray.400'}>
                    By creating an account or logging in, you agree with Bewakoof®'s <Text as='span' fontWeight={'bold'} color="gray">Terms and Conditions</Text> and <Text as='span' fontWeight={'bold'} color='gray'>Privacy Policy</Text>.
                    </Text>
                </Box>
            </Box>
        </Flex>
        </>
    )
}

export default Login;