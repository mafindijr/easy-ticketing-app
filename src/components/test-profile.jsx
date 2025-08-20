import React, { useState } from "react";

const ProfileUploader = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // validate file type
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setError("File type not supported. Please upload a png, jpeg, or jpg");
      setImageFile(null);
      setPreviewUrl(null);
      return;
    }

    // validate size
    if (file.size > 10 * 1024 * 1024) {
      setError("File too large. Max 10MB");
      setImageFile(null);
      setPreviewUrl(null);
      return;
    }

    setError("");
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleRemove = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setError("");
  };

  return (
    <div>

      <div className="border border-[#cccccc] p-4 rounded-lg flex flex-col items-center">
        <div className="w-24 h-24 mb-3 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="preview"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            "J"
          )}
        </div>
            <div className="flex flex-col">
              <h4>Profile Picture</h4>
               <div className="inline-flex gap-[10px]">
                <label className="w-[172px] bg-homeexplore text-[16px] font-montserrat font-semibold rounded-[8px] px-[8px] py-[12px] cursor-pointer inline-flex items-center space-x-2 text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0 0l-3-3m3 3l3-3M12 3v9m0 0l-3-3m3 3l3-3"
                    />
                </svg>
                <span>Upload image</span>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleChange}
                    className="hidden"
                />
                </label>

                {imageFile && (
                <button
                    onClick={handleRemove}
                    className="w-[92px] text-[16px] text-[#999999] font-montserrat font-semibold rounded-[8px] px-[8px] py-[12px]"
                    style={{boxShadow: " 0px 2px 0px 1px rgba(0, 0, 0, 0.25)"}}
                            
                >
                    Remove
                </button>
                )}
              </div>
                <span>png*,jpeg*, files under 10mb</span>
            </div>


        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default ProfileUploader;



// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";

// export default function ProfileForm() {
//   const { handleSubmit, control, register, reset, formState: { errors } } = useForm();
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [errorMsg, setErrorMsg] = useState("");

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const validateImage = (file) => {
//     const validTypes = ["image/png", "image/jpeg", "image/jpg"];
//     if (!file) return true;
//     if (!validTypes.includes(file.type)) {
//       setErrorMsg("File type not supported. Please upload a png, jpeg, or jpg");
//       return false;
//     }
//     if (file.size > 10 * 1024 * 1024) {
//       setErrorMsg("File too large. Max 10MB");
//       return false;
//     }
//     setErrorMsg("");
//     return true;
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto border p-6 rounded-xl">
//       <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

//       {/* Profile Picture */}
//       <Controller
//         control={control}
//         name="profileImage"
//         defaultValue={null}
//         rules={{
//           validate: validateImage,
//         }}
//         render={({ field: { onChange, value } }) => (
//           <div className="border p-4 rounded-lg flex flex-col items-center mb-4">
//             <div className="w-24 h-24 mb-3 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
//               {previewUrl ? (
//                 <img
//                   src={previewUrl}
//                   alt="preview"
//                   className="object-cover w-full h-full rounded-full"
//                 />
//               ) : (
//                 "J"
//               )}
//             </div>
//             <label className="cursor-pointer inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
//               <span>Upload image</span>
//               <input
//                 type="file"
//                 accept="image/png, image/jpeg"
//                 className="hidden"
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   if (validateImage(file)) {
//                     onChange(file);
//                     setPreviewUrl(URL.createObjectURL(file));
//                   } else {
//                     onChange(null);
//                     setPreviewUrl(null);
//                   }
//                 }}
//               />
//             </label>
//             {value && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   onChange(null);
//                   setPreviewUrl(null);
//                   setErrorMsg("");
//                 }}
//                 className="mt-2 px-4 py-2 bg-gray-300 rounded-lg"
//               >
//                 Remove
//               </button>
//             )}
//             {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
//           </div>
//         )}
//       />

//       {/* First Name */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">First Name *</label>
//         <input
//           className={`border w-full p-2 rounded ${errors.firstName ? "border-red-500" : ""}`}
//           placeholder="First name"
//           {...register("firstName", { required: "First name is required" })}
//         />
//         {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
//       </div>

//       {/* Last Name */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Last Name *</label>
//         <input
//           className={`border w-full p-2 rounded ${errors.lastName ? "border-red-500" : ""}`}
//           placeholder="Last name"
//           {...register("lastName", { required: "Last name is required" })}
//         />
//         {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
//       </div>

//       <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-lg w-full">
//         Save Profile
//       </button>
//     </form>
//   );
// }

