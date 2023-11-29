import SingleItem from "./SingleItem"

const DisplayItems = ({subs, eliminarItem, editItem }) => {
  return (
   <div>
        <h2>Suscripciones</h2>
        {
            subs.map(item => (
                <SingleItem
                key={item.id} 
                id={item.id} 
                price={item.price} 
                type={item.type}
                eliminarItem={eliminarItem}
                editItem={editItem}
                />
            ))


        }
   </div>
  )
}

export default DisplayItems
