import React from 'react';
import {
  useParams,
  useHistory
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import  Hammer from "react-hammerjs"

import { destinations } from '../data/destinations';
import './destination.css'
export const Destination = (props) => {
    const {id} = useParams();
    const history = useHistory();
    const destination = destinations[id];
    const goBack = (event,direction) => {
        history.goBack();
    }
    return (
        <Hammer onDoubleTap={goBack} direction={'DIRECTION_RIGHT'} onSwipe={goBack}>
            <motion.div
                initial={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.3}}
                exit={{y: -500, opacity: 0 }}
                className="destination">
                <div className="destination-title-wrapper">
                    <h1 className="destination-title">{destination.title}</h1>
                    <h2 className="destination-subtitle">{destination.city}</h2>
                </div>
                <motion.img src={destination.img} className="destination-image"/>
                <motion.div 
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y:-3 }}
                    exit={{y: -70 }}

                transition={{ duration: 0.2, delay: 0.2}}
                    className="destination-meta-wrapper">
                    {destination.meta.map(meta => {
                        return(<div>
                            <span className="destination-meta-value">{meta.value}</span>
                            <span className="destination-meta-title">{meta.title}</span>
                        </div>);
                    })}
                </motion.div>
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.3}}
                className="destination-description">
                    <h3 className="destination-description-title">Facts</h3>
                    <p className="destination-description-text" >{destination.description}</p>
                </motion.div>
            </motion.div>
        </Hammer>

    )
}