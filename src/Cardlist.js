import React from "react";
import Card from "./card";

const CardList = (props) => {
const Robocollection = props.robonew.map((user , i)=>{
    return <Card  kay={i} name={props.robonew[i].name} id = {props.robonew[i].id} email = {props.robonew[i].email} />
})
    return Robocollection;
};

export default CardList;