const Props = (prop)=>{
    return(
        <>
        <h1>Props Component</h1>
        <p>{prop.brr}</p>
        <p>{prop.brr[1]}</p>
        <p>{prop.object.name}</p>
        <p>{prop.object.age}</p>
        <p>{prop.arrayOfObject[0].firstName}</p>
        <p>{prop.arrayOfObject[0].lastName}</p>
        <p>{prop.arrayOfObject[1].firstName}</p>
        <p>{prop.arrayOfObject[1].lastName}</p>
        <p>{prop.JSON.id}</p>
        <p>{prop.JSON.userName}</p>
        <p>{prop.JSON.role}</p>
        </>
    )
}

export default Props;