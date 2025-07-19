function Bucket({ color ,onClick }) {
    let textColor = 'white';
    if(color =='Yellow' || color == 'Pink' ||color == 'Lavender' ||color == 'White'){
        textColor = 'black';
    }
    
    return (
        <button onClick={onClick}
        className="px-4 py-1 
        font-bold  
        rounded-3xl shadow-lg"
        style={{ backgroundColor: color ,color:textColor}}
        >{color}</button>
    )
}
export default Bucket;