import '../css/Links.css';
import React, { useState, useEffect } from 'react';

const Links = () => {
    const [links, setLinks] = useState([

    ])

    const getData=()=>{
        fetch('../data/links.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
    
          .then(function(myJson) {
            console.log(myJson);
            setLinks(myJson);
          });
      }
  
    useEffect(() => {
        getData();
    }, [])

    if (links != null && links.length > 0) {
        return (
            <div className="Links">
                <div className="linkButtons">
                    {links.map((props) => {
                        return(
                            <a href={props.link} target='_blank' rel="noreferrer">
                                <div className="linkCard">
                                    <div className="linkCardElements">
                                        <img src={require(`../assets/link-cards/Logos/${props.img}`)} alt="logo"></img>
                                        <h1>
                                            {props.name}
                                        </h1>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        );
    }else {
        return(
            <div className="Links">
                Nothing to display here.
            </div>
        )
    }
    
};

export default Links;