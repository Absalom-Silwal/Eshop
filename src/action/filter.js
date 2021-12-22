export const applyFilter = (choice)=>{
    return(
        {
            type:'applyFilter',
            choice:choice

            
        }
    )
}
export const removeFilter = (choice) =>{
    return{
        type:'removeFilter',
        choice:choice
    }
}