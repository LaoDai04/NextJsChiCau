import Link from "next/link"
import React from "react";

  export default function Hello(){
    return(
    <>
        <h1>hello</h1>
        <ul>
            <li>prod 1</li>
            <li>prod 2</li>
        </ul>

        <button type="button" onClick={testNavigate}>hello</button>
    </>)
}

// onPress={() => {return <Link href={'/userLogin'}></Link>}

 const testNavigate  = () => console.log("test")