import React, {useEffect, useState} from 'react';
import {
  useHistory
} from "react-router-dom";
import { motion } from "framer-motion"
import { DestinationCard } from '../components/destinationCard';
import { destinations } from '../data/destinations';


export const Overview = (props) => {
    const history = useHistory();
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [selectedKey, setSelectedKey] = useState(-1)
    const [position, setPosition] = useState([0,0]);
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        if (expanded) {
            setTimeout(() => {
                history.push(`/destination/${selectedKey}`)
            }, 500)
        }   
    },[expanded])
    const handleClick = (index, id, event) => {
        setClickedIndex(index);
        setSelectedKey(id)
        setPosition([event.currentTarget.offsetLeft, event.currentTarget.offsetTop - 25])
    }
    const delayMultiplier = clickedIndex === -1 ? 1: 0;
    const style = {position: 'absolute', left: '50%', width: '100%', display: 'flex', justifyContent: 'center'};
    return ( 
        <>
            {clickedIndex === -1 && Object.keys(destinations).map((key, index) => {
            return (<motion.div
                            key={key}
                            onClick={(event) => handleClick(index, key, event)}
                            initial={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, delay: 0.1 * index * delayMultiplier}}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            > 
                            <DestinationCard id={key} right={index % 2 !== 0} {...destinations[key]}/>
                    </motion.div>);             
            })
            }
            {clickedIndex !==-1 && (<motion.div
                style={style}
                key={selectedKey}
                initial={{ y: position[1], x: '-50%'}}
                animate={{y: 0,  x: '-50%' }}
                transition={{ duration: 0.5,}}
                onAnimationComplete={() => setExpanded(true)}
                > 
                <DestinationCard expanded={expanded} id={clickedIndex} right={clickedIndex % 2 !== 0} {...destinations[selectedKey]}/ >
            </motion.div>)
           }
        </>
    )
}
