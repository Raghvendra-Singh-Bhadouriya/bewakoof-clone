import { Box, Heading, Image, Text, Flex, Card, Icon, Grid, GridItem } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import  Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {

    const [topSlider, setTopSlider] = useState([]);
    const [joggers, setJoggers] = useState([]);
    const [mustDeals, setMustDeals] = useState([]);
    const [steelOffer, setSteelOffer] = useState([]);
    const [manCategory, setManCategory] = useState([]);
    const [womenCategory, setWomenCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

     const SliderCss ={
        '.slick-slide': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },      
          '.slick-prev, .slick-next': {
            width: '30px',
            height: '30px',
            zIndex: 1,
            color: 'black',
            '&:before': {
                fontSize: '30px',
                color: 'black',
            },
        },
          '.slick-prev': {
            left: '5px',
          },
          '.slick-next': {
            right: '5px',
    
          },
          '.slick-dots': {
            top: '80%',
            'li button:before': {
              color: 'black',
            },
          },
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        cssEase: "ease-in-out",
        fade: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ],
    }

    const secondSetting={
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay:true,
        autoplaySpeed:5000,
        cssEase: "ease-in-out",
        fade: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ],
    }

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        //console.log('home component is rendered')
        fetchData();
        fetchJoggersData();
        fetchMustHaveDealsData();
        fetchSteelOffersData();
        fetchCategoryManData();
        fetchCategoryWomenData();
    }, [])

    async function fetchData(){
        try {
            let res = await axios({
                method:"get",
                url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/topSliderData.json`,
                
            })
            const top = res?.data
            setTopSlider(top)
            //console.log(top)
        } catch (error) {
            console.log(error)
            setIsError(true)
        }
    }

    async function fetchJoggersData(){
        try {
            let res = await axios({
                method:'get',
                url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/joggersslider.json`
            })
            const jog = res?.data
            //console.log(jog)
            setJoggers(jog)
        } catch (error) {
            console.log(error);
            setIsError(true)
        }
    }

    async function fetchMustHaveDealsData(){
        try {
            let res = await axios({
                method:'get',
                url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/musthavedeals.json`
            })
            const deals = res?.data
            //console.log(deals)
            setMustDeals(deals)
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchSteelOffersData(){
        try {
            let res = await axios({
                method:'get',
                url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/steelworthyoffers.json`
            })
            const off = res?.data
            //console.log(off)
            setSteelOffer(off)
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchCategoryManData(){
        try {
            let res = await axios({
                method:'get',
                url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/categorybymen.json`
            })
            const man = res?.data
            //console.log(man)
            setManCategory(man)
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchCategoryWomenData(){
        try {
            let res = await axios({
                method:'get',
                url:`https://bewakoof-25bc7-default-rtdb.asia-southeast1.firebasedatabase.app/categorybywomen.json`
            })
            const women = res?.data
            //console.log(women)
            setWomenCategory(women)
        } catch (error) {
            console.log(error);
        }
    }

    //=======================Loading Indecator===========================//
    if(isLoading){
        return <Loading/>
    } 
    
    if(isError){
        return <Error/>
    }

    return(
        <>
        <Box bgColor={"white"}>
        <Heading fontSize={'sm'}>HOME</Heading>
        <Box css={SliderCss}>
            <Slider {...settings}>
                {topSlider?.length && topSlider?.map((ele, index) => {
                    return(
                        <>
                        <Box key={index} w='100%' p="5px">
                            <Image src={ele.img}/>
                        </Box>
                        </>
                    )
                })}
            </Slider> 
        </Box>

        <Box border='0px solid blue' mt='1%'>
            <Link to='/buy-3-classic-fit-t-shirts-at-999'>
                <Image src='https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop-buy3-1727441580.gif'/>
            </Link>
        </Box>

 {/*================================= Joggers Under Rs 899 ============================== */}
        <Box pt='4%'pb='2%' bgGradient="linear(to-r, rgb(253,250,235), white)">
            <Heading textAlign={'center'} fontSize={'20px'} >JOGGERS UNDER RS 899</Heading>
            <Box  mt='2%' css={SliderCss}> 
 
                <Slider {...secondSetting} border='1px solid black'>
                    {joggers.map((ele, index) => {
                        return(
                            <>
                            <Link to={`product-detail/${ele.id}`}>
                            <Card key={index} w="80%" ml='10%' pb='4%' bgColor="white" color="black" border={'1px solid rgb(214,214,214)'}>
                                
                                    <Image src={ele.img} w="100%" h='200px'/>
                                    <Flex justifyContent={'space-between'} p='2%'>
                                        <Box w='80%'>
                                            <Text 
                                            fontSize={'md'}
                                            fontWeight={'500'}
                                            overflow="hidden"
                                            whiteSpace="nowrap"
                                                textOverflow="ellipsis"
                                            >
                                                {ele.title}</Text>
                                            <Text
                                                fontSize={'10px'}
                                            overflow="hidden"
                                            whiteSpace="nowrap"
                                            textOverflow="ellipsis"
                                            >{ele.des}</Text>
                                        </Box>
                                        <Box pt={'2%'}>
                                            <Icon as={FaHeart} boxSize={4} color="black"/>
                                        </Box>
                                    </Flex>
                                    <Flex justifyContent={'space-around'} borderBottom='1px solid rgb(214,214,214'>
                                        <Text fontWeight={'bold'}>{ele.price}</Text>
                                        <Text color='gray.500' textDecoration={'line-through'}>{ele.maxprice}</Text>
                                        <Text color='green' fontSize={'14px'} fontWeight={'bold'}>{ele.off}</Text>
                                    </Flex>
                            </Card>
                            </Link>
                            </>
                        )
                    })}
                </Slider>
            </Box>
            <Text textDecoration={'underline'} color='gray.800' pt='4%' textAlign={'center'}>
                Explore All
            </Text>
        </Box>

 {/* =========================Must-Have Deals: Min 75% Off!=========================== */}
        
 <Box pt='4%'pb='2%' bgGradient="linear(to-r, rgb(253,250,235), white)">
            <Heading textAlign={'center'} fontSize={'20px'}>Must-Have Deals: Min 75% Off!</Heading>
            <Box  mt='2%' css={SliderCss}> 
 
                <Slider {...secondSetting} border='1px solid black'>
                    {mustDeals.map((ele, index) => {
                        return(
                            <>
                            {/* <Link to={`/product-detail/${ele.id}`}> */}
                            <Card key={index} w="80%" ml='10%' pb='4%' bgColor="white" color="black" border={'1px solid rgb(214,214,214)'}>
                                    <Image src={ele.img} h='200px'/>
                                    <Flex justifyContent={'space-between'} p='2%'>
                                        <Box w='80%'>
                                            <Text 
                                            fontSize={'md'}
                                            fontWeight={'500'}
                                            overflow="hidden"
                                            whiteSpace="nowrap"
                                                textOverflow="ellipsis"
                                            >
                                                {ele.title}</Text>
                                            <Text
                                                fontSize={'10px'}
                                            overflow="hidden"
                                            whiteSpace="nowrap"
                                            textOverflow="ellipsis"
                                            >{ele.des}</Text>
                                        </Box>
                                        <Box pt={'2%'}>
                                            <Icon as={FaHeart} boxSize={4} color="black"/>
                                        </Box>
                                    </Flex>
                                    <Flex justifyContent={'space-around'} borderBottom='1px solid rgb(214,214,214'>
                                        <Text fontWeight={'bold'}>{ele.price}</Text>
                                        <Text color='gray.500' textDecoration={'line-through'}>{ele.maxprice}</Text>
                                        <Text color='green' fontSize={'14px'} fontWeight={'bold'}>{ele.off}</Text>
                                    </Flex>
                               
                            </Card>
                            {/* </Link> */}
                            </>
                        )
                    })}
                </Slider>
            </Box>
            <Text textDecoration={'underline'} color='gray.800' pt='4%' textAlign={'center'}>
                Explore All
            </Text>
        </Box>

 {/* ============================================================================ */}
        <Box pt='4%'>
            <Heading m="auto" w='30%' fontWeight={'bold'} fontSize={'3xl'}  textAlign={'center'} fontFamily={"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}>STEEL-WORTHY OFFERS</Heading>
            <Box border='0px solid black' w="90%" m='auto' mt='2%'>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}>
                    {steelOffer.map((ele, index) => {
                        return(
                            <>
                            <GridItem key={index}>
                                <Image w='90%' src={ele.img} />
                            </GridItem>
                            </>
                        )
                    })}
                </Grid>
            </Box>
        </Box>

 {/* ================================================================================== */}
        <Box pt="4%">
            <Heading m="auto" fontWeight={'bold'} fontSize={'2xl'}  textAlign={'center'}>Shop by Category - Men</Heading>
            <Box pt='2%'>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} rowGap={'3%'}>
                    {manCategory.map((ele, index) => {
                        return(
                            <>
                            <GridItem key={index}>
                                <Image src={ele.img}/>
                            </GridItem>
                            </>
                        )
                    })}
                </Grid>
            </Box>
        </Box>

 {/* ================================================================================ */}
        <Box pt='3%' mb="5%">
            <Heading m="auto" fontWeight={'bold'} fontSize={'2xl'}  textAlign={'center'}>Shop by Category - Women</Heading>
            <Box pt='2%'>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} rowGap={'3%'}>
                    {womenCategory.map((ele, index) => {
                        return(
                            <>
                            <GridItem key={index}>
                                <Image src={ele.img}/>
                            </GridItem>
                            </>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
        </Box>
        </>
    )
}

export default Home;

