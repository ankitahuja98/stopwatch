import React from 'react'


const Buttons = (props) => {

    const {start,Pause,Resume,reset,Lap,BtnDisplay} = props

  return (
    <div className='BtnDiv flex justify-center items-center mt-10 mb-10 font-bold text-xl'>
      <button className='startbtn btn btn-success' onClick={start} style={{display:BtnDisplay.Startbtn}}>Start</button>
      <button className='pausebtn btn btn-warning' onClick={Pause} style={{display:BtnDisplay.Pausebtn}}>Pause</button>
      <button className='resumebtn btn btn-warning' onClick={Resume} style={{display:BtnDisplay.Resumebtn}}>Resume</button>
      <button disabled={BtnDisplay.Resetbtn} className='resetbtn btn btn-danger' onClick={reset} style={{display:BtnDisplay.Resetbtn}}>Reset</button>
      <button disabled={BtnDisplay.lapbtn} className='lapbtn btn btn-primary' onClick={Lap} style={{display:BtnDisplay.lapbtn}}>Lap</button>
    </div>
  )
}

export default Buttons
