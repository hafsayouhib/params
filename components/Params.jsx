import {useParams} from 'react-router-dom'
let Parms =()=>{
    const users = [
         {
           id: 1 ,
           label: 'Red', 
           data: '#f00'
        }, 
         {
           id: 2,
           label: 'Blue',
           data: '#00f' 
        }
    ]
let { id} = useParams();
id = parseInt(id);


 
const user = users.find(user => user.id === id); 
    
return (
    <div>
        <ul>
            {user ? ( 
                <>
                    <li>Name: {user.label}</li>
                    <li>ID: {user.id}</li>
                </>
            ) : (
                <li>User not found</li>
            )}
        </ul>
    </div>
);
}
export default Parms
