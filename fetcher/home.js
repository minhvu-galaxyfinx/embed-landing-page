import { getRequest } from "./index"
export const fetchHomeContent = (id) => {
    return getRequest(`http://localhost:1337/api/homes/${id}`)
}