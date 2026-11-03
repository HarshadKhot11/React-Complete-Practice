import Swal from 'sweetalert2';
import {toast,Toaster} from 'sonner';


export function Order(){

    async function HandelOrder(){
           const result = await Swal.fire(
            {
                title:"Delete This User?",
                text:"This action can not be undone",
                icon:"warning",
                showCancelButton:true,
                confirmButtonText:"Delete",
                cancelButtonText:"Cancel",
                //timer:2000
            }
        );

        if(result.isConfirmed){
           Swal.fire({
            title:'Deleted!',
            text:'your product has been deleted',
            icon:'success'
           })
        }
        else{
            toast.error('delete request is canceled!');
        }
    }


    async function FormHandling(){
        const Form = await Swal.fire({
            title:'Fill Info',
            input:'text',
            inputLabel:'Enter Your Name',
            inputPlaceholder:'Your Name',
            showCancelButton:true,
            confirmButtonText:'Submit',
            cancelButtonText:'Cancel',
            inputValidator:(value)=>{
                if(!value){
                    return('fill all information')
                }
            }
        });

        if(Form.isConfirmed){
            Swal.fire({
                title:'Submited Successfully!',
                text:`Wellcome ${Form.value}`
            })
        }
        else{
            Swal.fire({
                title:'Form not submited!',
                text:'you cancel the form submission'
            })
        }
    }
    
    return(<>
    <h1>Order page</h1>

        <button onClick={HandelOrder}>Delete</button><br /><br />

        <button onClick={FormHandling}>Form</button>

        <Toaster position='top-center' richColors/>

    </>)
}