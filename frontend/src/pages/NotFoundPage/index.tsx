
import { FileQuestionMark } from 'lucide-react';

export default function NotFoundPage() {

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-screen">
      <FileQuestionMark className='w-20 h-20 text-[#A0A0A0]'/>
      <p className='text-[#A0A0A0]'>이 URL은 존재하지 않는 URL입니다.</p>
    </div>

  );


}