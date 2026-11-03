import {UseRef} from './component/UseRef';
import {InputFocus} from './component/InputFocus'
import {SelectText} from './component/SelectText'
import {RemPreval} from './component/RemPreVal'
import {VideoPlayer} from './component/PlayPause'

export function App(){
    return<>
    <UseRef />
    <InputFocus />
    <SelectText />
    <RemPreval/>
    <VideoPlayer />
    </>
}