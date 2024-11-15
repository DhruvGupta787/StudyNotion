import React, { useEffect, useState } from 'react'

const RequirementField = ({name, label, register, errors, setValue, getValue}) => {

  const [requirement, setrequirement]=useState("");
  const[requirementList, setrequirementList] = useState([]);

  
  useEffect(() => {
    register(name, {
        required:true,
        validate: (value) => value.length > 0
    })
  },[])

  useEffect(() => {
    setValue(name, requirementList);
  },[requirementList])


  const handleAddRequirement = () => {
    if(requirement){
        setrequirementList([...requirementList, requirement]);
        setrequirement("");
    }

  }

  const handleRemoveRequirement = (index) => {
    const updatedReuirementList = [...requirementList];
    updatedReuirementList.splice(index,1);
    setrequirementList(updatedReuirementList);
  }


  return (
    <div>
      
      <label htmlFor={name} className='text-white'>{label}<sup>*</sup></label>
      <div>
        <input
            type='text'
            id={name}
            value={requirement}
            onChange={(e) => setrequirement(e.target.value)}
            className='w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 '
        />
        <button
        type='button'
        onClick={handleAddRequirement}
        className='font-semibold text-yellow-50'
        >
            Add
        </button>
      </div>

      {
        requirementList.length > 0 && (
            <ul>
                {
                    requirementList.map((requirement, index) =>(
                        <li key={index} className='flex items-center text-richblack-5'>
                            <span>{requirement}</span>
                            <button
                            type='button'
                            onClick={() => handleRemoveRequirement(index)}
                            className='text-xs text-pure-greys-300' 
                            >
                                clear
                            </button>
                        </li>
                    ))
                }
            </ul>
        )
      }

      {
         errors[name] && (
            <span>
                {label} is Required
            </span>
         )
      }
       

    </div>
  )
}

export default RequirementField