import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router';
import { toast, Toaster } from 'sonner';

export function Profile(){

    let Navigate = useNavigate();

    return(<>
    <h1>Pofile page</h1>

    <Button onClick={()=>Navigate(-1)} style={{marginRight:'10px' }}>Prvious</Button>
    <Button onClick={()=>Navigate('/dashboard/order')}>Next</Button><br /><br />

    <Button onClick={()=>toast.warning('This is warning')} className='me-2'>Warning</Button>
    <Button onClick={()=>toast.error('This is error')} className='me-2'>Error</Button>
    <Button onClick={()=>toast.success('This is success')} className='me-2'>Success</Button>


    <Toaster position="top-right" richColors />

    </>)
}