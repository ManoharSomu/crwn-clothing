import React from 'react';

import MenuItem from '../src/components/Menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[{
                title:'hats',
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1
            },
                {
                title:'Jackets',
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                id:2
            },
            {
            title:'Sneakers',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:3
        },
        {
        title:'Mens',
        imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        id:4
        },
        {
        title:'Womens',
        imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        id:5
        },]
        }
    }
    render(){
        return(
            <div className ="directory-menu">
                {
                    this.state.sections.map(({title, id, imageUrl}) =>(
                        <MenuItem  key={id} title={title} imageUrl={imageUrl} />
                    ))}

            </div>
        );
    }
}

export default Directory;