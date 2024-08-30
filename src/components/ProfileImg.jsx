import { GoUpload } from "react-icons/go";
import { useUserStore } from "../store/store";
import { axiosInstance } from "../lib/axiosInstance";
import { toast, Toaster } from "sonner";
export default function ProfileImg() {
  const { user } = useUserStore((state) => state);
  const changePicHandler = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    console.log("Selected file:", file);

    const formData = new FormData();
    formData.append("file", file);

    // Logging formData contents
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      await axiosInstance
        .post("auth/profile/picture", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Explicitly set content type
          },
        })
        .then(() => {
          toast.success("تم تغيير الصورة بنجاح");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-28 h-28 rounded-full overflow-hidden m-auto my-4 relative group">
      <Toaster position="bottom-right" richColors />
      <input
        onChange={(e) => changePicHandler(e)}
        type="file"
        id="img-upload"
        className="hidden"
      />
      <label htmlFor="img-upload" className="cursor-pointer ">
        <img src={user.profile_pic} alt="" />
        <GoUpload className="absolute inset-0 m-auto text-transparent group-hover:text-white transition duration-300 text-3xl z-20 cursor-pointer" />
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-0 group-hover:opacity-65 transition duration-300 z-10 cursor-pointer" />
      </label>
    </div>
  );
}
