import { useDrag, useDrop } from 'react-dnd';
const VideoItem = ({ video, index, moveVideo, handleVideoSelect }) => {
    const [, drag] = useDrag({
      type: 'VIDEO',
      item: { index },
    });
  
    const [, drop] = useDrop({
      accept: 'VIDEO',
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveVideo(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });
  
    return (
      <div ref={(node) => drag(drop(node))}>
        <li
          key={video.id}
          className="cursor-pointer flex items-center space-x-2 mb-5 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => handleVideoSelect(video)}
        >
          <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} className="w-17 h-16 object-cover rounded-md" />
          <div className="flex flex-col ml-2">
            <h3 className="text-sm font-semibold">{video.title}</h3>
            <p className="text-xs">{video.description}</p>
          </div>
        </li>
      </div>
    );
};
export default VideoItem