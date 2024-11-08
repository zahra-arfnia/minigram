import React from 'react'
import Button from "./Button";
import { PencilIcon } from '@heroicons/react/24/solid'
import EditProfile from './EditProfile'
import IconButton from "./IconButton";


export default function TestButton() {
  return (
    <>

<Button color="blue" size="large" onClick>
       Sign in
      </Button>
      <Button color="black" size="large" onClick>
        Sign up
      </Button>
      
      
       
      <Button color="blue" size="xsmall" onClick>
        Button 1
      </Button>
      <Button color="black" size="xsmall" onClick>
        Button 2
      </Button>
      
   
    <Button color="blue" size="larger" onClick>
        Sign in
      </Button>
  

    <Button color="blue" size="larger" onClick>
        Sign up
      </Button>
      
    
  
 <Button color="blue" size="larger" onClick>
        Follow
      </Button>
 
<div className="min-h-screen flex items-center justify-center space-x-4 bg-gray-50">
  <div className="flex items-center space-x-2">
    <IconButton
      iconType="like"
      activeColor="text-purple"
      inactiveColor="text-purple"
    />
    <span
      className='text-purple'>
      0
    </span>
  </div>
  <IconButton
    iconType="save"
    activeColor="text-purple"
    inactiveColor="text-purple"
  />
</div>

<div className="flex justify-center items-center ">
      <EditProfile
        label="Edit Profile"
        icon={PencilIcon} 
        color="bg-strongGray" 
        textColor="text-white" 
        onClick
      />
    </div>




    </>
  )
}
