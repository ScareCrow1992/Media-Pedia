


export default function ReviewCardHeader() {
    return (
        <div className="h-[4rem] bg-green-200">
            <div className="flex h-full mr-[1rem]">
                <div className=" m-[0.85rem] rounded-full aspect-square bg-red-300">
                    <div className="">
                    </div>
                </div>
                <div className="flex items-center h-full grow">
                    <span>이동진 평론가</span>
                </div>
                <div className="flex items-center h-full">
                    <span>★</span>
                    <span>4.0</span>
                </div>
            </div>
        </div>
    );
}