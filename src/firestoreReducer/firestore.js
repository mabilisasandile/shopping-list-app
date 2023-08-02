
import { createSlice } from '@reduxjs/toolkit'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Swal from 'sweetalert2';

export const firestoreReducer = createSlice({
    name: "db",
    initialState: [{
        itemName: "",
        itemDescription: "",
        amount: "",
        imageUrl: ""
    }],

    reducers: {
        addTransaction: async (state, action) => {
            try {
                const docRef = await addDoc(collection(db, "items"), action.payload);
                Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: 'Added successfully.',
                    showConfirmButton: false,
                    timer: 3000,
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
})

export const { addTransaction } = firestoreReducer.actions;
export default firestoreReducer.reducer


    // //Upload image to the Firebase storage

    // const [imageUpload, setImageUpload] = useState(null);
    // const [imageURL, setImageURL] = useState('');

    //     const handleUpload = () => {

    //         try {
    //             const imageRef = ref(storage, `hotel_images/${imageUpload.name + v4()}`);

    //             const uploadImage = uploadBytes(imageRef, imageUpload).then(() => {
    //                 getDownloadURL(imageRef).then((url) => {    //Get the image url
    //                     setImageURL(url);
    //                     Swal.fire({
    //                         icon: 'success',
    //                         title: 'Uploaded!',
    //                         text: 'Image has been uploaded.',
    //                         showConfirmButton: false,
    //                         timer: 3000,
    //                     });
    //                 })
    //             })
    //         } catch (error) {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Error!',
    //                 text: 'Error uploading image!',
    //                 showConfirmButton: false,
    //                 timer: 3000,
    //             });
    //         }

                // < label > Insert Image: </label >
                // <input
                //     type="file"
                //     onChange={(event) => setImageUpload(event.target.files[0])} />
                // <button onClick={handleUpload}>Upload</button>