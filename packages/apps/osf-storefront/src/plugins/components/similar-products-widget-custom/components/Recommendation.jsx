import React,{useEffect} from 'react';
import {
    getRecommendationsRepository
  } from "@oracle-cx-commerce/commerce-utils/selector";
  import { useSelector } from "@oracle-cx-commerce/react-components/provider";



const Recommendation = () => {
    const recommendations = useSelector(getRecommendationsRepository);
    useEffect(() => {
        if (recommendations && recommendations.length > 0) {
            console.log(recommendations,"recommendations");
        }
      }, [recommendations]);

    
   
    return (<div>Hi</div>);
};


export default Recommendation;