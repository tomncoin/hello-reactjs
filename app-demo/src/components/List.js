import React from "react";

export default function ({data, render}){
    return data.map(item=>render(item)) ;
}