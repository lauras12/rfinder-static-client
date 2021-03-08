import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcon } from '@fortawesome/free-solid-svg-icons';

export default function Place(props) {
   
    const findRating = () => {
        const rating = [];
        for(let i =0; i < props.rating; i++){
            rating.push(<span key={i}>
                <FontAwesomeIcon icon={["far", "coffee"]} />
            </span>)
        } 
        return(
            <div>
                {rating}
            </div>
        )
    }
    
    return (
        <div>
            <Link to={`/bookmark/${props.reviewedPlaceId}`}>
                <button>Save for future</button>
            </Link>
            <h3>{props.placeName}</h3>
            <p>{props.city}</p>
            <p>{props.comments}</p>
            {findRating()}
        </div>
    )
}
