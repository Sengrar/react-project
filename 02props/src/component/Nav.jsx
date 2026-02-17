const Nav = ({str})=>{          //{str}--> it is destructuring
    const arr = [2,3,4,5]
    return(
        <>
        <h1>NavBar</h1>
        <p>{arr}</p>
        <p>{arr[1]}</p>
        <p>{str}</p>
        </>
    )
}

export default Nav