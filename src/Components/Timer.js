import React from 'react'

const Timer = (props) => {
  return (
    <div className='Timer flex justify-center items-center mt-10 font-bold text-8xl'>
      <span className='p-2 m-2'>{props.time.h >=10 ? props.time.h : "0"+props.time.h}</span>:
      <span className='p-2 m-2'>{props.time.m >=10 ? props.time.m : "0"+props.time.m}</span>:
      <span className='p-2 m-2'>{props.time.s >=10 ? props.time.s : "0"+props.time.s}</span>:
      <span className='p-2 m-2'>{props.time.ms >=10 ? props.time.ms : "0"+props.time.ms}</span>
    </div>
  )
}

export default Timer
