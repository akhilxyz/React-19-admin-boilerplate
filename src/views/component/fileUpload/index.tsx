import UploadFiles from "@/components/UploadFiles";
import { FunctionComponent } from "react";

interface FileUploadProps {

}

const FileUpload: FunctionComponent<FileUploadProps> = () => {

    return (
        <div className="flex flex-col items-center justify-center mt-[100px] from-gray-900 to-blue-900 p-6 !mt-10">
            <UploadFiles
                maxCount={3}
                fileSize={5}
                accept="image/*,video/*"
                width={150}
                height={150}
                borderRadius={10}
                title="Upload File"
            />
        </div>
    );
}

export default FileUpload;