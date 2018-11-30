import React from 'react'
export default function(props){
    let fruitData = props.data;
    console.log(props);
    let data = ["销量","新品","价格"];
    return (
        <div id='productList'>
            <header className='navList'>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className='list'>{item}</div>
                        )
                    })
                }
            </header>
            <div className='pruductShow'>
                {
                    fruitData.map((item,index)=>{
                        return(
                            <div key={index} className='productContent line-bottom'>
                                <div className='img'>
                                    <img src={item.SmallPic} alt=""/>
                                </div>
                                <div className='inforPro'>
                                    <p className='title'>{item.CommodityName}</p>
                                    <p className='text'>{item.SubTitle}</p>
                                    <i className='label'>{item.PromotionTag}</i>
                                    <p className='price'>
                                        <span className='priceRed'>￥{item.SellPrice}</span>
                                        <span className='standard'>{item.Spec}</span>
                                        <span className='addCart'></span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}