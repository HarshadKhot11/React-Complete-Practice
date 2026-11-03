import {BarChart,Bar,XAxis,YAxis,Tooltip,Line,PieChart,Pie,} from 'recharts';
import Products from '../../Dataset/Products.json';
import {useDropzone} from 'react-dropzone';
import { toast,Toaster } from 'sonner';
import { useState } from 'react';


export function Setting(){

    const Items = Products;
    const {getRootProps,getInputProps} = useDropzone(
        {
            onDrop:OnDrop,
            multiple:false,
            // accept:{
            //     "image/*":['.jpg','.png','.jpeg','.webp']
            // },
            // accept:{
            //     "application/pdf":['.pdf']
            // },
            maxSize:5 * 1024 * 1024
        });
        

    let [file,setFile] = useState(null);
    let [priview,setPriview] = useState(null); //image preview

    function OnDrop(acceptedFile,rejectedFiles){
        
        const store = acceptedFile[0];
        if(store){
            setFile(acceptedFile[0]);
            toast.success(`${file.name} dropped successfully !`);
        }
        
        if (rejectedFiles.length > 0){
            toast.error("file should be less than 2 mb");
        }

        const previewUrl = URL.createObjectURL(store);
        setPriview(previewUrl);

    }

    return(<>
    <h1>Stock</h1>
    <br />
    <br />
    <h2>BarChart</h2>
    <div>
            
             <BarChart height={400} width={900} data={Items}>
                <XAxis dataKey="category" />
                <YAxis dataKey="price" />
                <Line dataKey="price"/>
                <Tooltip />
                <Bar dataKey="price" fill="orange"/>
                
            </BarChart>

       
    </div>

    <div>
        <h1>PieChart</h1>
        <PieChart width={400} height={300}>
           <Pie 
           data={Items}
           dataKey="rating"
           nameKey="category"
           innerRadius={60}
           outerRadius={100}
           fill='purple'
           /> 
            <Tooltip />
        </PieChart>
    </div>
        <div>
            <h2>File DropZone</h2>
        </div>
        <div {...getRootProps()} style={{border:'black 2px solid', height:'100px',textAlign:'center',alignContent:'center', width:'500px', marginBottom:'20px'}}>
            <input {...getInputProps()} />
            <p>Drop or select file here</p>
        </div>

        <div>
            <p>File Details:</p>
            {file&&(
            <>
            <p>Name: {file.name}</p>
            <p>Size: {file.size}</p>
            <p>Type: {file.type}</p>
            </>
            )}

            <p>Image Preview:</p>
            {
                priview &&(
                    <img src={priview} alt="image" className="w-48 h-48 object-cover mt-3"/>
                )
            }
        </div>

        <Toaster position="top-center" richColors/>

    </>)
}

