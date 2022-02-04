import axios from 'axios';
import React,{useState} from 'react';

const Search = ({setSearch}) => {


// ========================


const search = async (e)=>{
console.log(e.target.value);
    try{

       const res= await axios.post("http://localhost:5000/doctors/search",{
    
        fullName:e.target.value,
        })

        console.log(res);
        setSearch(res.data.result)
    }
    catch(err){
        console.log(err);
    }

}

  return <div>


     <input placeholder='search...' className='searchDoctr' type="text" onChange={search}/>

    
  </div>;
};

export default Search;
