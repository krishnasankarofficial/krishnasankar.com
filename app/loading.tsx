export default function Loading() {
    return (
        <div className="w-screen h-screen bg-black bg-opacity-50 text-white flex items-center justify-center z-[60] fixed top-0">
            <div className="w-10 h-10 rounded-full border-4 border-b-0 border-l-0 border-t-cyan-500 border-r-cyan-500 animate-spin"></div>
        </div>
    );
}