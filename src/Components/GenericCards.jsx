import React from "react";
import TiltCard from "./TiltCard";
import { useSiteData } from "../context/SiteDataContext";

function GenericCards({ type }) {
    const siteData = useSiteData();
    let cardData = [];
    switch (type) {
        case "service":
            cardData = siteData.service.left;
            break;
        case "education":
            cardData = Object.values(siteData.eduandexp.education);
            break;
        case "experience":
            cardData = Object.values(siteData.eduandexp.experience);
            break;
        default:
            cardData = [];
    }

    return (
        <div className="space-y-6">
            {cardData.map((item, index) => (
                <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}>
                    <TiltCard
                        index={index}
                        title={item.title || item.name}
                        description={item.description || item.details}
                        caption={item.caption}
                        time={item.time}/>
                </div>
            ))}
        </div>
    );
}

export default GenericCards;
