// import React from 'react';
import axios from 'axios';
// import { formatSeasons } from "../utils/formatSeasons";


const fetchShow =()=>{
return axios
            .get(
              "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
            )
            .then(res => {
                console.log(res.data);
                return res;
            });
};

export default fetchShow;