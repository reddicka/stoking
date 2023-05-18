import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchBrands } from "../../store/reducers/coopSlice"
import { getBrandsSelector } from "../../store/selectors/coopSelector"
import { useIntl } from "react-intl"
import styles from "./Partnership.module.css"
//
import { AboutStoking } from "../../components/AboutStoking/AboutStoking"
import { WorkStages } from "../../components/WorkStages/WorkStages"
import { OfferTitle } from "../../components/OfferTitle/OfferTitle"
import { ContainerWithDescription } from "../../components/ContainerWithDescription/ContainerWithDescription"
import { VerticalScrollAnimate } from "../../components/VerticalScrollAnimate/VerticalScrollAnimate"
import { HorizontalScrollAnimate } from "../../components/HorizontalScrollAnimate/HorizontalScrollAnimate"
import { BoxIcon, BrandsIcon } from "../../components/icons"
import { CardItem } from "../../components/CardItem/CardItem"
import { CardBrand } from "../../components/CardBrand/CardBrand"
//
import { motion } from "framer-motion"
import { Box, Card, useMediaQuery } from "@mui/material"
// временные изображения карточек товаров
import img1 from "../../assets/img/temp_cards/1.png"
import img2 from "../../assets/img/temp_cards/2.png"
import img3 from "../../assets/img/temp_cards/3.png"
import img4 from "../../assets/img/temp_cards/4.png"
import img5 from "../../assets/img/temp_cards/5.png"


const Partnership: FC = () => {
    const brands = useAppSelector(getBrandsSelector)

    const intl = useIntl()
    const dispatch = useAppDispatch()
    const isMaxWidth900 = useMediaQuery("(max-width:900px)")

    useEffect(() => {
        dispatch(fetchBrands())
    }, [])

    // временные карточки товаров
    let cards = [
        {
            id: 1,
            name: intl.formatMessage({id: "partnership_goods_card_item_1_name"}),
            code: "46JCN1B0A1",
            price: "14 161",
            img: img1
        },
        {
            id: 2,
            name: intl.formatMessage({id: "partnership_goods_card_item_2_name"}),
            code: "3031800001",
            price: "6 970",
            img: img2
        },
        {
            id: 3,
            name: intl.formatMessage({id: "partnership_goods_card_item_3_name"}),
            code: "L4029",
            price: "2 728",
            img: img3
        },
        {
            id: 4,
            name: intl.formatMessage({id: "partnership_goods_card_item_4_name"}),
            code: "003H6902",
            price: "1 983",
            img: img4
        },
        {
            id: 5,
            name: intl.formatMessage({id: "partnership_goods_card_item_5_name"}),
            code: "s21a пластина",
            price: "1 875",
            img: img5
        }
    ]

    // варианты для анимации карточек товаров
    const cardsVariants = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1 + index * 0.1,
                ease: "easeInOut",
                type: "tween"
            }
        })
    }


    return (
        <div>
            <OfferTitle/>
            <WorkStages/>
            <AboutStoking/>

            <ContainerWithDescription
                title={`91 ${intl.formatMessage({ id: "partnership_brands_title" })}`}
                subtitle={intl.formatMessage({id: "partnership_brands_text"})}
                icon={<BrandsIcon/>}
                buttonText={intl.formatMessage({id: "button_become_a_seller"})}
                buttonLink="/auth"
            >
                <div className={styles.animateContainer}>
                    {
                        isMaxWidth900
                            ? (
                                <HorizontalScrollAnimate
                                    baseVelocity={50}
                                    className={styles.horizontalGridContainer}
                                >
                                    {
                                        brands.map((item) => (
                                            <CardBrand key={item.id} img={item.thumbnail.path} title={item.name}/>
                                        ))
                                    }
                                </HorizontalScrollAnimate>
                            )
                            : (
                                <VerticalScrollAnimate
                                    baseVelocity={80}
                                    className={styles.verticalGridContainer}
                                >
                                    {
                                        brands.map((item) => (
                                            <CardBrand key={item.id} img={item.thumbnail.path} title={item.name}/>
                                        ))
                                    }
                                </VerticalScrollAnimate>
                            )
                    }
                </div>
            </ContainerWithDescription>

            <ContainerWithDescription
                title={`3465 ${intl.formatMessage({ id: "partnership_goods_title" })}`}
                subtitle={intl.formatMessage({id: "partnership_goods_text"})}
                icon={<BoxIcon/>}
            >
                <Box sx={{
                    marginLeft: "24px",
                    boxSizing: "border-box",
                    position: "relative",
                    height: "256px"
                }}>
                    {
                        cards.map((item, index, array) => (
                            <motion.div
                                key={item.id}
                                variants={cardsVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={index}
                                viewport={{ once: true }}
                            >
                                <Card
                                    elevation={12}
                                    sx={{
                                        position: "absolute",
                                        height: "256px",
                                        width: "182px",
                                        top: "0",
                                        left: `calc((100% - 182px - 32px) / ${array.length - 1} * ${index})`
                                    }}
                                >
                                    <CardItem img={item.img} itemName={item.name} code={item.code} price={item.price}/>
                                </Card>
                            </motion.div>
                        ))
                    }
                </Box>
            </ContainerWithDescription>
        </div>
    )
}

export default Partnership