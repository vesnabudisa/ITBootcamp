import axios from "axios"

import {BASE,ALL} from "./constants"

export const getAllCountries = () => axios.get(`${BASE}${ALL}`)