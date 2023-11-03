import React, { useState } from 'react'


function Calculator() {
    const[display,setDisplay] = useState("")
    const handleClick = (value)=>{
        setDisplay(display + value)
    }
    const calculateResult = ()=>{
        try {
            const result = eval(display)
            setDisplay(result);
        } catch (error) {
            setDisplay('error')
        }
    }
    const clearDisplay = ()=>{
        setDisplay("")
    }
    
    return (
        <div className='container'>
            <div className='calculator'>
                <form action=''>
                    <div className='display'>
                        <input type="text" value={display}  />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={()=>clearDisplay()}  />
                        <input type="button" value="C" onClick={e=>setDisplay(display.slice(0, -1))} />
                        <input type="button" value="." onClick={()=>handleClick('.')} />
                        <input type="button" value="/" onClick={()=>handleClick('/')}/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={()=>handleClick('7')} />
                        <input type="button" value="8" onClick={()=>handleClick('8')} />
                        <input type="button" value="9" onClick={()=>handleClick('9')} />
                        <input type="button" value="*" onClick={()=>handleClick('*')}/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={()=>handleClick('4')} />
                        <input type="button" value="5" onClick={()=>handleClick('5')} />
                        <input type="button" value="6" onClick={()=>handleClick('6')} />
                        <input type="button" value="+" onClick={()=>handleClick('+')} />
                    </div>
                    <div>
                        <input type="button" value="1" onClick={()=>handleClick('1')} />
                        <input type="button" value="2" onClick={()=>handleClick('2')} />
                        <input type="button" value="3" onClick={()=>handleClick('3')} />
                        <input type="button" value="-" onClick={()=>handleClick('-')} />
                    </div>
                    <div>
                        <input type="button" value="00" onClick={()=>handleClick('00')} />
                        <input type="button" value="0" onClick={()=>handleClick('0')} />
                        <input type="button" value="=" className='equal' onClick={()=>calculateResult()}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Calculator