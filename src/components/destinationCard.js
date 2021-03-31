import React from 'react';
import { motion } from "framer-motion"

export const DestinationCard = (props) => {
    return (
        <motion.div className={props.expanded ? 'card card__expanded' : 'card'}>   
            <img  className="card-image" src={props.img} />
            <div className={props.right ? `card-content card-content_right` : `card-content card-content_left` }> 
                <h3 className="card-title">{props.title}</h3>
                <p className="card-subtitle">{props.city}</p>
            </div>
        </motion.div>
        );
}

