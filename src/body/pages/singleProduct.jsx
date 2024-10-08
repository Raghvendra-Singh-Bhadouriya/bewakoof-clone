import { Box, Card, Text, Heading, Button, Image, Flex, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios'
import Loading from '../../components/Loading';

const SingleProduct = () => {
    const { id } = useParams();
    console.log(id)
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function fetchSingleJoggerData(id){
        try {
            let res = await axios({
                method:'get',
                url: `https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/joggersslider/${id}.json`

            })
            const jog = res?.data
            console.log(jog)
            setItem(jog)
        } catch (error) {
            console.log(error);
        }
    }

    // async function fetchSingleMustHaveDealsData(id){
    //     try {
    //         let res = await axios({
    //             method:'get',
    //             url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/musthavedeals/${id}.json`
    //         })
    //         const deals = res?.data
    //         //console.log(deals)
    //         setItem(deals)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        fetchSingleJoggerData(id)
        
    }, [id])

    // useEffect(() => {
    //     fetchSingleMustHaveDealsData(id)
    // }, [id])

    //=======================Loading Indecator===========================//
    if(isLoading){
        return <Loading/>
    } 

    function handleAlert(){
        alert(`Successfully Purchased this Product`)
    }

    return(
        <>
        <Box>
            <Card w='80%' m="auto" p='5%'>
                <Flex>
                    <Box>
                        <Image src={item.img}/>
                    </Box>
                    <Box ml="2%">
                        <Stack spacing={4}>
                            <Heading fontSize={'xx-large'} color="gray.600">{item.title}</Heading>
                            <Text fontSize={'x-large'} color="gray.400">{item.des}</Text>
                            <Text fontSize="large">Rs. {item.price}</Text>
                            <Text color='gray.500' textDecoration={'line-through'} fontSize={'large'}>{item.maxprice}</Text>
                            <Text color='green' fontSize={'large'}>{item.off}</Text>
                            <Flex w="60%" mt='10%' justifyContent={'space-between'}>
                                <Button h='50px' bgColor={'yellow'}>ADD TO CART</Button>
                                <Button h='50px' onClick={handleAlert}>BUY</Button>
                            </Flex>
                        </Stack>
                    </Box>
                </Flex>
            </Card>
        </Box>
        </>
    )
}

export default SingleProduct;


// import { Box, Card, Text, Heading, Button, Image, Flex, Stack } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from 'axios';

// const SingleProduct = () => {
//     const { id } = useParams(); // Ensure this id is correct
//     const [item, setItem] = useState({}); // Use an object instead of an array

//     async function fetchSingleJoggerData(id) {
//         try {
//             let res = await axios({
//                 method: 'get',
//                 url: `https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/joggersslider/${id}.json`
//             });
//             const jog = res?.data;
//             console.log(jog);
//             setItem(jog); // Set the item directly
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         fetchSingleJoggerData(id); // Fetch the correct data based on the id
//     }, [id]);

//     function handleAlert() {
//         alert(`Successfully Purchased this Product`);
//     }

//     return (
//         <Box>
//             <Card w='80%' m="auto" p='5%'>
//                 <Flex>
//                     <Box>
//                         <Image src={item.img} alt={item.title} />
//                     </Box>
//                     <Box ml="2%">
//                         <Stack spacing={4}>
//                             <Text>{item.id}</Text> {/* Ensure the id matches */}
//                             <Heading fontSize={'xx-large'} color="gray.600">{item.title}</Heading>
//                             <Text fontSize={'x-large'} color="gray.400">{item.des}</Text>
//                             <Text fontSize="large">Rs. {item.price}</Text>
//                             <Text color='gray.500' textDecoration={'line-through'} fontSize={'large'}>{item.maxprice}</Text>
//                             <Text color='green' fontSize={'large'}>{item.off}</Text>
//                             <Flex w="60%" mt='10%' justifyContent={'space-between'}>
//                                 <Button h='50px' bgColor={'yellow'}>ADD TO CART</Button>
//                                 <Button h='50px' onClick={handleAlert}>BUY</Button>
//                             </Flex>
//                         </Stack>
//                     </Box>
//                 </Flex>
//             </Card>
//         </Box>
//     );
// };

// export default SingleProduct;
