function PasswordCard(){
    return(
        <>
            <div className="mainContainer w-full h-screen bg-red-500 flex justify-center items-center">
                <div className="innerContainer  w-9/12 h-5/6 bg-red-200  flex justify-center items-center">
                    <div className="passwordCard  w-6/12 h-4/6 bg-red-300  flex justify-center items-center flex-col">
                        <div className="input_copyBtn w-9/12 bg-red-100 p-2 flex justify-around mb-5">
                            <input type="text" className="w-9/12 "/>
                            <button>Copy</button>
                        </div>
                        <div className="pwdlength">
                            <input type="range"/>
                        </div>
                        <div className="checkBoxes m-5">
                           <div>
                                <input type="checkbox" id="upperCase" name="upperCase" value="" className=""/>   
                                <label htmlFor = "upperCase">Uppercase</label>
                           </div>
                            <div>
                                <input type="checkbox" id="lowerCase" name="lowerCase" value=""/>
                                <label htmlFor = "lowerCase">LowerCase</label>
                            </div>
                            <div>
                                <input type="checkbox" id="specialCharacter" name="specialCharacter" value=""/>
                                <label htmlFor = "uppspecialCharactererCase">Characters</label>
                            </div>
                            <div>
                                <input type="checkbox" id="number" name="number" value=""/>
                                <label htmlFor = "number">Number</label>
                                
                            </div>
                        </div>
                        <div className="pwdBtn bg-white p-3 rounded ">
                            <button>Generate Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PasswordCard