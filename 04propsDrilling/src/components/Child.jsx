import GrandChild from './GrandChild';

const Child = ({name1})=>{
    return(
        <>
         <GrandChild name2={name1}></GrandChild>
        </>
    )
}

export default Child;