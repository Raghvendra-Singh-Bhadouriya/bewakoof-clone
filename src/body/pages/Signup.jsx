import { Box, Flex, Image, Text, Input, Button, Heading, FormControl, FormLabel, Checkbox, Center } from '@chakra-ui/react'
import { useRef } from 'react'
import axios from 'axios';


const SignUp = () => {
    const name = useRef(null);
    const mobile = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const checked = useRef(false)

    function handleSubmit(e){
        e.preventDefault()

        let obj={
            name: name.current.value,
            mobile: mobile.current.value,
            email: email.current.value,
            password: password.current.value
        }

        postUserDetails(obj);
        
    }


    async function postUserDetails(userDetail){
        try {
            let res = await axios({
                method:"post",
                url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/signup.json`,
                data: userDetail
            })
            console.log(res?.data)
        } catch (error) {
            console.log("error in signup", error.message)
        }
    }

    return(
        <Flex fontFamily={'sans-serif'} bgGradient="linear(to-t, rgb(255,244,198), white)">
            <Box w='50%'>
                <Image w='60%' m='auto' mt='10%' mb='10%' src='https://images.bewakoof.com/web/ik-signup-desktop-v2.jpg'/>
            </Box>
            <Box m="auto" w='40%' bgColor="white">
                <Box mt='5%' ml='15%' mr='15%' mb='5%'>
                    <Heading fontSize='x-large' textAlign={'center'} color="rgb(51,51,51)">Sign Up</Heading>

                    {/* Using form tag to handle form submission */}
                    <form onSubmit={handleSubmit}>
                        <Text mt='5%' fontWeight={'bold'} fontSize={'large'} textAlign={'start'} color="rgb(51,51,51)">
                            Hi new buddy, let's get you started with the<br/> bewakoofi!
                        </Text>
                        <FormControl mt={4}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                ref={name}
                                type="text"
                                placeholder='Name'
                                required
                                borderBottom={'1px solid gray'}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Mobile</FormLabel>
                            <Input
                                ref={mobile}
                                type="number"
                                required
                                borderBottom={'1px solid gray'}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                ref={email}
                                type="email"
                                required
                                borderBottom={'1px solid gray'}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                ref={password}
                                type="password"
                                required
                                borderBottom={'1px solid gray'}
                            />
                        </FormControl>
                        <Checkbox size='sm' colorScheme='green' mt={4} borderColor={'gray'}>
                            I want to receive order updates on WhatsApp
                        </Checkbox>
                        
                        <Center>
                            <Button
                            w='100%'
                            h='60px' 
                            textAlign={'center'} 
                            mt={4} 
                            bgColor="rgb(66,162,162)" 
                            color="white" 
                            fontSize="x-large"
                            type="submit"
                            >
                                PROCEED
                            </Button>
                        </Center>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}

export default SignUp;
