import React ,{useState} from 'react'
import card from '../api/Cardsapi'
import Cards from '../components/Card';

const Project = () => {
  const [data, setdata] = useState(card);
  
  return (
    <div >
      <div className='h-[659px]'>

      <Cards data={data}/>
      </div>
    </div>
  )
}

export default Project