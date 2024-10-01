import React from "react";
import ItemDisplay from "./ItemDisplay";
import { Spacer } from "@chakra-ui/react";
function ItemPage({setItems}){
    return(
        <>
        <ItemDisplay setItems={setItems} />
        <Spacer h={40}></Spacer>
        </>

    );
}

export default ItemPage;