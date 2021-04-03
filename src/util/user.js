import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "../Graphql/query";

const user=null
function getUser(){
    const {data:{getUser:u}}=useQuery(GET_USER);
    user=u
}
getUser();

export default user;






