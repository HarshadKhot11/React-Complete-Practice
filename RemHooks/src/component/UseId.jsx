import {useId} from 'react';

export function UseId({lable1,lable2}){
    const id1 = useId();
    const id2 = useId();

    return<>
        <label htmlFor={id1}>{lable1}</label>
        <input type="text" id={id1} placeholder='lable1'></input>


        <label htmlFor={id2}>{lable2}</label>
        <input type="text" id={id2} placeholder='label2'/><br /><br />
    </>
}