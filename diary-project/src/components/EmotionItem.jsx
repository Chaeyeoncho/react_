import "../components/EmotionItem.css";
import getEmotionImage from "../utils/get-emotion-image";

function EmotionItem({emotionId , emotionName , isSelected}){
    const emotionImage = getEmotionImage(emotionId);

    return(
        <div className = {`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}>
            <img className = "emotion_img" src={emotionImage} alt={emotionName} />
            <div className = "emotion_name">{emotionName}</div>
        </div>
    )
}

export default EmotionItem;