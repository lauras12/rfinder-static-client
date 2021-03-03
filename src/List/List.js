import React from 'react';
import GreenContext from '../Context';
import ListItem from '../ListItem/ListItem';

export default class List extends React.Component {
    static contextType = GreenContext;
    render() {
       
        let {list} = this.context;
        list = list.map(item => {
                return (
                   <ListItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    phone={item.phone}
                    price={item.price}
                    img={item.image_url}
                    website={item.url}
                    rating={item.rating}
                   />
                )
            })

        return(
            <ul>
                {list}
            </ul>
        )

    }
} 