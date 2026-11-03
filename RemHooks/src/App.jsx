import {UseReducer} from './component/UseReducer'
import {UseCallback} from './component/UseCallback'
import {UseLayoutEffect} from './component/UseLayoutEffect';
import {UseId} from './component/UseId';
import { UseTransition } from './component/UseTransaction';
import { UseDeferredValue } from './component/UseDeferredValue';
import { UseOptimistic } from './component/UseOptimistic';
import { UseActionState } from './component/UseActionState';




export function App(){
   const firstName = "FirstName";
     const lastName = "LastName";

  return<>
    {/* <UseReducer />
    <UseCallback />
    <UseLayoutEffect />
    <UseId lable1={firstName} lable2={lastName} />
    <UseTransition /> */}
    {/* <UseDeferredValue /> */}
    {/* <UseOptimistic /> */}
    <UseActionState />
  </>
}