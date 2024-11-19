import React, { useContext } from 'react'
import { Apicon } from './ContextPro'

export default function Details() {
    let {arrData,setArrData,handaleClick,setOlddata,oldData} = useContext(Apicon)
    const {AdventureTitle,Image,ID,CategoryName,ShortDescription,AdventureCost,BookingAvailability,Location,Duration,AdventureLevel,IncludedItems,EcoFriendlyFeatures,MaxGroupSize,SpecialInstructions} = oldData || {};
    console.log(AdventureTitle);
    
  return (
    <div className='w-11/12 mx-auto mt-3 mb-3 shadow-lg'>

        <div className='md:flex gap-3 p-3'>

        

        <div>
            <img className='h-[600px] w-[341px] object-cover rounded-2xl' src={Image} alt="" />
        </div>
        <div className='relative left-[55px]'>

            <h1 className='text-2xl font-bold md:text-3xl'>{AdventureTitle}</h1>
            <p className='font-bold mt-3'>Location:{Location}</p>
            <p>Booking Availability:{BookingAvailability}</p>
        
        <p>Adventure Level:{AdventureLevel}</p>
        <div>
        <p className='text-xl font-bold'>Iteams needed :</p>{
        
        IncludedItems.map(x => <p className='text-gray-500 font-semibold'>{x}</p>)

        }
        </div>

        <div>
        <p className='text-xl font-bold'>EcoFriendly Features:</p>{EcoFriendlyFeatures.map(x => <p className='text-gray-500 font-semibold'>{x}</p>)}
        </div>
        <div>
        <p className='text-xl font-bold'>ShortDescription:</p><p className='text-gray-500 font-semibold'>{ShortDescription}</p>
        </div>
        <div >
            <p className='text-2xl font-bold'>Special Instructions</p>
            <p className='text-lg font-bold'>
                {
                    SpecialInstructions.map(x => <p className='text-gray-500'>{x}</p>)
                }
            </p>

        </div>


        


        </div>

        </div>
      
    </div>
  )
}
